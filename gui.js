"use strict";
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
	case 'yes':
		var availableMatch = searchByName(people);
		var onePerson = determineIfMatchExists(availableMatch, people);
		mainMenu(onePerson, people);
      break;
    case 'no':
		alert("The following prompts will ask if you know any information regarding the person from the following traits: age, height, weight, occupation, and/or eye color. At least one trait should be entered, or the search will return to the beginning of the application.");
		var availableMatch = searchByTraits();
		determineIfMatchExists(availableMatch, people);
		// var filterPersons = searchByTraits(people);
		// mainMenu(filterPersons, people);
      break;
    default:
      app(people);
      break;
  }
}

// function mainMenu(onePerson, people){
	// if(onePerson.length === 0){
		// alert("Unfortunately, there was no one who matched those criteria, please try your search again. \n Please ensure the first and last name were capitalized, ex. John Doe.");
		// return app(people);
	// }else if(onePerson.length > 1){
		// var filterPersons = onePerson;
		// var onePerson = selectingOnePerson(filterPersons);
		// var displayOption = prompt("Found " + onePerson.firstName + " " + onePerson.lastName + " . Type: 'info', 'descendants', or 'family' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	// }else{
		// var displayOption = prompt("Found " + onePerson[0].firstName + " " + onePerson[0].lastName + " . Type: 'info', 'descendants', or 'family' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	// }switch(displayOption){
		// case "info":
			// displayPersonInfo(onePerson);
			// break;
		// case "family":
			// displayPersonFamily(onePerson, people);
			// break;
		// case "descendants":
			// displayPersonDescendants(onePerson, people);
			// break;
		// case "restart":
			// app(people);
			// break;
		// case "quit":
			// return;
		// default:
			// alert("Apologies, invalid entry. Please check spelling and type from one of the following five options.");
		// }
// }

function mainMenu(onePerson, people){
	var displayOption = prompt("For " + onePerson.firstName + " " + onePerson.lastName + " . Type: 'info', 'descendants', or 'family' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	switch(displayOption){
		case "info":
			displayPersonInfo(onePerson);
			break;
		case "family":
			displayPersonFamily(onePerson, people);
			break;
		case "descendants":
			displayPersonDescendants(onePerson, people);
			break;
		case "restart":
			app(people);
			break;
		case "quit":
			return;
		default:
			alert("Apologies, invalid entry. Please check spelling and type from one of the following five options.");
		}
}

function determineIfMatchExists(availableMatch, people){
	if(availableMatch == 0){
		alert("Unfortunately, there was no one who matched those criteria, please try your search again. \n Please ensure the first and last name are capitalized, ex. John Doe");
		return app(people);
	}else if(availableMatch == null){
		alert("Unfortunately, additional security authorization is needed to see all of the results in our database. \n Please enter at least one trait to filter by");
		return searchByTraits();
	}else if(availableMatch >= 1){
		var filterPersons = availableMatch;
		var availableMatch = selectingOnePerson(filterPersons);
		return availableMatch;
	}else{
		return availableMatch;
	}
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  var results = compareByName(firstName, lastName, people);
  return results;
}

function selectingOnePerson(filterPersons){
	var onePerson = prompt("Please choose one of the people below: \n" + (displayPeople(filterPersons)));
	return filterPersons[parseInt(onePerson)];
}

function displayPersonInfo(onePerson){
  var age = convertToAge(onePerson);
  var personInfo = "First Name: " + onePerson[0].firstName + "\n";
  personInfo += "Last Name: " + onePerson[0].lastName + "\n";
  personInfo += "Height: " + onePerson[0].height + " inches \n";
  personInfo += "Weight: " + onePerson[0].weight +  "  pounds \n";
  personInfo += "Age: " + age + "\n";
  personInfo += "Occupation: " + onePerson[0].occupation + "\n";
  personInfo += "Eye Color: " + onePerson[0].eyeColor + "\n";
  alert(personInfo);
}

function displayPersonDescendants(onePerson, people){
	var descendants = findDescendants(onePerson, people);
	if (descendants){
	var listDescendants = convertToDescendants(descendants);
		alert(listDescendants);
	} else{
		alert("The search yielded no results, please try your search again");
		return app(people);
	}
}

function displayPersonFamily(onePerson, people){
	var kids = findKids(onePerson, people);
	var spouse = findSpouse(onePerson, people);
	if (kids){
		var listKids = convertToKids(kids);
		if (spouse){
			var listSpouse = convertToSpouse(spouse);
			var family = "Their spouse is: \n" + listSpouse + "\n";
			family += "Their kids include: \n" + listKids + "\n";
			alert(family);
		}else{ 
			var family = "Their family includes: " + listSpouse + "\n";
			alert(family);
		}
	}else{
	alert("The search yielded no results, please try your search again");
	return app(people);
	}
}

function searchByTraits(){
	var occupation = prompt("Please enter thier occupation, or press 'OK' to skip").trim().toLowerCase();
	var eyeColor = prompt("Please enter their eye color, or press 'OK' to skip").trim().toLowerCase();
	var age = prompt("Please enter their age, or press 'OK' to skip").trim().toLowerCase();
	var height = prompt("Please enter their height in inches, or 'OK' to skip").trim().toLowerCase();
	var weight = prompt("Please enter their weight in pounds, or press 'OK' to skip").trim().toLowerCase();
	//var traits = [];
	confirmInputForFilter(occupation, eyeColor, age, height, weight); //New function to see if anything is entered
	//filterByTraits(people, occupation, eyeColor, age, height, weight);
//MainMenu(onePerson, people);
}

function promptFor(question, valid){
	do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true;
}