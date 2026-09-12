// Firebase Integration Module for Raport Integrasi Pondok Modern Al-Ghozali
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDocFromServer,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  deleteDoc,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

const OperationType = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  LIST: 'list',
  GET: 'get',
  WRITE: 'write',
};

function handleFirestoreError(error, operationType, path, auth) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid || null,
      email: auth?.currentUser?.email || null,
      emailVerified: auth?.currentUser?.emailVerified || null,
      isAnonymous: auth?.currentUser?.isAnonymous || null,
      tenantId: auth?.currentUser?.tenantId || null,
      providerInfo: auth?.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

let app = null;
let db = null;
let auth = null;
let isConnected = false;
let currentUser = null;

const listeners = [];
function notifyAuthChange(user) {
  currentUser = user;
  listeners.forEach(cb => {
    try { cb(user); } catch (e) { console.error(e); }
  });
}

async function initFirebase() {
  try {
    const res = await fetch('/firebase-applet-config.json');
    if (!res.ok) {
      console.warn('firebase-applet-config.json not found or could not be loaded.');
      return null;
    }
    const config = await res.json();
    app = initializeApp(config);
    // CRITICAL: getFirestore with firestoreDatabaseId
    db = getFirestore(app, config.firestoreDatabaseId);
    auth = getAuth(app);

    // Initial connection test
    try {
      await getDocFromServer(doc(db, 'test', 'connection'));
      isConnected = true;
      console.log('Firebase Firestore connection verified successfully.');
    } catch (err) {
      if (err instanceof Error && err.message.includes('the client is offline')) {
        console.error('Please check your Firebase configuration.');
      } else {
        console.log('Firestore connection verified with active session.');
        isConnected = true;
      }
    }

    onAuthStateChanged(auth, (user) => {
      notifyAuthChange(user);
    });

    return { app, db, auth };
  } catch (err) {
    console.error('Failed to initialize Firebase:', err);
    return null;
  }
}

// Global interface
window.AlGhozaliFirebase = {
  get db() { return db; },
  get auth() { return auth; },
  get currentUser() { return currentUser; },
  get isConnected() { return isConnected; },

  onAuthChange(cb) {
    if (typeof cb === 'function') {
      listeners.push(cb);
      if (auth) cb(currentUser);
    }
  },

  async loginWithGoogle() {
    if (!auth) throw new Error('Firebase Auth belum siap.');
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async logout() {
    if (!auth) return;
    await signOut(auth);
  },

  async saveGradeBatch(batchData) {
    if (!db || !auth || !auth.currentUser) {
      throw new Error('Harus login dengan akun Google terlebih dahulu untuk menyimpan ke Cloud Firestore.');
    }
    const batchId = 'batch_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const docRef = doc(db, 'batches', batchId);
    const payload = {
      jenjang: batchData.jenjang,
      kelas: batchData.kelas,
      subject: batchData.subject,
      submitterUid: auth.currentUser.uid,
      submitterEmail: auth.currentUser.email || '',
      studentCount: Number(batchData.studentCount || 0),
      averageScore: Number(batchData.averageScore || 0),
      highestScore: Number(batchData.highestScore || 0),
      lowestScore: Number(batchData.lowestScore || 0),
      grades: JSON.stringify(batchData.grades || []),
      createdAt: new Date().toISOString()
    };

    try {
      await setDoc(docRef, payload);
      return { success: true, batchId, data: payload };
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `batches/${batchId}`, auth);
    }
  },

  async fetchMyBatches() {
    if (!db || !auth || !auth.currentUser) return [];
    try {
      const q = query(
        collection(db, 'batches'),
        where('submitterUid', '==', auth.currentUser.uid)
      );
      const snapshot = await getDocs(q);
      const items = [];
      snapshot.forEach(docSnap => {
        items.push({ id: docSnap.id, ...docSnap.data() });
      });
      // Sort newest first
      items.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      return items;
    } catch (err) {
      handleFirestoreError(err, OperationType.LIST, 'batches', auth);
      return [];
    }
  },

  async deleteBatch(batchId) {
    if (!db || !auth || !auth.currentUser) throw new Error('Harus login.');
    try {
      await deleteDoc(doc(db, 'batches', batchId));
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `batches/${batchId}`, auth);
    }
  }
};

// Auto boot
initFirebase();
