const max=prompt("Pick the max number 👇");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("just guess the number...");
while(true){
	if(guess=="quit"){
		console.log("Game paused… just kidding, you quit 😄");
		break;
	}
	if(guess=="random"){
		console.log("you have guess the right one and i.e. ",random)
	}
	if(guess<random){
		guess=prompt("Oops, that number is smaller than the answer😄.");
	}else if(guess>random){
		guess=prompt("Too high! Try a smaller number.");
	}
	
}