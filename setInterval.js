setInterval(setDate, 1000);

function setDate() {
  let d = new Date();
  document.getElementById("interval").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}