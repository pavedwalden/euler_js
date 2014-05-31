//var factors = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var factors = [2,3,4,5,6,7,8,9,10];
var candidate = 40;

function divisibleByAll(candidate, divisors){
	for(var i = divisors.length - 1; i >= 0; i--){
		console.log("evaluating " + candidate + ' % by ' + divisors[i]);	//dbg
		if(candidate % divisors[i] != 0){
			return false;
		}
	}
	return true;
}

for(var i = candidate; i < 1000000; i += 2){
	if(divisibleByAll(i, factors)){
		console.log('smallest = ' + i);
		break;
	}
}

// var smallest = 9699690;
// var primes = [2, 3, 5, 7, 11, 13, 17, 19];


// function divisibleByAll(candidate, divisors){
// 	for(var i = divisors.length - 1; i >= 0; i--){
// 		console.log("evaluating " + candidate + ' % by ' + divisors[i]);	//dbg
// 		if(candidate % divisors[i] != 0){
// 			return false;
// 		}
// 	}
// 	return true;
// }

// for(var i = 9699688; i > 20; i -= 2){
// 	if(divisibleByAll(i, primes)){
// 		smallest = i;
// 	}
// }

// console.log("Smallest evenly divided is " + smallest);

// console.log(divisibleByAll(9699690, primes));

// console.log(divisibleByAll(9699691, primes));


//my first idea is to start with the smallest prime product, then
//work backwards checking even numbers. But that's 38798760
//comparisons, which might not be fast enough to brute force it
//under a minute 



