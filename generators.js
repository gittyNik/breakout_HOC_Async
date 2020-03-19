function* foo () {
	let a = yield "hi there";
	let b = yield "bye there";
	console.log(`a = `, a, `b = `, b);
}

let it = foo();
console.log(it.next());
console.log(it.next());
// console.log(it.next("not just yet"));











// function* idMaker() {
//   var index = 0;
//   while (true)
//     yield index++;
// }

// var gen = idMaker();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3