// Callback

// const cback = function(val, cb) {
// 	setTimeout(() => cb(val), 2000);
// };

// cback(true, val => {
// 	console.log(`Val is `, val);
// });


// setTimeout(cb, timeDuration)

setTimeout(() => console.log(`Those 5 seconds just ended`), 5000);
console.log(`After 5 seconds`);