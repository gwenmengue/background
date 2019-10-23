var css = document.querySelector("h3");
var firstcolor = document.querySelector(".firstcolor");
var secondcolor = document.querySelector(".secondcolor");
var body = document.getElementById("gradient");

function setGradient () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ firstcolor.value 
	+ ", " 
	+ secondcolor.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

firstcolor.addEventListener("input", setGradient);
secondcolor.addEventListener("input", setGradient);