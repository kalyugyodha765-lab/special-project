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
