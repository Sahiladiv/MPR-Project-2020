function Data(){
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	var x = document.getElementById('selectht').selectedIndex;
	var heightUnit = document.getElementById('selectht')[x].value;
	var y = document.getElementById('selectwt').selectedIndex;
	var weightUnit = document.getElementById('selectwt')[y].value;

	if(heightUnit == 'ft'){
		var inch = height.indexOf(' ');
		var inches=feet=0;
		if(inch!=-1){
			for(var i=inch+1 ;i<height.length;i++){
				 inches = parseInt(height.charAt(i))+ inches*10;
			}
			for(i=0;i<inch;i++){
				 feet = parseInt(height.charAt(i))+ feet*10;
			}
			inches = inches * 0.08333333;
			height = (inches+feet) * 30.48;
		}
		else{
			height = height * 30.48;;
		}



	}

	if(weightUnit == 'lbs'){
		weight = weight * 0.45359237;
	}

	BMI(height,weight);
}

function BMI(height,weight){

	this.weight = weight;
	this.height = height;
	var bmi;
	var t = document.getElementById('showButton');
	var r = document.getElementById('report');
	height = Math.pow(height/100,2);
	bmi = weight/height;
	var rr = "Report: "
	var w;
	var integerPart = parseInt(bmi);
	var floatPart = bmi - integerPart;
	floatPart = parseInt(floatPart*1000)
	bmi = integerPart + (floatPart)/1000;

try{
	if(bmi>=30){
		document.querySelector("#report").textContent=rr+"Obese, your B.M.I is "+bmi;
		t.style.display="block";
		r.style.display="block";
	}

	else if(bmi>=25 && bmi<30){
		document.querySelector("#report").textContent=rr+"Overweight, your B.M.I is "+bmi;
		t.style.display="block";
		r.style.display="block";
	}

	else if(bmi>=18.5 && bmi<25){
		document.querySelector("#report").textContent=rr+"Normal, your B.M.I is "+bmi;
		t.style.display="block";
		r.style.display="block";
	}

	else if(bmi<18.5){
		document.querySelector("#report").textContent=rr+"Underweight, your B.M.I is "+bmi;
		t.style.display="block";
		r.style.display="block";
	}

	else{
		throw "Error! Check your input data"
	}

}

catch(err){
	alert(err);
	// t.style.display="none";
	// r.style.display="none";
}

}
