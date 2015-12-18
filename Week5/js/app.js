/* 
	Author: Viacheslav Litvinov, 2015
	Plugins used:
		- Flip
		- SweetAlert
		- ScrollTo
 */

$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

		init_effect: function() {
			$("#head_tagline").height(200);
			$("#head_tagline>h1").hide().fadeIn(700);
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
			$(".error").hide();
		},

		init_event: function() {
			$("#head_tagline>a:first").on("click", function() {
					$("#head_tagline>p:last").fadeIn(700);
					$("#head_tagline").height(320);
			});

			$("#head_tagline>a:last").on("click", function() {
					$("#head_tagline>p:last").hide();
					$("#head_tagline").height(200);	
			});

			$("#form-submit").on("click", function() {
					var phone = $("#form-number").val();
					if (!$.isNumeric(phone)) {
						$(".error:first").show();
					}
					else {
						$(".error:first").hide();	
					};

					var msg = $("#form-message").val();
					msg = msg.toLowerCase();
					if (!(msg.indexOf("badwords") == -1)) {
						$(".error:last").show();
					}
					else if (!(msg.indexOf("bad words") == -1)) {
						$(".error:last").show();
					}
					else {
						$(".error:last").hide();
					};

					function sentEmail() {
						swal({
							title: "Successfully send email message!",
							type: "success"
						});
						$(".form-with-error").val('');
						$("#form-name").val('');
					}
					
					if ($(".error:first").is(":hidden") && $(".error:last").is(":hidden")) {
						
						if ($("#form-message").val() == '') {
							swal("Write a message!")
						} 
						else {
							if ($("#form-name").val() == ''){
								swal({   
									title: "Are you sure?",   
									text: "You didn't mention your name",   
									type: "warning",   
									showCancelButton: true,   
									confirmButtonColor: "#D3D3D3",   
									confirmButtonText: "Yes, send it!",   
									closeOnConfirm: false }, 
									function() {
										sentEmail();	
									}						
								);
							}
							else {
								sentEmail();	
							}
						}
					}
			});
		
			$(".image-flip").flip({
			axis: 'y',
			trigger: 'hover'
			});

			$("#menu_whatwedo").on("click", function() {
				$(window).scrollTo("#content_whatwedo", {duration: 800});				
			});
			$("#menu_stats").on("click", function() {
				$(window).scrollTo("#content_stats", {duration: 800});				
			});
			$("#menu_recentwork").on("click", function() {
				$(window).scrollTo("#content_recentwork", {duration: 800});				
			});
			$("#menu_contactus").on("click", function() {
				$(window).scrollTo("#content_contactus", {duration: 800});				
			});
		}
	};
	app.init();
});
