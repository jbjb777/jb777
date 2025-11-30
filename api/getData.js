import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
    databaseURL: process.env.FIREBASE_DB_URL
  });
}

export default async function handler(req, res) {
  try {
    const db = admin.database();
    const snapshot = await db.ref("items").once("value");
    res.status(200).json(snapshot.val());
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}
