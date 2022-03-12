  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  import {  getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCvd_OuvhLe-ATtOxDO_0ey94LjEeHZHkU",
    authDomain: "huellitas-a16de.firebaseapp.com",
    projectId: "huellitas-a16de",
    storageBucket: "huellitas-a16de.appspot.com",
    messagingSenderId: "85264667945",
    appId: "1:85264667945:web:6ba46f4e0572b34d45d338"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore();

//creo una colección yamada mascotas donde le paso como argumento el objeto que boi a enviar desde el formulario
export const agregarMascota=(mascota)=>addDoc(collection(db,'mascotas'), {mascota})
