function RainyDay(t,i){if(this===window)return new RainyDay(t,i);this.img=t.image;var s={opacity:1,blur:10,crop:[0,0,this.img.naturalWidth,this.img.naturalHeight],enableSizeChange:!0,parentElement:document.getElementsByTagName("body")[0],fps:30,fillStyle:"#8ED6FF",enableCollisions:!0,gravityThreshold:3,gravityAngle:Math.PI/2,gravityAngleVariance:0,reflectionScaledownFactor:5,reflectionDropMappingWidth:200,reflectionDropMappingHeight:200,width:this.img.clientWidth,height:this.img.clientHeight,position:"absolute",top:0,left:0};for(var e in s)"undefined"==typeof t[e]&&(t[e]=s[e]);this.options=t,this.drops=[],this.canvas=i||this.prepareCanvas(),this.prepareBackground(),this.prepareGlass(),this.reflection=this.REFLECTION_MINIATURE,this.trail=this.TRAIL_DROPS,this.gravity=this.GRAVITY_NON_LINEAR,this.collision=this.COLLISION_SIMPLE,this.setRequestAnimFrame()}function Drop(t,i,s,e,o){this.x=Math.floor(i),this.y=Math.floor(s),this.r=Math.random()*o+e,this.rainyday=t,this.context=t.context,this.reflection=t.reflected}function BlurStack(){this.r=0,this.g=0,this.b=0,this.next=null}function CollisionMatrix(t,i,s){this.resolution=s,this.xc=t,this.yc=i,this.matrix=new Array(t);for(var e=0;t+5>=e;e++){this.matrix[e]=new Array(i);for(var o=0;i+5>=o;++o)this.matrix[e][o]=new DropItem(null)}}function DropItem(t){this.drop=t,this.next=null}RainyDay.prototype.prepareCanvas=function(){var t=document.createElement("canvas");return t.style.position=this.options.position,t.style.top=this.options.top,t.style.left=this.options.left,t.width=this.options.width,t.height=this.options.height,this.options.parentElement.appendChild(t),this.options.enableSizeChange&&this.setResizeHandler(),t},RainyDay.prototype.setResizeHandler=function(){null!==window.onresize?window.setInterval(this.checkSize.bind(this),100):(window.onresize=this.checkSize.bind(this),window.onorientationchange=this.checkSize.bind(this))},RainyDay.prototype.checkSize=function(){var t=this.img.clientWidth,i=this.img.clientHeight,s=this.img.offsetLeft,e=this.img.offsetTop,o=this.canvas.width,a=this.canvas.height,n=this.canvas.offsetLeft,r=this.canvas.offsetTop;(o!==t||a!==i)&&(this.canvas.width=t,this.canvas.height=i,this.prepareBackground(),this.glass.width=this.canvas.width,this.glass.height=this.canvas.height,this.prepareReflections()),(n!==s||r!==e)&&(this.canvas.offsetLeft=s,this.canvas.offsetTop=e)},RainyDay.prototype.animateDrops=function(){this.addDropCallback&&this.addDropCallback();for(var t=this.drops.slice(),i=[],s=0;s<t.length;++s)t[s].animate()&&i.push(t[s]);this.drops=i,window.requestAnimFrame(this.animateDrops.bind(this))},RainyDay.prototype.setRequestAnimFrame=function(){var t=this.options.fps;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(i){window.setTimeout(i,1e3/t)}}()},RainyDay.prototype.prepareReflections=function(){this.reflected=document.createElement("canvas"),this.reflected.width=this.canvas.width/this.options.reflectionScaledownFactor,this.reflected.height=this.canvas.height/this.options.reflectionScaledownFactor;var t=this.reflected.getContext("2d");t.drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.reflected.width,this.reflected.height)},RainyDay.prototype.prepareGlass=function(){this.glass=document.createElement("canvas"),this.glass.width=this.canvas.width,this.glass.height=this.canvas.height,this.context=this.glass.getContext("2d")},RainyDay.prototype.rain=function(t,i){if(this.reflection!==this.REFLECTION_NONE&&this.prepareReflections(),this.animateDrops(),this.presets=t,this.PRIVATE_GRAVITY_FORCE_FACTOR_Y=.001*this.options.fps/25,this.PRIVATE_GRAVITY_FORCE_FACTOR_X=(Math.PI/2-this.options.gravityAngle)*(.001*this.options.fps)/50,this.options.enableCollisions){for(var s=0,e=0;e<t.length;e++)t[e][0]+t[e][1]>s&&(s=Math.floor(t[e][0]+t[e][1]));if(s>0){var o=Math.ceil(this.canvas.width/s),a=Math.ceil(this.canvas.height/s);this.matrix=new CollisionMatrix(o,a,s)}else this.options.enableCollisions=!1}for(var e=0;e<t.length;e++)t[e][3]||(t[e][3]=-1);var n=0;this.addDropCallback=function(){var s=(new Date).getTime();if(!(i>s-n)){n=s;var e=this.canvas.getContext("2d");e.clearRect(0,0,this.canvas.width,this.canvas.height),e.drawImage(this.background,0,0,this.canvas.width,this.canvas.height);for(var o,a=0;a<t.length;a++)if(t[a][2]>1||-1===t[a][3]){if(0!==t[a][3]){t[a][3]--;for(var r=0;r<t[a][2];++r)this.putDrop(new Drop(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,t[a][0],t[a][1]))}}else if(Math.random()<t[a][2]){o=t[a];break}o&&this.putDrop(new Drop(this,Math.random()*this.canvas.width,Math.random()*this.canvas.height,o[0],o[1])),e.save(),e.globalAlpha=this.options.opacity,e.drawImage(this.glass,0,0,this.canvas.width,this.canvas.height),e.restore()}}.bind(this)},RainyDay.prototype.putDrop=function(t){t.draw(),this.gravity&&t.r>this.options.gravityThreshold&&(this.options.enableCollisions&&this.matrix.update(t),this.drops.push(t))},RainyDay.prototype.clearDrop=function(t,i){var s=t.clear(i);if(s){var e=this.drops.indexOf(t);e>=0&&this.drops.splice(e,1)}return s},Drop.prototype.draw=function(){this.context.save(),this.context.beginPath();var t=this.r;if(this.r=.95*this.r,this.r<3)this.context.arc(this.x,this.y,this.r,0,2*Math.PI,!0),this.context.closePath();else if(this.colliding||this.yspeed>2){if(this.colliding){var i=this.colliding;this.r=1.001*(this.r>i.r?this.r:i.r),this.x+=i.x-this.x,this.colliding=null}var s=1+.1*this.yspeed;this.context.moveTo(this.x-this.r/s,this.y),this.context.bezierCurveTo(this.x-this.r,this.y-2*this.r,this.x+this.r,this.y-2*this.r,this.x+this.r/s,this.y),this.context.bezierCurveTo(this.x+this.r,this.y+s*this.r,this.x-this.r,this.y+s*this.r,this.x-this.r/s,this.y)}else this.context.arc(this.x,this.y,.9*this.r,0,2*Math.PI,!0),this.context.closePath();this.context.clip(),this.r=t,this.rainyday.reflection&&this.rainyday.reflection(this),this.context.restore()},Drop.prototype.clear=function(t){return this.context.clearRect(this.x-this.r-1,this.y-this.r-2,2*this.r+2,2*this.r+2),t?(this.terminate=!0,!0):this.y-this.r>this.rainyday.canvas.height||this.x-this.r>this.rainyday.canvas.width||this.x+this.r<0?!0:!1},Drop.prototype.animate=function(){if(this.terminate)return!1;var t=this.rainyday.gravity(this);if(!t&&this.rainyday.trail&&this.rainyday.trail(this),this.rainyday.options.enableCollisions){var i=this.rainyday.matrix.update(this,t);i&&this.rainyday.collision(this,i)}return!t||this.terminate},RainyDay.prototype.TRAIL_NONE=function(){},RainyDay.prototype.TRAIL_DROPS=function(t){(!t.trailY||t.y-t.trailY>=100*Math.random()*t.r)&&(t.trailY=t.y,this.putDrop(new Drop(this,t.x+(2*Math.random()-1)*Math.random(),t.y-t.r-5,Math.ceil(t.r/5),0)))},RainyDay.prototype.TRAIL_SMUDGE=function(t){var i=t.y-t.r-3,s=t.x-t.r/2+2*Math.random();0>i||0>s||this.context.drawImage(this.clearbackground,s,i,t.r,2,s,i,t.r,2)},RainyDay.prototype.GRAVITY_NONE=function(){return!0},RainyDay.prototype.GRAVITY_LINEAR=function(t){return this.clearDrop(t)?!0:(t.yspeed?(t.yspeed+=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r)):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X),t.y+=t.yspeed,t.draw(),!1)},RainyDay.prototype.GRAVITY_NON_LINEAR=function(t){return this.clearDrop(t)?!0:(t.collided?(t.collided=!1,t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=!1,t.slowing=!1):(!t.seed||t.seed<0)&&(t.seed=Math.floor(t.r*Math.random()*this.options.fps),t.skipping=t.skipping===!1?!0:!1,t.slowing=!0),t.seed--,t.yspeed?t.slowing?(t.yspeed/=1.1,t.xspeed/=1.1,t.yspeed<this.PRIVATE_GRAVITY_FORCE_FACTOR_Y&&(t.slowing=!1)):t.skipping?(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X):(t.yspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_Y*Math.floor(t.r),t.xspeed+=1*this.PRIVATE_GRAVITY_FORCE_FACTOR_X*Math.floor(t.r)):(t.yspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_Y,t.xspeed=this.PRIVATE_GRAVITY_FORCE_FACTOR_X),0!==this.options.gravityAngleVariance&&(t.xspeed+=(2*Math.random()-1)*t.yspeed*this.options.gravityAngleVariance),t.y+=t.yspeed,t.x+=t.xspeed,t.draw(),!1)},RainyDay.prototype.positiveMin=function(t,i){var s=0;return s=i>t?0>=t?i:t:0>=i?t:i,0>=s?1:s},RainyDay.prototype.REFLECTION_NONE=function(){this.context.fillStyle=this.options.fillStyle,this.context.fill()},RainyDay.prototype.REFLECTION_MINIATURE=function(t){var i=Math.max((t.x-this.options.reflectionDropMappingWidth)/this.options.reflectionScaledownFactor,0),s=Math.max((t.y-this.options.reflectionDropMappingHeight)/this.options.reflectionScaledownFactor,0),e=this.positiveMin(2*this.options.reflectionDropMappingWidth/this.options.reflectionScaledownFactor,this.reflected.width-i),o=this.positiveMin(2*this.options.reflectionDropMappingHeight/this.options.reflectionScaledownFactor,this.reflected.height-s),a=Math.max(t.x-1.1*t.r,0),n=Math.max(t.y-1.1*t.r,0);this.context.drawImage(this.reflected,i,s,e,o,a,n,2*t.r,2*t.r)},RainyDay.prototype.COLLISION_SIMPLE=function(t,i){for(var s,e=i;null!=e;){var o=e.drop;if(Math.sqrt(Math.pow(t.x-o.x,2)+Math.pow(t.y-o.y,2))<t.r+o.r){s=o;break}e=e.next}if(s){var a,n;t.y>s.y?(a=t,n=s):(a=s,n=t),this.clearDrop(n),this.clearDrop(a,!0),this.matrix.remove(a),n.draw(),n.colliding=a,n.collided=!0}},RainyDay.prototype.prepareBackground=function(){this.background=document.createElement("canvas"),this.background.width=this.canvas.width,this.background.height=this.canvas.height,this.clearbackground=document.createElement("canvas"),this.clearbackground.width=this.canvas.width,this.clearbackground.height=this.canvas.height;var t=this.background.getContext("2d");t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),t=this.clearbackground.getContext("2d"),t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.img,this.options.crop[0],this.options.crop[1],this.options.crop[2],this.options.crop[3],0,0,this.canvas.width,this.canvas.height),!isNaN(this.options.blur)&&this.options.blur>=1&&this.stackBlurCanvasRGB(this.canvas.width,this.canvas.height,this.options.blur)},RainyDay.prototype.stackBlurCanvasRGB=function(t,i,s){var e=[[0,9],[1,11],[2,12],[3,13],[5,14],[7,15],[11,16],[15,17],[22,18],[31,19],[45,20],[63,21],[90,22],[127,23],[181,24]],o=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];s|=0;var a,n,r,h,p,l,c,d,y,g,f,m,u,x,v,R,w,I,A,_,D=this.background.getContext("2d"),T=D.getImageData(0,0,t,i),C=T.data,M=s+1,E=M*(M+1)/2,b=new BlurStack,F=new BlurStack,O=b;for(r=1;2*s+1>r;r++)O=O.next=new BlurStack,r===M&&(F=O);O.next=b;var k=null,V=null;c=l=0;for(var S,Y=o[s],N=0;N<e.length;++N)if(s<=e[N][0]){S=e[N-1][1];break}for(n=0;i>n;n++){for(x=v=R=d=y=g=0,f=M*(w=C[l]),m=M*(I=C[l+1]),u=M*(A=C[l+2]),d+=E*w,y+=E*I,g+=E*A,O=b,r=0;M>r;r++)O.r=w,O.g=I,O.b=A,O=O.next;for(r=1;M>r;r++)h=l+((r>t-1?t-1:r)<<2),d+=(O.r=w=C[h])*(_=M-r),y+=(O.g=I=C[h+1])*_,g+=(O.b=A=C[h+2])*_,x+=w,v+=I,R+=A,O=O.next;for(k=b,V=F,a=0;t>a;a++)C[l]=d*Y>>S,C[l+1]=y*Y>>S,C[l+2]=g*Y>>S,d-=f,y-=m,g-=u,f-=k.r,m-=k.g,u-=k.b,h=c+((h=a+s+1)<t-1?h:t-1)<<2,x+=k.r=C[h],v+=k.g=C[h+1],R+=k.b=C[h+2],d+=x,y+=v,g+=R,k=k.next,f+=w=V.r,m+=I=V.g,u+=A=V.b,x-=w,v-=I,R-=A,V=V.next,l+=4;c+=t}for(a=0;t>a;a++){for(v=R=x=y=g=d=0,l=a<<2,f=M*(w=C[l]),m=M*(I=C[l+1]),u=M*(A=C[l+2]),d+=E*w,y+=E*I,g+=E*A,O=b,r=0;M>r;r++)O.r=w,O.g=I,O.b=A,O=O.next;for(p=t,r=1;M>r;r++)l=p+a<<2,d+=(O.r=w=C[l])*(_=M-r),y+=(O.g=I=C[l+1])*_,g+=(O.b=A=C[l+2])*_,x+=w,v+=I,R+=A,O=O.next,i-1>r&&(p+=t);for(l=a,k=b,V=F,n=0;i>n;n++)h=l<<2,C[h]=d*Y>>S,C[h+1]=y*Y>>S,C[h+2]=g*Y>>S,d-=f,y-=m,g-=u,f-=k.r,m-=k.g,u-=k.b,h=a+((h=n+M)<i-1?h:i-1)*t<<2,d+=x+=k.r=C[h],y+=v+=k.g=C[h+1],g+=R+=k.b=C[h+2],k=k.next,f+=w=V.r,m+=I=V.g,u+=A=V.b,x-=w,v-=I,R-=A,V=V.next,l+=t}D.putImageData(T,0,0)},CollisionMatrix.prototype.update=function(t,i){if(t.gid){if(!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;if(this.matrix[t.gmx][t.gmy].remove(t),i)return null;if(t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t);var s=this.collisions(t);if(s&&null!=s.next)return s.next}else{if(t.gid=Math.random().toString(36).substr(2,9),t.gmx=Math.floor(t.x/this.resolution),t.gmy=Math.floor(t.y/this.resolution),!this.matrix[t.gmx]||!this.matrix[t.gmx][t.gmy])return null;this.matrix[t.gmx][t.gmy].add(t)}return null},CollisionMatrix.prototype.collisions=function(t){var i=new DropItem(null),s=i;return i=this.addAll(i,t.gmx-1,t.gmy+1),i=this.addAll(i,t.gmx,t.gmy+1),i=this.addAll(i,t.gmx+1,t.gmy+1),s},CollisionMatrix.prototype.addAll=function(t,i,s){if(i>0&&s>0&&i<this.xc&&s<this.yc)for(var e=this.matrix[i][s];null!=e.next;)e=e.next,t.next=new DropItem(e.drop),t=t.next;return t},CollisionMatrix.prototype.remove=function(t){this.matrix[t.gmx][t.gmy].remove(t)},DropItem.prototype.add=function(t){for(var i=this;null!=i.next;)i=i.next;i.next=new DropItem(t)},DropItem.prototype.remove=function(t){for(var i=this,s=null;null!=i.next;)s=i,i=i.next,i.drop.gid===t.gid&&(s.next=i.next)};