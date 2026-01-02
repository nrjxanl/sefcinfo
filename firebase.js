import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQzQ8YuS3zNq2Dp40vHNNiFaQI6Yjl0wE",
  authDomain: "sefcinfo.firebaseapp.com",
  databaseURL: "https://sefcinfo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sefcinfo",
  storageBucket: "sefcinfo.firebasestorage.app",
  messagingSenderId: "745959737246",
  appId: "1:745959737246:web:97eca4876e73113b98f88f",
  measurementId: "G-BEHCWWHSR0"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

// [추가 2] 중요! 여기서 auth를 만들고 내보내야 html에서 가져다 쓸 수 있습니다.
export const auth = getAuth(app);

export async function loadData(path) {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, path));

    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return {};
    }
}