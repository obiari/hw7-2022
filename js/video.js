/*var video /* = id = getElementById("name of vid")*/;
/*have this twice /
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 });
*/
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false
	console.log("Auto play is set to "+video.autoplay)
	console.log("Loop is set to "+video.autoplay)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video"); 
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate*=.90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate/=.90 
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.durartion){
		video.currentTime = 0;
		/*video.loop = true;*/
	}
	console.log("Current Video time is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.defultMuted = true;
	console.log("Video is muted")
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume Slider");
	video.volume= this.value/100;
	console.log("Volume is", video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Styled")
	console.log("Style is oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original")
	console.log("Style is Original")
});




//test notes
//child elements 
//background color in all steps
//pay attention to the last image is when yiure gonna have to style it 
//step four is tricy 
//be familiar with the use if auto
//mobile view, pixel size
//each step is worth 35pts steo 4 20
// set the width set percentage 
// child elements 
//look over hw 4
//container html and css
//style it no validating 
//no using flex 