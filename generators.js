// Credits: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators


// Iterators
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
// 	let nextIndex = start;
// 	let iterationCount = 0;

// 	var rangeIterator = {
// 		next: function () {
// 			let result;
// 			if (nextIndex < end) {
// 				result = { value: nextIndex, done: false }
// 				nextIndex += step;
// 				iterationCount++;
// 				return result;
// 			}
// 			return { value: iterationCount, done: true }
// 		}
// 	};
// 	return rangeIterator;
// }

// let it = makeRangeIterator(1, 10); // it => Iterator

// let result = it.next();
// console.log(result)

// result = it.next();
// console.log(result)
// while (!result.done) {
// 	console.log(result); // 1 3 5 7 9
// 	result = it.next();
// }

// console.log(result)

// result = it.next();
// console.log(result.value)

// console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]


// Generators
// 
// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
// 	let iterationCount = 0;
// 	for (let i = start; i <= end; i += step) {
// 		iterationCount++;
// 		yield i;// stops function execution and returns yielding value. In this case, it returns 'i'
// 	}
// 	return iterationCount;
// }

// var gen = makeRangeIterator(1, 10, 1); // Iterable

// for (const itItem of gen) {
// 	console.log(itItem);
// }

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function* foo () {
// 	let a = yield "hi there";
// 	let b = yield "bye there";
// 	console.log(`a = `, a, `b = `, b);
// }

// let it = foo();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next("not just yet"));











function* idMaker() {
	var index = 0;
	while (true)
		yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
