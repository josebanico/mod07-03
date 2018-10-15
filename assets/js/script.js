$(document).ready(() => {
	$("#task").keypress((key)=>{
		if(key.which == 13){
			let task = $("#task").val();
			$("#list").append('<li>' + task + '</li>');
			$("#list").on('click','li', function(){
				$(this).css("text-decoration","line-through")
			})
			
			// alert(task);
		}
	})
})