// Promises

const pr = new Promise((resolve, reject) =>
	setTimeout(() => resolve(true), 2000)
);

pr.then(val => console.log(`1111111`, val));

//then chaining