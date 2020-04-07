/* schrijf al je javascript code hier */
function  dagpasmin()
{
document.getElementById("dagpas").value--;
    if (document.getElementById("dagpas").value <= 0)
    document.getElementById("dagpas").value = 0
    if (document.getElementById("dagpas").value <= 0)
    document.getElementById("dagpas").value = 0
}

function dagpasplus()
{
document.getElementById("dagpas").value++;
if (document.getElementById("dagpas").value <= 0)
document.getElementById("dagpas").value = 0
}

function  peuterpasmin()
{
document.getElementById("peuterpas").value--;
if (document.getElementById("peuterpas").value <= 0)
document.getElementById("peuterpas").value = 0

}

function peuterpasplus()
{
document.getElementById("peuterpas").value++;
if (document.getElementById("peuterpas").value <= 0)
document.getElementById("peuterpas").value = 0
}

function  familiepasmin()
{
document.getElementById("familiepas").value--;
if (document.getElementById("familiepas").value <= 0)
document.getElementById("familiepas").value = 0
}

function familiepasplus()
{
document.getElementById("familiepas").value++;
if (document.getElementById("dagpas").value <= 0)
document.getElementById("dagpas").value = 0
}

function myFunction() {
  var x = document.getElementById("welkdiernieuw");
  var num = Math.round(Math.random() * 3)+1;
  console.log(num);
  if (num == 1){
      x.innerHTML="Aap"
  }
  console.log(num);
  if (num == 2){
      x.innerHTML="Nijlpaard"
  }
  console.log(num);
  if (num == 3){
      x.innerHTML="koala"
  }
  console.log(num);
  if (num == 4){
      x.innerHTML="Stokstaartje"
  }
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block") e.style.display = "none";
    else e.style.display = "block";
    b = true;
  }
   
  function laatzien() {
    var e = document.getElementById("laatzien");
    if (!b) e.style.display = "none";
    b = false;
  }

  var color = "blue";
 
function veranderkleur (num){
    document.getElementById("vak"+num).style.backgroundColor = gekozenkleur;
}
 
function setBlue() {
    color ="Blue";
}
 
function setYellow(){
    color = "Yellow"
}
 
function setRed(){
    color = "Red"
}

var gekozenkleur="";
function maakKleur(kleur){
    gekozenkleur=kleur;

}

function resets() {
    location.reload();
  }

var price = 5.5;
var pricef = 50;
var pricek = 7.6;
var priceFamilie = 50;

function normaalKost() {
    for (i = 1; i <= 10; i++) {
      document.getElementById("normaal").innerHTML +=
        "The price for " + i + " tickets is: " + i * price + "\n   ";
    }
  }
   
  function kinderenKost() {
    for (i = 1; i <= 10; i++) {
      document.getElementById("kinderen").innerHTML +=
        "The price for " + i + " tickets is: " + i * pricek + "\n   ";
    }
  }
  function familieKost() {
    for (i = 1; i <= 10; i++) {
      document.getElementById("familie").innerHTML +=
        "The price for " + i + " tickets is: " + i * priceFamilie + "\n   ";
    }

  }