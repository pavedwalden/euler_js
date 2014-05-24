function largestPrimeFactor(compositeNumber){
	var primeFactors = findPrimeFactors(compositeNumber);
	console.log(primeFactors[primeFactors.length - 1]);
}

function findPrimeFactors(number){
	var primeFactors = [];
	var limit = number / 2;

	for(var i = 2; number > 1; i++){
		if(number % i === 0){
			primeFactors.push(i);
			console.log(primeFactors);					//dbg
			number /= i;
			console.log("Now testing: " + number);		//dbg
			console.log("New limit: " + limit);			//dbg
		}	
	}
	console.log(primeFactors);							//dbg
	return primeFactors;
}

//findPrimeFactors(43525);
findPrimeFactors(600851475143);
//largestPrimeFactor(600851475143);
