  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
  import {  getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyADtXsWG7FuPEx1-aihkSTfhhu2aq3KZac",
    authDomain: "huellitas-fea70.firebaseapp.com",
    projectId: "huellitas-fea70",
    storageBucket: "huellitas-fea70.appspot.com",
    messagingSenderId: "529577789350",
    appId: "1:529577789350:web:0f4a06e2709f7ea486b167"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const db=getFirestore();

//creo una colección yamada mascotas donde le paso como argumento el objeto que boi a enviar desde el formulario
export const agregarMascota=(mascota)=>addDoc(collection(db,'mascotas'), {mascota})
export const optener= () => getDocs(collection(db, 'mascotas'));
export const optenercoleccion=(callback) =>onSnapshot(collection(db, 'mascotas'), callback)

