"Use strict";
/*
  Build all of your functions for the application below.
	Some functions have been stubbed out.
*/

function filterByName(firstName, lastName, people){
	var results = people.filter(function (el)){
		return (firstName === el.firstName && lastName === el.lastName);
	}
	return results[0];
}

//function getFamily(person, people, data){
	//this.parents;
	//this.currentSpouse;
	//this.display = function(){
		//return("Family: " + this.parents + " " + this.currentSpouse + "");
	// return an array containing the family members (objects)
	//}
//}

//function getDescendants(person, people, data){
	//this.parents;
	//this.display = function() {
		//return("Descendants: " + this.parents + "");
	//}
	// return an array containing the descendants (objects)
//}

//function convertToAge(person, people, data, dob){
//	var data;
	//this.dob
//} //TODO need to convert dob to age use MAP

//function filterTraitSearch (age, height, weight, occupation, eye color, pass)
//	filter
//}


