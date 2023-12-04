(function($) {
        "use strict";
		
		//preloader
		jQuery(window).on('load', function() {
			jQuery("#status").fadeOut();
			jQuery("#preloader").delay(350).fadeOut("slow");
		});	

		// Home Page Banner Four Slider
		if ($('#background').length > 0) {
			var image = document.getElementById('background');
			image.onload = function() {
				var engine = new RainyDay({
					image: this
				});
				engine.rain([
					[1, 2, 8000]
				]);
				engine.rain([
					[3, 3, 0.88],
					[5, 5, 0.9],
					[6, 2, 1]
				], 100);
			};
			image.crossOrigin = 'anonymous';
			image.src = 'https://dummyimage.com/1903x950/';
		}
		if ($('#rainy-bg').length > 0) {
			var image = document.getElementById('rainy-bg');
			image.onload = function() {
				var engine1 = new RainyDay({
					image: this
				});
				engine1.rain([
					[1, 2, 7000]
				]);
				engine1.rain([
					[3, 3, 0.88],
					[5, 5, 0.9],
					[6, 2, 1]
				], 100);
			};
			image.crossOrigin = 'anonymous';
			image.src = 'assets/js/plugins/rev/images/slide7.jpg';
		}

		
		// Ready Start
		$(document).ready(function() {
			//Bx slider For Companies Slider
			jQuery('.slider4').bxSlider({
				slideWidth: 400,
				minSlides: 5,
				maxSlides: 5,
				moveSlides: 1,
				slideMargin: 1,
				controls: false,
				pager: false,
				auto: true,
				breakpoints: {
					0 : {
						minSlides:3,
						maxSlides: 3,
						slideWidth: 300,
					},
					991 : {
						minSlides:4,
						maxSlides: 4,
						slideWidth: 300,
					},
					// 575: {
					// 	minSlides:3,
					// 	maxSlides: 3,
					// },
					
				},
			});

			//Portfolio
			$("#grid").mixitup({
				filterSelector: ".filter-item"
			});
			$(".filter-item").on("click", function(e) {
				//e.preventDefault()
			});
			
			//Goto Top
			$(window).scroll(function() {
				if ($(this).scrollTop() > 100) {
					$(".totop").fadeIn()
				} else {
					$(".totop").fadeOut()
				}
			});
			$(".totop").on("click", function() {
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				return false
			});
			//Color Change Script
			$('.colorchange').on("click", function() {
				var name = $(this).attr('id');
				var new_style = 'assets/css/' + name + '.css';
				$('#theme-change').attr('href', new_style);
			});
			$("#style-switcher .bottom a.settings").on("click", function(e) {
				e.preventDefault();
				var div = $("#style-switcher");
				if (div.css("left") === "-160px") {
					$("#style-switcher").animate({
						left: "0px"
					});
				} else {
					$("#style-switcher").animate({
						left: "-160px"
					});
				}
			});
			//Skills Charts
			var circle1 = Circles.create({
				id: 'circles-1',
				value: 80,
				radius: 100,
				number: 80,
				text: '80%',
				width: 7,
				colors: ["#ddd", "#94bb54"],
				duration: 900
			});
			var circle2 = Circles.create({
				id: 'circles-2',
				value: 50,
				radius: 100,
				number: 50,
				text: '50%',
				width: 7,
				colors: ["#ddd", "#333"],
				duration: 900
			});
			var circle3 = Circles.create({
				id: 'circles-3',
				value: 70,
				radius: 100,
				number: 70,
				text: '70%',
				width: 7,
				colors: ["#ddd", "#94bb54"],
				duration: 900
			});
			var circle4 = Circles.create({
				id: 'circles-4',
				value: 40,
				radius: 100,
				number: 40,
				text: '40%',
				width: 7,
				colors: ["#ddd", "#333"],
				duration: 900
			});
			//Counter 
			$('.appear-count').appear(function() {
				$('.count').countTo();
			});
			//Parallax 
			$('#intro').parallax("50%", 0.1);
			$('#second').parallax("50%", 0.1);
			$('#px_new_home').parallax("50%", 0.1);
			//Accordion 
			$("#accordion").accordion();
			//Toggle
			$(".px_toggle_container").hide();
			$("h2.px_trigger").on("click", function() {
				$(this).toggleClass("active").next().slideToggle("slow");
			});
			//Search Icon
			$('.px_search a i').on("click", function() {
				$('.px_search_form').slideToggle();
			});
			//Search Icon For Fixed Menu
			$('.px_search1 a i').on("click", function() {
				$('.px_search_form1').slideToggle();
			});
			//Revolution Slider For Main Home Page Slider		
			var tpj=jQuery;
			var revapi1061;
				if(tpj("#rev_slider_1061_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1061_1");
				}else{
					revapi1061 = tpj("#rev_slider_1061_1").show().revolution({
						sliderType:"standard",
					jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 50,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							tabs: {
								style:"metis",
								enable:true,
								width:250,
								height:40,
								min_width:249,
								wrapper_padding:0,
								wrapper_color:"",
								wrapper_opacity:"0",
								tmp:'<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div><div class="tp-tab-divider"></div><div class="tp-tab-title-mask"><div class="tp-tab-title">{{title}}</div></div></div>',
								visibleAmount: 5,
								hide_onmobile: true,
								hide_under:800,
								hide_onleave:false,
								hide_delay:200,
								direction:"vertical",
								span:true,
								position:"inner",
								space:0,
								h_align:"left",
								v_align:"center",
								h_offset:0,
								v_offset:0
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						parallax: {
							type:"3D",
							origo:"slidercenter",
							speed:1000,
							levels:[2,4,6,8,10,12,14,16,45,50,47,48,49,50,0,50],
							type:"3D",
							ddd_shadow:"off",
							ddd_bgfreeze:"on",
							ddd_overflow:"hidden",
							ddd_layer_overflow:"visible",
							ddd_z_correction:100,
						},
						spinner:"off",
						stopLoop:"on",
						stopAfterLoops:0,
						stopAtSlide:1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "60px",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			//Revolution slider with snowfall effect
			var tpj2=jQuery;
					
					var revapi476;
						if(tpj2("#rev_slider_476_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_476_1");
						}else{
							revapi476 = tpj2("#rev_slider_476_1").show().revolution({
								sliderType:"standard",
								jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
								sliderLayout:"fullscreen",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
									keyboardNavigation:"off",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									mouseScrollReverse:"default",
									onHoverStop:"off",
									arrows: {
										style:"hesperiden",
										enable:true,
										hide_onmobile:false,
										hide_onleave:false,
										tmp:'',
										left: {
											h_align:"left",
											v_align:"center",
											h_offset:20,
											v_offset:0
										},
										right: {
											h_align:"right",
											v_align:"center",
											h_offset:20,
											v_offset:0
										}
									}
								},
								visibilityLevels:[1240,1024,778,480],
								gridwidth:1240,
								gridheight:868,
								lazyType:"none",
								parallax: {
									type:"mouse",
									origo:"enterpoint",
									speed:400,
									levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
									type:"mouse",
								},
								shadow:0,
								spinner:"off",
								stopLoop:"on",
								stopAfterLoops:0,
								stopAtSlide:1,
								shuffle:"off",
								autoHeight:"off",
								fullScreenAutoWidth:"off",
								fullScreenAlignForce:"off",
								fullScreenOffsetContainer: "",
								fullScreenOffset: "60px",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
					/* STATIC SNOW FLAKE CONTAINER SETTINGS */
					/* PLEASE NOTE! YOU WILL NEED TO ADD AT LEAST 1 STATIC LAYER (EVEN A TRANSPARENT IF YOU WISH) TO USE THE SCRIPT BELOW ON STATIC LAYERS*/


					var snowsettings = {   
						selector:'.tp-static-layers',  /* THE INNER CONTAINER WHERE FLAKES SHOULD BE DRAWN (OPTIONAL)*/
						dimension:'self',   /* THE RUNTIME DIMENSIONS OF THE CONTAINER */
					particleMaxPer:400,   /* MAX PARTICLE PER 1.5M PIXEL */ 
						particlaSize:[0.2,6], /* MIN, MAX SIZE OF PARTICLE */
						particleOpacity:[0.3,1],/* MIN, MAX OPACITY OF PARTICLE */
						particleSpeed:[30,100], /* MIN, MAX SPEED OF PARTICLES */
						particleSinus:[1,100] /* MIN, MAX AMPLITUDE OF PARTICLE ANIM*/
					};


					revapi476.bind("revolution.slide.onloaded",function (e) {
					revapi476.letItSnow(snowsettings);  
					});








					/* THEMEPUNCH CANVAS SNOW PLUGIN 
					ALL RIGHTS RESERVED, 
					SNOW PLUGIN CAN ONLY BE USED WITHIN SLIDER REVOLUTION AND THEMEPUNCH PLUGINS
					THEMEPUNCH SNOW FLAKE MINI PLUGIN 

					USAGE: 
					To Build Snow: container.letItSnow(settings);  
					To stop Snow: container.letItSnow("stop");
					To start play Snow again: container.letItSnow("play");
					To destroy Snow : container.letItSnow("destroy");
					To make Summer: container.letItSnow("summer");
					To make Winter Again: container.letItSnow("winter");

					Settings:

					selector:'.tp-static-layers' ON WHICH CONTAINER WITHIN THE CONTAINER CANVAS SHOULD BE DRAWN 
					dimension:'self'             THE RUNTIME DIMENSIONS OF THE CONTAINER 
					particleMaxPer:400           MAX PARTICLE PER 1.5M PIXEL  
					particlaSize:[0.2,6]         MIN, MAX SIZE OF PARTICLE 
					particleOpacity:[0.3,1]      MIN, MAX OPACITY OF PARTICLE 
					particleSpeed:[30,100]       MIN, MAX SPEED OF PARTICLES 
					particleSinus:[1,100]        MIN, MAX AMPLITUDE OF PARTICLE (SINUS DIRECTION FOR BETTER EFFECT 

					*/


					var snowsettings={selector:".tp-static-layers",dimension:"self",particleMaxPer:400,particlaSize:[.2,6],particleOpacity:[.3,1],particleSpeed:[30,100],particleSinus:[1,100]};revapi476.bind("revolution.slide.onloaded",function(e){revapi476.letItSnow(snowsettings)}),function(e,s){"use strict";function a(e){e.pause=!0,e.sc.find(".snowflakes_wrapper").remove(),e.c.removeData("snowflakes"),e={}}function n(e){e.snowflakes=[];for(var s=e.w*e.h/15e5;e.snowflakes.length<e.particleMaxPer*s;)e.snowflakes.push(i(e))}function t(e){window.requestAnimationFrame(function(){r(e)})}function r(e){if(e==s||e.ctx==s||1==e.destroyed||1==e.pause)return!1;e.ctx.clearRect(0,0,2700,2500);var a=e.h/3,n=e.h/3*2;for(var r in e.snowflakes)if(e.snowflakes[r].y+.1*e.snowflakes[r].r<0&&1==e.summer||e.snowflakes[r].y>e.h+e.snowflakes[r].r&&1==e.summer);else{e.snowflakes[r].delta+=e.snowflakes[r].delta==Math.PI/2?-e.snowflakes[r].delta:Math.random()/500-.01,e.summer?e.snowflakes[r].y+=e.snowflakes[r].speed/50+.1*e.snowflakes[r].r:e.snowflakes[r].y+=e.snowflakes[r].speed/100+.1*e.snowflakes[r].r,e.snowflakes[r].x+=Math.sin(e.snowflakes[r].delta)*(.1*e.snowflakes[r].r),e.snowflakes[r].y>e.h+e.snowflakes[r].r&&1!=e.summer&&(e.snowflakes[r]=i(e),e.snowflakes[r].y=0-e.snowflakes[r].r);var l=e.snowflakes[r].y-a,o=e.snowflakes[r].r,c=e.snowflakes[r].alpha;if(l>0||1==e.summer){var w=1-l/n;o=e.snowflakes[r].r*w,c=e.snowflakes[r].alpha*w}o=.1>o?.1:o,c=.1>c?.1:c,e.snowflakes[r].x=e.snowflakes[r].x>e.w+e.snowflakes[r].r?0:e.snowflakes[r].x<-o?e.w:e.snowflakes[r].x,e.ctx.beginPath(),e.ctx.arc(e.snowflakes[r].x,e.snowflakes[r].y,o,2*Math.PI,!1),e.ctx.fillStyle="rgba(255,255,255,"+c+")",e.ctx.fill()}t(e)}function i(e){var s=new Object;return s.delta=(e.particleSinus[0]+Math.random()*(e.particleSinus[1]-e.particleSinus[0]))*Math.round(2*Math.random()-1),s.r=e.particlaSize[0]+Math.random()*(e.particlaSize[1]-e.particlaSize[0]),s.alpha=e.particleOpacity[0]+Math.random()*(e.particleOpacity[1]-e.particleOpacity[0]),s.speed=(e.particleSpeed[0]+Math.random()*(e.particleSpeed[1]-e.particleSpeed[0]))*s.r/3,s.x=Math.random()*e.w,s.y=Math.random()*-e.h,s}e.fn.extend({letItSnow:function(r){var i={particleMaxPer:400,particlaSize:[.2,6],particleOpacity:[.3,1],particleSpeed:[30,100],particleSinus:[1,100]};return"destroy"!=r&&"stop"!=r&&"play"!=r&&"summer"!=r&&"winter"!=r&&(r=e.extend(!0,{},i,r)),this.each(function(){if(-1!=e.inArray(r,["destroy","stop","play","winter","summer"])){switch(r){case"destroy":r=e(this).data("snowflakes"),r!=s&&a(r);break;case"stop":r=e(this).data("snowflakes"),r!=s&&(r.pause=!0);break;case"play":r=e(this).data("snowflakes"),r!=s&&(r.pause=!1,t(r));break;case"summer":r=e(this).data("snowflakes"),r!=s&&(r.summer=!0);break;case"winter":r=e(this).data("snowflakes"),r!=s&&(r.summer=!1)}return!1}return r.c=e(this),r.sc=r.selector!=s?e(this).find(r.selector):r.c,0==r.sc.length?!1:r.c.data("snowflakes")!=s?!1:(r.sc.find(".snowflakes_wrapper").remove(),r.sc.append('<div class="snowflakes_wrapper" style="position:relative;z-index:0"><div class="snowflakes_wrapper_inner" style="overflow:hidden;position:relative"><canvas width="2700" height="2500" style="position:relative;" class="snowflake_canvas"></canvas></div></div>'),r.sw=r.sc.find(".snowflakes_wrapper_inner"),r.sw.data("caller_container",r.c),r.canvas=r.sc.find(".snowflake_canvas"),r.dimension!=self?r.sizer=r.c:r.sizer=r.sc,r.w=r.sizer.width(),r.h=r.sizer.height(),r.sc.find(".snowflakes_wrapper_inner").css({width:r.w,height:r.h}),r.canvas=r.canvas[0],r.snowflakes=[],r.ctx=r.canvas.getContext("2d"),n(r),t(r),r.c.data("snowflakes",r),void e(window).resize(function(){clearTimeout(r.timer),r.timer=setTimeout(function(){r.w=r.sizer.width(),r.h=r.sizer.height(),r.sc.find(".snowflakes_wrapper_inner").css({width:r.w,height:r.h}),n(r)},50)}))})}})}(jQuery);				}
			//Revolution slider without snowfall effect
				var a=jQuery;
					
					var revapi477;
						if(a("#rev_slider_477_2").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_476_1");
						}else{
							revapi477 = a("#rev_slider_477_2").show().revolution({
								sliderType:"standard",
								jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
								sliderLayout:"fullscreen",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
									keyboardNavigation:"off",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									mouseScrollReverse:"default",
									onHoverStop:"off",
									arrows: {
										style:"hesperiden",
										enable:true,
										hide_onmobile:false,
										hide_onleave:false,
										tmp:'',
										left: {
											h_align:"left",
											v_align:"center",
											h_offset:20,
											v_offset:0
										},
										right: {
											h_align:"right",
											v_align:"center",
											h_offset:20,
											v_offset:0
										}
									}
								},
								visibilityLevels:[1240,1024,778,480],
								gridwidth:1240,
								gridheight:868,
								lazyType:"none",
								parallax: {
									type:"mouse",
									origo:"enterpoint",
									speed:400,
									levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
									type:"mouse",
								},
								shadow:0,
								spinner:"off",
								stopLoop:"on",
								stopAfterLoops:0,
								stopAtSlide:1,
								shuffle:"off",
								autoHeight:"off",
								fullScreenAutoWidth:"off",
								fullScreenAlignForce:"off",
								fullScreenOffsetContainer: "",
								fullScreenOffset: "60px",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});	
							}
			// Revolution Slider For Full Screen Slider and Tranparent menu Page 
				var t=jQuery;
					
					var revapi1058;
						if(t("#rev_slider_1058_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_1058_1");
						}else{
							revapi1058 = t("#rev_slider_1058_1").show().revolution({
								sliderType:"hero",
								jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
								sliderLayout:"fullscreen",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
								},
								responsiveLevels:[1240,1024,778,480],
								visibilityLevels:[1240,1024,778,480],
								gridwidth:[1240,1024,778,480],
								gridheight:[868,768,960,720],
								lazyType:"none",
								parallax: {
									type:"scroll",
									origo:"slidercenter",
									speed:1000,
									levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
									type:"scroll",
								},
								shadow:0,
								spinner:"spinner2",
								autoHeight:"off",
								fullScreenAutoWidth:"off",
								fullScreenAlignForce:"off",
								fullScreenOffsetContainer: "",
								fullScreenOffset: "60",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									disableFocusListener:false,
								}
							});
						}
			//contact form submition
			// $("#em_submit").on("click", function() {
			// 	var e = $("#uname").val();
			// 	var t = $("#umail").val();
			// 	var n = $("#subj").val();
			// 	var r = $("#msg").val();
			// 	$.ajax({
			// 		type: "POST",
			// 		url: "ajaxmail.php",
			// 		data: {
			// 			username: e,
			// 			useremail: t,
			// 			useresubject: n,
			// 			mesg: r
			// 		},
			// 		success: function(n) {
			// 			var i = n.split("#");
			// 			if (i[0] == "1") {
			// 				$("#uname").val("");
			// 				$("#umail").val("");
			// 				$("#subj").val("");
			// 				$("#msg").val("");
			// 				$("#err").html(i[1])
			// 			} else {
			// 				$("#uname").val(e);
			// 				$("#umail").val(t);
			// 				$("#subj").val(t);
			// 				$("#msg").val(r);
			// 				$("#err").html(i[1])
			// 			}
			// 		}
			// 	})
			
			// });
			if ($('.popup-gallery').length > 0) {
				$('.popup-gallery').magnificPopup({
					type: 'image',
					gallery:{
						enabled:true
					}
				});
			}
			
		}); //ready


}(jQuery));

// Contact Form Submission
function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
        if($(this).hasClass('require')){
            if($(this).val().trim() == ''){
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            }else{
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if($(this).val().trim() != ''){
            var valid = $(this).attr('data-valid');
            if(typeof valid != 'undefined'){
                if(!eval(valid).test($(this).val().trim())){
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                }else{
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    
    if(check == 0){
       var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type' , _this.attr('form-type'));
        $.ajax({
            method : 'post',
            url : 'ajaxmail.php',
            data:formDetail,
            cache:false,
            contentType: false,
            processData: false
        }).done(function(resp){
            console.log(resp);
            if(resp == 1){
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            }else{
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});