"use strict";
/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? \n Enter 'yes' or 'no'", yesNo);
  switch(searchType){
    case 'yes':
      // TODO: search by name
	  var person = prompt("Please enter the first name and last name of the person you are looking for");
	  return person;
      break;
    case 'no':
      // TODO: search by traits
	  var people = prompt("From the following options: id, gender, date of birth, spouse, occupation, \n height, weight, eye color, parents, please select up to (5) separated with commas to display all applicable matches:")
	  return people;
      break;
    default:
      app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
	this.id;
	this.firstName;
	this.lastName;
	this.gender;
	this.dob;
	this.height;
	this.weight;
	this.eyeColor;
	this.occupation;
	this.parents;
	this.currentSpouse;
	
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Based on the criteria, we could not locate any individual that matches those traits, please try again for different search results.");
    return app(people); // restart
  }

	var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? \n Type one of the three options above or type 'restart' to reset your search or 'quit' to exit the application.");

	switch(displayOption){
		case "info":
			// TODO: get person's info
		var displayInfo = prompt("Found " + person.firstName + " " + person.lastName + " . Here is their 'info': " + person.id + " " + person.gender + " " + person.dob + " " + person.height + " " + person.weight + " " + person.eyeColor + " " + person.occupation + " . Type 'family' or 'descendants' for additional information or type 'restart' to search again  or 'quit' to exit the application.");
			break;
		case "family":
			// TODO: get person's family
		var displayFamily = prompt("Found " + person.firstName + " " + person.lastName + " . Here is their 'family': " + person.parents + " " + person.currentSpouse + ". Type 'info' or 'descendants' for additional information or type 'restart' to search again or 'quit' to exit the application.");
			break;
		case "descendants":
			// TODO: get person's descendants NEED OPPOSITE OF PARENTS
		var displayFamily = prompt("Found " + person.firstName + " " + person.lastName + " . Here are thier 'descendants': " + person.parents + ". Type 'info' or 'family' for additional information or type 'restart' to seach again or 'quit' to exit the application.");
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
  var lastName = promptFor("What is the person's last name?", chars);

  // TODO: find the person using the name they entered

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

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question);
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return false; // default validation only
}
