document.body.style.backgroundColor = "#cce6ff";


let img1 = document.querySelector("#img1");
img1.addEventListener("click", clickimg1);
function clickimg1(){
	img1.classList.add("gray");
	img2.classList.remove("gray");
	img3.classList.remove("gray");
	img4.classList.remove("gray");
	document.getElementById("bio").innerHTML = "I am from Tokyo, Japan.";

}

let img2 = document.querySelector("#img2");
img2.addEventListener("click", clickimg2);
function clickimg2(){
	img2.classList.add("opacity");
	img1.classList.remove("opacity");
	img3.classList.remove("opacity");
	img4.classList.remove("opacity");
	document.getElementById("bio").innerHTML = "I love trying new food and cooking. My favorite is sushi!";
}

let img3 = document.querySelector("#img3");
img3.addEventListener("click", clickimg3);
function clickimg3(){
	img3.classList.add("gray");
	img1.classList.remove("gray");
	img2.classList.remove("gray");
	img4.classList.remove("gray");
	document.getElementById("bio").innerHTML = "I also love to travel and experience different cultures.";

}


let img4 = document.querySelector("#img4");
img4.addEventListener("click", clickimg4);
function clickimg4(){
	img4.classList.add("opacity");
	img3.classList.remove("opacity");
	img2.classList.remove("opacity");
	img1.classList.remove("opacity");
	document.getElementById("bio").innerHTML = "These are my best friends from highschool.";
}

