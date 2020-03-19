// Higher order functions

let square = n => n*n;
let sum =0 ;

let newArr = [1, 2, 3].map(square)

[1,4,9]

newArr.map(el => {
	sum = sum+ el;
	return sum;
});

console.log(`sum of squares `, sum);




