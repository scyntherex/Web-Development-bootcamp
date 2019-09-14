/*var nums = [1, 2, 3, 4, 5];
var lets = ["a", "b", "c", "d"];

printReverse(nums);
printReverse(lets);

function printReverse(array) {
	for(var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}*/

/*
var nums1 = [1, 1, 1, 1];
var nums2 = [1, 1, 1, 2];
var lets1 = ["b", "c", "b"];
var lets2 = ["b", "b", "b"];

console.log(isUniform(nums1));
console.log(isUniform(nums2));
console.log(isUniform(lets1));
console.log(isUniform(lets2));

function isUniform(array) {
	var firstElem = array[0];
	for(var i = 1; i < array.length; i++) {
		if(firstElem !== array[i]) {
			return false;
		}
	}
	return true;
}*/

/*
var arr1 = [1, 2, 3];
var arr2 = [10, 3, 10, 4];
var arr3 = [-5, 100];

console.log(sumArr(arr1));
console.log(sumArr(arr2));
console.log(sumArr(arr3));

function sumArr(array) {
	var result = 0;
//	for (var i = 0; i < array.length; i++) {
//		result += array[i];
//	}
	array.forEach(function(element) {
		result += element;
	});
	return result;
}*/
/*
var arr1 = [1, 2, 3, 90000];
var arr2 = [10, 3, 10, 4];
var arr3 = [-5, 100];

console.log(max(arr1));
console.log(max(arr2));
console.log(max(arr3));

function max(array) {
	var biggest = array[0];
	array.forEach(function(element) {
		if(element > biggest) {
			biggest = element;
		}
	});
	return biggest;
}	*/