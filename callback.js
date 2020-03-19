// Callback

const cback = function(val, cb) {
	setTimeout(() => cb(val), 2000);
};

cback(true, val => {
	console.log(`Val is `, val);
});
