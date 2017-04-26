"Use strict";

function compareByName(firstName, lastName, people){
	var results = people.filter(function (el){
		return (firstName === el.firstName && lastName === el.lastName);
	});
	return results;
}

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
	var age = onePerson
	var today = new Date();
	var toAge = new Date(onePerson[0].dob);
	if (age = today.getFullYear() - toAge.getFullYear()){
	return Math.abs(today.getFullYear() - toAge.getFullYear(onePerson.dob));
	}
		return age;
}

//function findDescendants(onePerson, people, descendants=[]){
	//var kids = people.filter(function (el){
		//return onePerson.id === el.parents[0] || onePerson.id === el.parents[1];
	//)};
	//descendants.push(...kids);
	//if(kids.length > 0){
		//return descendants;
	//}for(var i=0; i < kids.length; i++){
		//descendants.push(...findDescendants(...kids[i], people));
	//}
	//return descendants;
//}

//function findDescendants(onePerson, people, descendants=[]){
	//var kids = people.filter(function(el){
		//if(onePerson.id === el.parents[0] || onePerson.id === el.parents[1]){
			//return true;
		//}else{
			//return false;
		//}
	//});
	//descendants.push(...kids);
	//if(kids.length > 0){
		//return descendants;
	//}for (var i=0; i < kids[i], people, descendants);
	//return descendants;
//}

function convertToDescendants(descendants){
	var displayString = "";
	for(var i = 0; i < descendants.length; i++){
	displayString += ""+i + descendants[i].firstName + "\n";
	displayString += ""+i + descendants[i].lastName + "\n";
	displayString += ""+i + descendants[i].dob + "\n";
	}
	return displayString;
}

function findKids (onePerson, people){
	var kids = people.filter(function (el){
		if(el.parents.includes(onePerson[0].id)){
			return true;
		}else {
			return false;
		}		
	});
	return kids;
}
			
function convertToKids (kids){
	var displayString = "";
	for(var i=0; i < kids.length; i++){
	displayString += ""+i + kids[i].firstName + "\n";
	displayString += ""+i + kids[i].lastName + "\n";
	displayString += ""+i + kids[i].dob + "\n";
	}
	return displayString;
}

function findSpouse (onePerson, people){
	var spouse = people.filter(function (el){
		if(onePerson[0].currentSpouse === el.id && el.currentSpouse === onePerson[0].id){
			return true;
		}else {
			return false;
		}
	});
	return spouse;
}

function convertToSpouse (spouse){
	var displayString = "";
	for(var i=0; i < spouse.length; i++){
	displayString += ""+i + spouse[i].firstName + "\n";
	displayString += ""+i + spouse[i].lastName + "\n";
	displayString += ""+i + spouse[i].dob + "\n";
	}
	return displayString;
}

function confirmInputForFilter(occupation, eyeColor, age, height, weight){
	var criteria = [0];
	if(occupation === null){
		return false;
	}
	if(eyeColor === null){
		return false;
	}
	if(age === null){
		return false;
	}
	if(height === null){
		return false;
	}
	if(weight === null){
		return false;
	}
	else{
		criteria.push();
	}
}

function filterByTraits(people, occupation, eyeColor, age, height, weight){
	return people.filter(function(el){
		if(occupation && occupation!= el.occupation){
			return false;
		}
		if(eyeColor && eye!= el.eyeColor){
			return false;
		}
		if(age && age!= convertAge(el.dob)){
			return false;
		}
		if(height && height!= el.height){
			return false;
		}
		if(weight && weight!= el.weight){
			return false;
		}
			return true;
	});
}

function convertAge(people){
	var age = people;
	var today = new Date();
	var toAge = new Date(people.dob);
	if(age = today.getFullYear() - toAge.getFullYear()){
	return Math.abs(today.getFullYear() - toAge.getFullYear(people.dob));
	}
	return age;
}