// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAFVBx0j85rWLIh6NB_dm2iWvmx6pVaRDA",
  authDomain: "ui-demo-project-b5930.firebaseapp.com",
  databaseURL: "https://ui-demo-project-b5930-default-rtdb.firebaseio.com",
  projectId: "ui-demo-project-b5930",
  storageBucket: "ui-demo-project-b5930.firebasestorage.app",
  messagingSenderId: "409754751751",
  appId: "1:409754751751:web:b587d250a689e35e0caba2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function saveName() {

  alert("Button clicked ✅");

  let name = document.getElementById("nameInput").value;

  if(name.trim() === ""){
    alert("Enter your name first");
    return;
  }

  // TEST WRITE
  database.ref("test123").set({
    check: "working"
  });

  alert("Trying to write to Firebase 🚀");

  window.location.href = "page2.html";
}

function toggleCard(card){
  card.classList.toggle("active");
}

function toggleCircle(box){
  box.classList.toggle("active");
}

function goPage3(){
  window.location.href="page3.html";
}

function goPage4(){
  window.location.href="page4.html";
}
