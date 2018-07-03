
var count = 60;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function(){


	$("#quiz").hide();
	$("#results").hide();


	$(".start").on("click", function(){
		$("#quiz").show();
		startCountdown();
		return;
	});

	function countdown(){
		count--;
    	$('#timer_number').html(count + " Seconds");
		$("#done_button").on("click", function(){
		count = 0; 
		return;
		});

		if(count == -1){
		timeUp();
		$("#quiz").hide();
		}
	}

	function startCountdown(){
		setInterval(countdown, 1000);
	}

	function timeUp(){
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
	
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Captain America"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Edward Norton"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Mjolnir"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Ant-Man"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Stan"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		$("#results").show();



	}

});
