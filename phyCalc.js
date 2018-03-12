window.onload = function(){
	var horizontalSearchBtn = document.getElementById("horizontal-search-btn"),
		verticalSearchBtn = document.getElementById("vertical-search-btn"),
		searchSection = document.getElementById("search-section"),
		searchBar = document.getElementById("search-bar"),
		closeSearchBtn = document.getElementById("close-search-btn"),
		caseList = document.getElementById("search-case-list");

	horizontalSearchBtn.addEventListener("click", openSearchSection);
	verticalSearchBtn.addEventListener("click", openSearchSection);
	searchBar.addEventListener("input", showList);
	closeSearchBtn.addEventListener("click", closeSearchSection);

	function openSearchSection(){
		if(!searchSection.classList.contains("active-search")){
			searchSection.classList.toggle("active-search");
			searchBar.focus();
		} else {
			searchSection.classList.remove("active-search");
			caseList.classList.remove("show");
			searchBar.value = "";
		}
	}

	function closeSearchSection(){
		if(searchSection.classList.contains("active-search")){
			searchSection.classList.remove("active-search");
			caseList.classList.remove("show");
			searchBar.value  = "";
		}
	}

	function showList() {
		if (searchBar.value.length > 0){
			caseList.classList.add('show');
			showAnchors();
		} else {
			caseList.classList.remove('show');
		}
	}

	function showAnchors(){
		let inputValue = searchBar.value.toUpperCase();
		let anchors = caseList.getElementsByTagName('a');
		let newAnchors = document.createElement("a");
		for (var i = 0; i < anchors.length; i++){
			let a = anchors[i];
			if (a.textContent.toUpperCase().indexOf(inputValue) > -1){
				anchors[i].style.display = "";
			} else {
				anchors[i].style.display = "none";
			}
		}
	}


	/*--- Toggle Hamburger Menu ---*/
	var icon = document.getElementById("icon");
	var clickBox = document.getElementById("click-box");
	var verticalNav = document.getElementsByClassName("vertical-nav")[0];
	clickBox.addEventListener("click", toggleVerticalNav, false);

	function toggleVerticalNav(e){
		icon.classList.toggle("active");
		verticalNav.classList.toggle("show-vertical-nav");
	}

	window.onclick = function(e){
		if(!e.target.matches("#click-box")){
			if(icon.classList.contains("active")){
				icon.classList.remove("active");
				verticalNav.classList.remove("show-vertical-nav");
			}
		}
	}
}; //closing bracket for onload function


$(document).ready(function(){
	$("#get-started-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#featured-topic-heading").offset().top - 10
	        }, 'slow'); //scroll from top to selector
	});

	$("#contact-btn").click(function(){
		$('html,body').animate({
			scrollTop: $("#contact-container").offset().top
		}, 'slow')
	})

	$("#vert-contact-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#contact-container").offset().top
		}, "slow")
	})

	$("#conversion-btn").click(function(){
		$('html, body').animate({
			scrollTop: $("#conversion-section").offset().top
		}, 'slow')
	})

	$("#vert-conversion-btn").click(function(){
		$("html, body").animate({
			scrollTop: $("#conversion-section").offset().top
		}, "slow")
	})

});


/*--- Conversion Table JS ---*/
var userInput = document.getElementById('unit-input-field');
var unitOutput = document.getElementById('unit-output-field');
var unitC = document.getElementById('unit-converter');

if(userInput){
	userInput.addEventListener('input', convertUnit);
}
if(unitC){
	unitC.addEventListener('change', convertUnit);
}

function convertUnit()
{
	if (userInput.value < 0){
		alert("Please enter a value greater or equal to zero");
		userInput.value = "";
	} else {
		switch(true)
		{
			case document.getElementById('millimetersToCentimeters').selected:
				unitOutput.value = (userInput.value / 10) + " cm";
				break;
			case document.getElementById('centimetersToMillimeters').selected:
				unitOutput.value = (userInput.value * 10) + " mm";
				break;
			case document.getElementById('centimetersToMeters').selected:
				unitOutput.value = (userInput.value / 100) + " m";
				break;
			case document.getElementById('metersToCentimeters').selected:
				unitOutput.value = (userInput.value * 100) + " cm";
				break;
			case document.getElementById('metersTokilometers').selected:
				unitOutput.value = (userInput.value / 1000) + " km";
				break;
			case document.getElementById('kilometersToMeters').selected:
				unitOutput.value = (userInput.value * 1000) + " m";
				break;
			case document.getElementById('metersToMiles').selected:
				unitOutput.value = (userInput.value / 1609.34) + " mi";
				break;
			case document.getElementById('milesToMeters').selected:
				unitOutput.value = (userInput.value * 1609.34) + " m";
				break;
			case document.getElementById('milesToKilometers').selected:
				unitOutput.value = (userInput.value * 1.60934) + " km";
				break;
			case document.getElementById('kilometersToMiles').selected:
				unitOutput.value = (userInput.value * 0.621371) + " mi";
				break;
			case document.getElementById('feetToYards').selected:
				unitOutput.value = (userInput.value / 3) + " yds";
				break;
			case document.getElementById('yardsToFeet').selected:
				unitOutput.value = (userInput.value * 3) + " ft";
				break;
			case document.getElementById('feetToMeters').selected:
				unitOutput.value = (userInput.value * 0.3048) + " m";
				break;
			case document.getElementById('metersToFeet').selected:
				unitOutput.value = (userInput.value * 3.28084) + " ft";
				break;
			case document.getElementById('centimetersToInches').selected:
				unitOutput.value = (userInput.value * 0.393701) + " in";
				break;
			case document.getElementById('inchesToCentimeters').selected:
				unitOutput.value = (userInput.value * 2.54) + " cm";
				break;
			case document.getElementById('milligramsToGrams').selected:
				unitOutput.value = (userInput.value / 1000) + " g";
				break;
			case document.getElementById('gramsToMilligrams').selected:
				unitOutput.value = (userInput.value * 1000) + " mg";
				break;
			case document.getElementById('gramsToKilograms').selected:
				unitOutput.value = (userInput.value / 1000) + " kg";
				break;
			case document.getElementById('kilogramsToGrams').selected:
				unitOutput.value = (userInput.value * 1000) + " g";
				break;
			case document.getElementById('poundsToKilograms').selected:
				unitOutput.value = (userInput.value / 2.20462) + " kg";
				break;
			case document.getElementById('kilogramsToPounds').selected:
				unitOutput.value = (userInput.value * 2.20462) + " lbs";
				break;
			case document.getElementById('squareMetersToKilometersSquared').selected:
				unitOutput.value = (userInput.value / 1000000).toExponential(2) + " km²";
				break;
			case document.getElementById('kilometerSquaredToSquareMeters').selected:
				unitOutput.value = (userInput.value * 1000000).toExponential(2) + " m²";
				break;
		}
	}
}
