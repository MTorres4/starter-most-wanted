"use strict";
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
	case 'yes':
		var filterPersons = searchByName(people);
		mainMenu(filterPersons, people);
      break;
    case 'no':
		alert("The following prompts will ask if you know any information regarding the person from the following traits: age, height, weight, occupation, and/or eye color. At least one trait should be entered, or the search will return to the beginning of the application.");
		var people = searchByTraits(people);
      // TODO: search by traits
      break;
    default:
      app(people);
      break;
  }
}

function mainMenu(onePerson, people){
	if(onePerson.length === 0){
		alert("Unfortunately, there was no one who matched those criteria, please try your search again. \n Please ensure the first and last name were capitalized, ex. John Doe.");
		return app(people);
	}else if(onePerson.length > 1){
		var filterPersons = onePerson;
		var onePerson = selectingOnePerson(filterPersons);
		var displayOption = prompt("Found " + onePerson.firstName + " " + onePerson.lastName + " . Type: 'info', 'descendants', or 'family' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	}else{
		var displayOption = prompt("Found " + onePerson[0].firstName + " " + onePerson[0].lastName + " . Type: 'info', 'descendants', or 'family' for additional demographics; or type 'restart' to start the seach over or type 'quit' to exit the application.");
	}switch(displayOption){
		case "info":
			displayPersonInfo(onePerson);
			break;
		case "family":
			displayPersonFamily(onePerson, people);
			break;
		case "descendants":
			displayPersonDescendants(onePerson, people);
			// TODO: get person's descendants
			break;
		case "restart":
			app(people);
			break;
		case "quit":
			app(people);
			return;
		default:
			alert("Apologies, invalid entry. Please check spelling and type from one of the following five options.");
			return mainMenu(onePerson, people);
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