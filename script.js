send.addEventListener("click", calc);
function calc(){
	let val_summ = summ.value;
	let val_percent = percent.value;
	let val_month = month.value;
	let val_first = first.value;
	let val_result;
	val_percent /= 1200;
	val_summ -= val_first;

	val_result = (val_summ / val_month) + 
	(val_summ * val_percent);




	
	result.innerHTML = val_result;


}