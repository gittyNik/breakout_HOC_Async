const pr = new Promise((resolve, reject) =>
	setTimeout(() => resolve("REturned value"), 2000)
);

// ASync await
async function test() {
	let val =  await pr;
	console.log(`val is `, val);
}

test();


// async function test() {
// 	let a;
// 	await setTimeout(async () => {
// 		a = 5;
// 		console.log("Inside function");
// 	}, 5000);

// 	console.log(`value of a = `, a);
// }

// test();
