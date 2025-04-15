import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import "server-only";

const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
});

if (!getApps().length) {
  initializeApp({
  credential: firebaseCert,
  //storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});
}

export const db = getFirestore();
//export const storage = getStorage().bucket();
