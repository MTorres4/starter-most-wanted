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
function mainMenu(filterPersons, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

	if(filterPersons.length === 0){
	alert("Unfortunately, there was no one who matched those criteria, please try your search again.");
	return app(people); // restart
	}else if(filterPersons.length > 1){
	 displayPeople(filterPersons);
	}else {
	var displayOption = prompt("Found " + filterPersons[0].firstName + " " + filterPersons[0].lastName + " . Type: 'info', 'family', or 'descendants' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	}
	//switch(displayOption){
		//case "info":
			//TODO: get person's info
		//	break;
		//case "family":
			//TODO: get person's family
		//	break;
		//case "descendants":
			// TODO: get person's descendants
		//	break;
		//case "restart":
		//	app(people); // restart
		//	break;
		//case "quit":
		//	return; // stop execution
		//default:
		//	alert("Apologies, invalid entry. Please check spelling and type from one of the following five options.");
		//	return mainMenu(person, people); // ask again
	//}
}
//var TestRun = mainMenu(data[0], data);
//console.log(TestRun);

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
function displayPeople(filterPersons){
  alert(people.map(function(filterPersons){
    return filterPersons.firstName + " " + filterPersons.lastName;
  }).join("\n"));
}

//function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  //var personInfo = "First Name: " + person.firstName + "\n";
  //personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  //alert(personInfo);
//}

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