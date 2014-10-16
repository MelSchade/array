//Array of 4 objects
var people = [

	{
		name: 'Casey',
		rate: 60
	},
	{
		name: 'Camille',
		rate: 80
	},
	{
		name: 'Gordon',
		rate: 75
	},
	{
		name: 'Nigel',
		rate: 120
	}

];

	//filtering code
	//this new array will hold all of the matching results
	var results = []; //'push' into the array

	//The foreach method can target an array and can apply the same function
	//The anonymous callback below acts like a filter
	people.forEach(function(person){
		if(person.rate >= 65 && person.rate <= 90) { // && = AND
			results.push(person); 
		}
	});

	//The push() method adds new items to the end of an array, and returns the new length.
	//Note: The new item(s) will be added at the end of the array.
	//Note: This method changes the length of the array.
	//Tip: To add items at the beginning of an array, use the unshift() method.

//selfinvoking function
$(function (){

	//tableBody = creating a table in the HTML
	var $tableBody = $('<tbody></tbody>');
	//i standard for index
	for(var i = 0; i < results.length; i++) {
		var person = results[i];
		var row = $('<tr></tr>');
		$row = $('<tr></tr>');
		$row.append($('<td></td>').text(person.name)); //dot notation accesses the value
		$row.append($('<td></td>').text(person.rate));
		$tableBody.append($row); //append = add to the end, building up
	}

	//add the new content after the body of the page
	$('thead').after($tableBody);
});