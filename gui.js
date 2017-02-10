"use strict";
//arrays use numbered indexes. objects use named indexes. 
/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
	case 'yes':
		var filterPersons = searchByName(people);
		mainMenu(filterPersons, people);
      // TODO: search by name
      break;
    case 'no':
		alert("The following prompts will ask if you know any information regarding the person from the following traits: age, height, weight, occupation, and/or eye color. At least one trait should be entered, or the search will return to the beginning of the application.");
		var people = searchByTraits(people);
      // TODO: search by traits
      break;
    default:
      app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(onePerson, people){
	if(onePerson.length === 0){
		alert("Unfortunately, there was no one who matched those criteria, please try your search again.");
		return app(people); // restart
	}else if(onePerson.length > 1){
		var filterPersons = onePerson;
		var onePerson = selectingOnePerson(filterPersons);
		var displayOption = prompt("Found " + onePerson.firstName + " " + onePerson.lastName + " . Type: 'info', 'descendants', or 'family' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	}else (onePerson.length === 1);{//is it because the person goes to 1???
		var displayOption = prompt("Found " + onePerson[0].firstName + " " + onePerson[0].lastName + " . Type: 'info', 'descendants', or 'family' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	}switch(displayOption){
		case "info":
			displayPersonInfo(filterPersons);
			//TODO: get person's info
			break;
		case "family":
			//TODO: get person's family
			break;
		case "descendants":
			displayPersonDescendants(onePerson, people);
			// TODO: get person's descendants
			break;
		case "restart":
			app(people); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			alert("Apologies, invalid entry. Please check spelling and type from one of the following five options.");
			return mainMenu(onePerson, people); // ask again
		}
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  var results = compareByName(firstName, lastName, people);
  return results;

}
  // TODO: find matches using the name the user entered


//function searchByTraits(people){//no matter what it will be 5 items: age, false, weight, false, false then take the true to be evaluated
	//var 'pass' = false;
	//var traitAge = promptFor("If you know the person's age, please type thier age as a number, if not, please type 'pass'");
	//	if (traitAge = traitAgeNumber){//save to array
	//		return traitAgeCorrect;
	//	}if else (traitAge = 'pass'){ //goto traitHeight
	//		return false;
	//var traitHeight = promptFor("If you know the person's height, please type their height (inches) as a number, if not, please type 'pass'");
	//	}if (traitHeight = 0){//save to array
	//		return traitHeightCorrect;
	//	}if else (traitHeight = 'pass'){ //save to array
	//		return false;
	//var traitWeight = promptFor("If you know the person's weight, please type their weight (pounds) as a number, if not, please type 'pass'");
	//	}if (traitWeight = 0){//save to array
	//		return traitWeightCorrect;
	//	}if else (traitWeight = 'pass'){ //goto traitOccupation
	//		return false;
	//var traitOccupation = promptFor("If you know the person's occupation, please type their occupation, if not, please type 'pass'");
	//	}if (traitOccupation = 0){//save to array
	//		return traitOccupationCorrect;
	//	}if else (traitOccupation = 'pass'){ //goto traitEyecolor
	//		return false;
	//var traitEyecolor = promptFor("If you know the person's eye color, please type their eye color, if not please type 'pass'");
	//	}if (traitEyecolor = 0){//save to array
	//		return traitEyecolorCorrect;
	//	}if else (traitEyecolor = 'pass'){ //goto enter5Pass
	//		return enter5Pass;
	//} return string.concat( 
//}
	
	
//function enter5Pass(){
	//default: 
	//app(people);
	//break;
//}

// alerts a list of people

function selectingOnePerson(filterPersons){
	var onePerson = prompt("Please choose one of the people below: \n" + (displayPeople(filterPersons)));
	return filterPersons[parseInt(onePerson)];
	//default:
		//alert("Apologies, invalid entry. Please try your search again.");
		//return app(people);
}

function displayPersonInfo(onePerson){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var age = convertToAge(onePerson);
  var personInfo = "First Name: " + onePerson[0].firstName + "\n";
  personInfo += "Last Name: " + onePerson[0].lastName + "\n";
  personInfo += "Height: " + onePerson[0].height + " inches \n";
  personInfo += "Weight: " + onePerson[0].weight +  "  pounds \n";
  personInfo += "Age: " + age + "\n";
  personInfo += "Occupation: " + onePerson[0].occupation + "\n";
  personInfo += "Eye Color: " + onePerson[0].eyeColor + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

function displayPersonDescendants(onePerson, people){
	var descendants = findDescendants(onePerson, people);
	if(descendants.length > 0){
		var personDescendants = "First Name: " + [].firstName + "\n";
		personDescendants = "Last Name: " + [].lastName + "\n";
		alert(personDescendants);
	} else(descendants.length === 0);{
		alert("The search yielded no results, please try your search again");
		return mainMenu(onePerson, people);
	}
}

//function traitAgeNumber(input){
	//if (input.isInteger && input > 0(traitAge)){
	//	return traitAgeCorrect;
	//} if else () {
	//	alert("Please enter a number for age or type 'pass'.");
	//	return 
	//if not, restart the Age prompt
//}

//function traitHeightNumber(input){
	//return input.isInteger && input > 0(traitHeight);
	//if not, restart the Height prompt
//}

//function traitWeightNumber(input){
	//return input.isInteger && input > 0(traitWeight);
	//if not, restart the Weight prompt
//}

//function traitOccupationString(input){
	//return input.toString.toLowerCase();
	//if not, restart the Occupation prompt
//}

//function traitEyeColorString(input){
	//return input.toString.toLowerCase();
	//if not, restart the Eye Color prompt
//}

// function that prompts and validates user input
function promptFor(question, valid){
	do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}


// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}