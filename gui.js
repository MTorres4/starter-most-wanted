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

//function searchByTraits(people){
	//var 'pass' = null;
	//var traits.string.concat = ["traitAgeNumber", "traitHeightNumber", "traitWeightNumber", "traitOccupationCorrect", "traitEyecolorCorrect",];
	//var traitAge = promptFor("If you know the person's age, please type thier age as a number, if not, please type 'pass'");
		//if (traitAge = traitAgeNumber){
			//return traitAgeNumber;
		//}if else (traitAge = 'pass'){
			//return null;
	//var traitHeight = promptFor("If you know the person's height, please type their height (inches) as a number, if not, please type 'pass'");
		//}if (traitHeight = 0){
			//return traitHeightNumber;
		//}if else (traitHeight = 'pass'){
			//return null;
	//var traitWeight = promptFor("If you know the person's weight, please type their weight (pounds) as a number, if not, please type 'pass'");
		//}if (traitWeight = 0){
			//return traitWeightNumber;
		//}if else (traitWeight = 'pass'){
			//return null;
	//var traitOccupation = promptFor("If you know the person's occupation, please type their occupation, if not, please type 'pass'");
		//}if (traitOccupation = 0){
			//return traitOccupationCorrect;
		//}if else (traitOccupation = 'pass'){
			//return null;
	//var traitEyecolor = promptFor("If you know the person's eye color, please type their eye color, if not please type 'pass'");
		//}if (traitEyecolor = 0){
			//return traitEyecolorCorrect;
		//}if else (traitEyecolor = 'pass'){
			//return null;
	//} return traits.string.concat;
//}

//function trait(trait.string.concat)
	//if(trait.string.concat.length === 0){
		//alert("Please enter at least one of the searchable traits, please try your search again.")'
		//return app(people);
	//}else if(trait.string.concat.length > 1){
		//var showResults = filterTraits(trait.string.concat.length);	
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