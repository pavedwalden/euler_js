function fib(){
	var runningTotal  	= 0;
	var fibs 			= [0,0,1];
	while(fibs[2] < 4000000){
		if(fibs[2] % 2 === 0){
			runningTotal += fibs[2];
		}
		fibs.shift();
		fibs.push(fibs[0]+fibs[1]);
	}
	console.log(runningTotal);
}

fib();