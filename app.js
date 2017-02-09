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

function getInfo(filterPersons, people){
	var info = people.filter(function (el){
		return (el.firstName && el.lastName && el.height && el.weight && el.dob && el.occupation && el.eyeColor);
	});
	return info;
}


//function getFamily(person, people){
	//this.parents;
	//this.currentSpouse;
	//this.display = function(){
		//return("Family: " + this.parents + " " + this.currentSpouse + "");
	// return an array containing the family members (objects)
	//}
//}

//function getDescendants(person, people){
	//this.parents;
	//this.display = function() {
		//return("Descendants: " + this.parents + "");
	//}
	// return an array containing the descendants (objects)
//}

function convertToAge(dob, people){
	var age = people.map(function (el){
		var todayDate = Date();
		var toAge = Date(dob);
		var age = todayDate.getFullYear() - toAge.getFullYear();
		var m= todayDate.getMonth() - toAge.getMonth();
		return Math.abs(m < 0 || (m === 0 && todayDate.getDate() < toAge.getDate()))
	});	
		return age;
}
 //TODO need to convert dob to age use MAP

//function filterTraitSearch (age, height, weight, occupation, eye color, pass)
//	filter
//}


