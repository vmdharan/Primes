/*
 * primes.js
 * Generate prime numbers using the Sieve of Eratosthenes.
 */

// Set a limit, n.
var n = 100;

// List of primes.
var P = {}

// Initialise the list of all integers from 2 to n.
function initList() {
	P[0] = false;
	P[1] = false;
	for(var i=2; i <= n; i++) {
		P[i] = true;
	}
	return i;
}

// Calculate the prime numbers.
function calcPrimes() {
	var k = initList();
	
	// Loop till sqrt(n).
	for(var i=2; i <= Math.sqrt(n); i++) {
		if(P[i] == true) {
			// Mark all multiples of i as false.
			for(var j=(i*i); j <= n; j=j+i) {
				P[j] = false;
			}
		}
	}
	
	// Display the output.
	for(var m=0; m<k; m++) {
		if(P[m] == true) {
			console.log(m);
		}
	}
}

calcPrimes();
