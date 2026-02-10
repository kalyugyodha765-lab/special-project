function saveName() {
  let name = document.getElementById("nameInput").value;

  if(name.trim() === ""){
    alert("Enter your name first 😌");
    return;
  }

  localStorage.setItem("savedName", name);
  window.location.href = "page2.html";
}

window.onload = function() {
  let name = localStorage.getItem("savedName");
  let greeting = document.getElementById("greeting");

  if(name && greeting){
    greeting.innerText = "Welcome " + name + " 💖";
  }

  if(window.location.pathname.includes("page4.html")){
    setInterval(createHearts, 400);
  }
}

function toggleCard(card){
  card.classList.toggle("active");
  createHearts();
}

function toggleCircle(el){
  el.classList.toggle("active");
  createHearts();
}

function goPage3(){
  window.location.href = "page3.html";
}

function goPage4(){
  window.location.href = "page4.html";
}

function createHearts(){
  let heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight - 50 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
  }
