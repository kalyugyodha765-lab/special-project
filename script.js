function saveName() {

  let name = document.getElementById("nameInput").value;

  if(name.trim()===""){
    alert("Enter your name");
    return;
  }

  fetch("https://docs.google.com/forms/d/e/1FAIpQLSdfy4q1kE6U9rLUhn9Kn3WS4Gw9W6rgs8KIArSX6DybbxOnRQ/formResponse", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "entry.273210999=" + encodeURIComponent(name)
  });

  alert("Saved successfully 😌");

  window.location.href="page2.html";
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
