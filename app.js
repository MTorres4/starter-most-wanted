"Use strict";
/*
  Build all of your functions for the application below.
	Some functions have been stubbed out.
*/

function compareByName(firstName, lastName, people){
	var results = people.filter(function (el){
		return (firstName === el.firstName && lastName === el.lastName);
	});
	return results;
}

//function getFamily(person, people){
	//this.parents;
	//this.currentSpouse;
	//this.display = function(){
		//return("Family: " + this.parents + " " + this.currentSpouse + "");
	// return an array containing the family members (objects)
	//}
//}

function displayPeople(filterPersons){
	var displayString = "";
	for(var i = 0; i < filterPersons.length; i++){
	displayString += ""+i + filterPersons[i].firstName + "\n";
	displayString += ""+i + filterPersons[i].lastName + "\n";
	displayString += ""+i + filterPersons[i].dob + "\n";
	}
	return displayString;
}

function convertToAge(onePerson){
	var age = onePerson.map(function (el){
		var today = new Date();
		var toAge = new Date(el.dob);
		var age = today.getFullYear() - toAge.getFullYear();
		return Math.abs(today.getFullYear() - toAge.getFullYear(el.dob));
	});	
		return age;
}

function findDescendants(filterPersons, people){
	var descendants = people.filter(function (el){
		if(el.parents.includes(filterPersons[0].id)){
			return true;
		}else {
			return false;
		}
	});
}

//function filterTraitSearch (age, height, weight, occupation, eye color, pass)
//	filter
//}


