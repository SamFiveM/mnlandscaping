!function(t){"use strict";function e(){var e=o.clientHeight,i=t.innerHeight;return i>e?i:e}function i(t){var e=0,i=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i}}function n(n,a){var r=t.pageYOffset,o=r+e(),s=n.offsetHeight,l=i(n).top,u=l+s,a=a||0;return o>=l+s*a&&u>=r}function a(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function r(t){this.options=a(this.defaults,t),this._init()}var o=t.document.documentElement;r.prototype={defaults:{axis:"y",distance:"25px",duration:"0.66s",delay:"0s",viewportFactor:.33},_init:function(){var e=this;this.elems=Array.prototype.slice.call(o.querySelectorAll("[data-scrollReveal]")),this.scrolled=!1,this.elems.forEach(function(t,i){e.animate(t)});var i=function(){e.scrolled||(e.scrolled=!0,setTimeout(function(){e._scrollPage()},60))},n=function(){function t(){e._scrollPage(),e.resizeTimeout=null}e.resizeTimeout&&clearTimeout(e.resizeTimeout),e.resizeTimeout=setTimeout(t,200)};t.addEventListener("scroll",i,!1),t.addEventListener("resize",n,!1)},_scrollPage:function(){var t=this;this.elems.forEach(function(e,i){n(e,t.options.viewportFactor)&&t.animate(e)}),this.scrolled=!1},parseLanguage:function(t){function e(t){var e=[],i=["from","the","and","then","but"];return t.forEach(function(t,n){i.indexOf(t)>-1||e.push(t)}),e}var i,n=t.getAttribute("data-scrollreveal").split(/[, ]+/),a={};return n=e(n),n.forEach(function(t,e){switch(t){case"enter":return i=n[e+1],("top"==i||"bottom"==i)&&(a.axis="y"),void(("left"==i||"right"==i)&&(a.axis="x"));case"after":return void(a.delay=n[e+1]);case"wait":return void(a.delay=n[e+1]);case"move":return void(a.distance=n[e+1]);case"over":return void(a.duration=n[e+1]);case"trigger":return void(a.eventName=n[e+1]);default:return}}),("top"==i||"left"==i)&&(a.distance="-"+this.options.distance),a},genCSS:function(t){var e=this.parseLanguage(t),i=e.distance||this.options.distance,n=e.duration||this.options.duration,a=e.delay||this.options.delay,r=e.axis||this.options.axis,o="-webkit-transition: all "+n+" ease "+a+";-moz-transition: all "+n+" ease "+a+";-o-transition: all "+n+" ease "+a+";transition: all "+n+" ease "+a+";",s="-webkit-transform: translate"+r+"("+i+");-moz-transform: translate"+r+"("+i+");transform: translate"+r+"("+i+");opacity: 0;",l="-webkit-transform: translate"+r+"(0);-moz-transform: translate"+r+"(0);transform: translate"+r+"(0);opacity: 1;";return{transition:o,initial:s,target:l,totalDuration:1e3*(parseFloat(n)+parseFloat(a))}},animate:function(t){var e=this.genCSS(t);t.getAttribute("data-sr-init")||(t.setAttribute("style",e.initial),t.setAttribute("data-sr-init",!0)),t.getAttribute("data-sr-complete")||n(t,this.options.viewportFactor)&&(t.setAttribute("style",e.target+e.transition),setTimeout(function(){t.removeAttribute("style"),t.setAttribute("data-sr-complete",!0)},e.totalDuration))}},document.addEventListener("DOMContentLoaded",function(e){t.scrollReveal=new r})}(window);