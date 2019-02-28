window.onload= function() { //Added the function on slide 11

console.log("Creating page content"); //Just Testing The Console
	
	//header text
	var head = document.createElement("h1"); //creating a h1 tag
	var headText = document.createTextNode("Welcome to UWSP!");//creating text
	head.appendChild(headText); //adding text to the h1 tag
	head.style.color = "purple"; //changing the color 
	document.body.appendChild(head); //adding h1 to document
	
	var hyplink = document.createElement("a"); // creating an a tag
	var hyplinkText = document.createTextNode("UWSP"); //creating text
	hyplink.appendChild(hyplinkText); // adding text to a tag
	hyplink.setAttribute("href", "http://www.uwsp.edu"); //changing the attribute to uwsp website.
	document.body.appendChild(hyplink); //adding a tag to document
	
	//hypllink.text = "UWSP";
	//hyplink.href = "uwsp website"
	//document.body.appendChild(link)
		
	var para = document.createElement("p");
	var paraText= document.createTextNode("Lorem ipsum dolor sit amet");
	para.appendChild(paraText);
	para.style.fontSize= "xx-large";
	document.body.appendChild(para);
	

console.log("Done"); //Adding done as last code statement	
}	






