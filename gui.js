"use strict";
//arrays use numbered indexes. objects use named indexes. 
/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  switch(searchType){
    case 'yes':
		var people = searchByName(people);
      // TODO: search by name
      break;
    case 'no':
		no = alert("The following prompts will ask if you know any information from the following traits: age, height, weight, occupation, and/or eye color. At least one trait should be entered, if all 5 prompts are passed, the search will return to the beginning of the application.");
		var people = searchByTraits(people);
      // TODO: search by traits
      break;
    default:
      app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Unfortunately, there was no one who matched those criteria, please try your search again.");
    return app(people); // restart
  }

	var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			// TODO: get person's info
			break;
		case "family":
			// TODO: get person's family
			break;
		case "descendants":
			// TODO: get person's descendants
			break;
		case "restart":
			app(people); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			return mainMenu(person, people); // ask again
	}
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  return firstName;
  var lastName = promptFor("What is the person's last name?", chars);
  return lastName;

  // TODO: find matches using the name they entered

}

function searchByTraits(people){//no matter what it will be 5 items: age, false, weight, false, false
	var 'pass' = false;
	var traitAge = promptFor("If you know the person's age, please type thier age as a number, if not, please type 'pass'");
		if (traitAge = traitAgeNumber){//save to array
			return traitAge;
		}if else (traitAge = 'pass'){ //goto traitHeight
			return false;
	var traitHeight = promptFor("If you know the person's height, please type their height (inches) as a number, if not, please type 'pass'");
		}if (traitHeight = 0){//save to array
			return traitHeight;
		}if else (traitHeight = 'pass'){ //save to array
			return false;
	var traitWeight = promptFor("If you know the person's weight, please type their weight (pounds) as a number, if not, please type 'pass'");
		}if (traitWeight = 0){//save to array
			return traitWeight;
		}if else (traitWeight = 'pass'){ //goto traitOccupation
			return false;
	var traitOccupation = promptFor("If you know the person's occupation, please type their occupation, if not, please type 'pass'");
		}if (traitOccupation = 0){//save to array
			return traitOccupation;
		}if else (traitOccupation = 'pass'){ //goto traitEyecolor
			return false;
	var traitEyecolor = promptFor("If you know the person's eye color, please type their eye color, if not please type 'pass'");
		}if (traitEyecolor = 0){//save to array
			return traitEyecolor;
		}if else (traitEyecolor = 'pass'){ //goto enter5Pass
			return enter5Pass;
	}
}
	
	
function enter5Pass(){
	default: 
	app(people);
	break;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

function traitAgeNumber(input){
	return input.isInteger && input > 0(traitAge);
	//if not, restart the Age prompt
}

function traitHeightNumber(input){
	return input.isInteger && input > 0(traitHeight);
	//if not, restart the Height prompt
}

function traitWeightNumber(input){
	return input.isInteger && input > 0(traitWeight);
	//if not, restart the Weight prompt
}

function traitOccupationString(input){
	return input.toString.toLowerCase();
	//if not, restart the Occupation prompt
}

function traitEyeColorString(input){
	return input.toString.toLowerCase();
	//if not, restart the Eye Color prompt
}
	

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