$(document).ready(function(){
	$("#sendmail").button().click(function(){
		$("#progressbar").css("display", "block");
		var valid = '';
		var isr = ' is required.';
		var name = $("#name").val();
		var mail = $("#mail").val();
		var phone = $("#phone").val();
		var mess = $("#mess").val();
		if (name.length<1) {
			valid += '<br />Name'+isr;
		}
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />A valid Email'+isr;
		}
		if (mess.length<1) {
			valid += '<br />Message'+isr;
		}
		if (valid!='') {
			$("#progressbar").css("display", "none");
			$("#response").addClass('ui-widget');
			var alertHtml = '<div class="ui-state-error ui-corner-all" style="padding:0 .7em;">';
			alertHtml += '<p>';
			alertHtml += '<span class="ui-icon ui-icon-alert" style="float:left;margin-right: .3em;"></span>';
			alertHtml += '<strong>ERROR:</strong><br>';
			alertHtml += valid;
			alertHtml += '</p>';
			alertHtml += '</div>';
			$("#response").html(alertHtml);
			$("#response").fadeIn("slow");
		}
		else {
			var datastr ='name=' + name + '&mail=' + mail + '&phone=' + phone + '&mess=' + mess;
			$("#response").addClass('ui-widget');
			var alertHtml = '<div class="ui-state-highlight ui-corner-all" style="padding:0 .7em;">';
			alertHtml += '<p>';
			alertHtml += '<span class="ui-icon ui-icon-mail-closed" style="float:left;margin-right: .3em;"></span>';
			alertHtml += '<strong>Sending message ...</strong>';
			alertHtml += '</p>';
			alertHtml += '</div>';
			$("#response").html(alertHtml);
			$("#progressbar").fadeIn("slow");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		
		return false;
	});
});
function send(datastr){
	$.ajax({
		type: "POST",
		url: "sendmail.php",
		data: datastr,
		cache: false,
		success: function(html){
			$("#response").addClass('ui-widget');
			if(html == "suc")
			{
				var alertHtml = '<div class="ui-state-default ui-corner-all" style="padding:0 .7em;">';
				alertHtml += '<p>';
				alertHtml += '<span class="ui-icon ui-icon-check" style="float:left;margin-right: .3em;"></span>';
				alertHtml += '<strong><font style="color:#006600;">Mail successfully sent!</font></strong>';
				alertHtml += '</p>';
				alertHtml += '</div>';
				//setTimeout('$("#response").fadeOut("slow")',6000);
				setTimeout('$("#formail")[0].reset();',2000);
			}
			else
			{
				var alertHtml = '<div class="ui-state-error ui-corner-all" style="padding:0 .7em;">';
				alertHtml += '<p>';
				alertHtml += '<span class="ui-icon ui-icon-alert" style="float:left;margin-right: .3em;"></span>';
				alertHtml += '<strong>ERROR:</strong><br><br>';
				alertHtml += 'There are some errors sending the mail!<br /> Please use the phone number from the left column.';
				alertHtml += '</p>';
				alertHtml += '</div>';
			}
			$("#response").html(alertHtml);
			$("#progressbar").fadeOut("slow");
			$("#response").fadeIn("slow");
		}
	});
}