var time = document.querySelector('.time')
setInterval(function(){
	var date=new Date()
	let hh= padZero(date.getHours())
	let mm= padZero(date.getMinutes())
	let ss= padZero(date.getSeconds())
	time.innerText = hh+':'+mm+':'+ss
},1000)

function padZero(n){
	return n > 9 ? n : '0' + n
}