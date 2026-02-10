// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAFVBx0j85rWLIh6NB_dm2iWvmx6pVaRDA",
  authDomain: "ui-demo-project-b5930.firebaseapp.com",
  databaseURL: "https://ui-demo-project-b5930-default-rtdb.firebaseio.com",
  projectId: "ui-demo-project-b5930",
  storageBucket: "ui-demo-project-b5930.firebasestorage.app",
  messagingSenderId: "409754751751",
  appId: "1:409754751751:web:b587d250a689e35e0caba2"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Save name
function saveName() {
  let name = document.getElementById("nameInput").value;

  if(name.trim() === ""){
    alert("Enter your name 😌");
    return;
  }

  database.ref("names").push({
    username: name
  });

  window.location.href = "page2.html";
}

function toggleCard(card){
  card.classList.toggle("active");
}

function toggleCircle(el){
  el.classList.toggle("active");
}

function goPage3(){
  window.location.href="page3.html";
}

function goPage4(){
  window.location.href="page4.html";
}
