window.onload=function(){
	var box=document.getElementById('box');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var oLi=document.getElementsByTagName('li');
	var img=document.getElementById('img');


	box.onmouseover=function(){
		left.style.display = 'block';
		right.style.display = 'block';
		clearInterval(timer);
	}
	box.onmouseout=function(){
		left.style.display = 'none';
		right.style.display = 'none';
		timer = setInterval(auto,1000);
	}
	
	for (var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
	}
	var b = 1;
	right.onclick=function(){
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].style.display = '';
		}
		b = b+1;
		if (b == 5) {
			b = 1;
		}
		img.src = b+'.jpg';
		oLi[b-1].style.display = 'block';
	}
	left.onclick=function(){
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].style.display = '';
		}
		b = b-1;
		if (b == 0) {
			b = 4;
		}
		img.src = b+'.jpg';
		oLi[b-1].style.display = 'block';
	}
	function auto (){
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].style.display = '';
		}
		b = b+1;
		if (b == 5) {
			b = 1;
		}
		img.src = b+'.jpg';
		oLi[b-1].style.display = 'block';
	}
	var timer = setInterval(auto,1000);
}