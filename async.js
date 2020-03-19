const pr = new Promise((resolve, reject) =>
	setTimeout(() => resolve(true), 2000)
);

// ASync await
async function test() {
	let val = await pr;
	console.log(`val is `, val);
}

test();