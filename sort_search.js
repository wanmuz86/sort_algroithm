//Create a new Array
 
var newArray = [34,48,22,63,9,765,82]
 
// Create the swap function
 
function swap(a,b) {
	var temp = newArray[a];
	newArray[a] = newArray[b];
	newArray[b] = temp;
 
}
 
///Create the bubbleSortFunction
 
function bubbleSort(){
 
	for (var i = 0; i< newArray.length; i++){
		for (var j  = 0 ; j <newArray.length-1; j ++) {
			if (newArray[j] > newArray[j+1]){
				swap(j, j+1);
			}
		}
 
	}
}
 
//emhanced bubbleSort
function enhanceBubbleSort(){
 
	for (var i = 0; i< newArray.length; i++){
		for (var j  = 0 ; j <newArray.length-1-i; j ++) {
			if (newArray[j] > newArray[j+1]){
				swap(j, j+1);
			}
		}
 
	}
}
 
function selectionSort(){
 
//Create a place to store the minimum index
 
var minIndex;
//Do a loop for length time
for (var i = 0; i < newArray.length; i ++){
	minIndex = i;
//set the default minimum index to the first one
//Do a second loop for length time
 
for (var j = i; j <newArray.length; j++){
 
		//Do comparison of current index with the smallest index
		//if it is the smallest, update i
 
		if (newArray[minIndex]>newArray[j]) {
			minIndex = j
		}
	}
 
	//swap if i is smallest index
 
 
	if (i != minIndex) {
		swap(i,minIndex);
	}
}
}
 
 
function binarySearch(number){
 
	selectionSort();
 
// Store min, max and mid
 
var min, max, mid;
min = 0;
max = newArray.length-1
 
while (min < max ){
	mid =  Math.floor((min+max)/2)
	var numberExist  = false
	//compare if number == mid
	if (number === newArray[mid] ){
		return true
 
	} else if (number > newArray[mid]){
		min = mid;
	}
	else {
		max = mid 
	}
}
 
return numberExist
}
 
 
 
console.log(binarySearch(34));
console.log(newArray);
