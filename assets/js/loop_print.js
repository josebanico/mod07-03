let x = 2;
while (x <= 20){
	if (x % 2 == 0){
		document.getElementById("result").innerHTML += "<br>" + x + "<br>"
		}x++;
	}
let y = 1;
do{ 
 if (y % 2 != 0){
	document.getElementById("result1").innerHTML += "<br>" + y + "<br>"
	}y++;
}while (y <=20)

for (let num = 0; num <= 20; num++){
		if (num % 3 == 0 ){
			document.getElementById("result2").innerHTML += "<br>" + num + "<br>"	
			}
		}


