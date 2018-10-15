document.getElementById('clickMe').onclick = () => {
	let coeff1 =Number(document.getElementById('coeff1').value);
	let coeff2 =Number(document.getElementById('coeff2').value);
	let coeff3 =Number(document.getElementById('coeff3').value);
	alert(negate(coeff1));
	alert(getDiscriminant(coeff1,coeff2,coeff3));
	// alert(testDiscriminant(coeff1,coeff2,coeff3));
	alert (get_positive_root(coeff1,coeff2,coeff3));
	alert (get_negative_root(coeff1,coeff2,coeff3));
	if (testDiscriminant(coeff1,coeff2,coeff3) >= 0){
		alert(getDiscriminant(coeff1,coeff2,coeff3));
	}else{
		alert ("No real roots");
	}
	// alert(coeff1);
	// alert(coeff2);
	// alert(coeff3);
}
const negate = (num) => {
	return -1*num;
}
const getDiscriminant = (a,b,c) => {
	return ((b*b) - (4*a*c));
}
const testDiscriminant = (a,b,c) =>{
	if (getDiscriminant(a,b,c) >= 0){
		return true;
	}else {
		return false;
	}
}
const get_positive_root = (a,b,c) => {
	return (negate (b) + Math.sqrt(getDiscriminant(a,b,c))/(2*a));
}
const get_negative_root = (a,b,c) => {
	return (b + Math.sqrt(getDiscriminant (a,b,c))/(2*a));
}