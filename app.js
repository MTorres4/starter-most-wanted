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

function convertToAge(filterPersons){
	var age = filterPersons.map(function (el){
		var today = new Date();
		var toAge = new Date(el.dob);
		var age = today.getFullYear() - toAge.getFullYear();
		return Math.abs(today.getFullYear() - toAge.getFullYear(el.dob));
	});	
		return age;
}

function findDescendants(ancestor, people){
	var anyMatch = people.filter(function (el){
		if (ancestor.el.id === el.parents){
			return anyMatch;
		}else (ancestor.el.id !=){
			return anyMatch [0];
	}
}


//function filterTraitSearch (age, height, weight, occupation, eye color, pass)
//	filter
//}


