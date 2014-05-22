function largestPrimeFactor(compositeNumber){
	var limit = Math.floor(compositeNumber / 2);
	var factors = [];

	for(var i = 2; i <= limit; i++){
		if(isPrime(i)){
			console.log("Prime: " + i);
			if(compositeNumber % i === 0){
				console.log("Pushed: " + i);
				factors.push(i);
			}
		}
		console.log(i);
	}

	console.log(factors);
}

function isPrime(candidate){
	var limit = candidate / 2;
	for(var i = 2; i <= limit; i++){
		if(candidate % i === 0){
			return false;
		}
	}
	return true;
}



//largestPrimeFactor(700);
largestPrimeFactor(600851475143);
