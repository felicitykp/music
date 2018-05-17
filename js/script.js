//This is my Javascript Page

// Get the Day of the Week
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];



// Adjusting the iFrame depending on the Day of the Week
if (n == "Sunday") {
	document.getElementById("todaySong").innerHTML = "Song: No Roots";
	document.getElementById("todayArtist").innerHTML = "Artist: Alice Merton";
	document.getElementById("todayIframe").src = "https://www.youtube.com/embed/PUdyuKaGQd4";
} else if (n == "Monday") {
	document.getElementById("todaySong").innerHTML = "Song: No Tears Left to Cry";
	document.getElementById("todayArtist").innerHTML = "Artist: Ariana Grande";
	document.getElementById("todayIframe").src = "https://www.youtube.com/embed/ffxKSjUwKdU";
} else if (n == "Tuesday") {
	document.getElementById("todaySong").innerHTML = "Song: Nice for What";
	document.getElementById("todayArtist").innerHTML = "Artist: Drake";
	document.getElementById("todayIframe").src = "https://www.youtube.com/embed/U9BwWKXjVaI";
} else if (n == "Wednesday") {
	document.getElementById("todaySong").innerHTML = "Song: Never Be the Same";
	document.getElementById("todayArtist").innerHTML = "Artist: Camila Cabello";
	document.getElementById("todayIframe").src = "https://www.youtube.com/embed/Ph54wQG8ynk";
} else if (n == "Thursday") {
	document.getElementById("todaySong").innerHTML = "Song: Psycho";
	document.getElementById("todayArtist").innerHTML = "Artist: Post Malone";
	document.getElementById("todayIframe").src = "https://www.youtube.com/embed/au2n7VVGv_c";
} else if (n == "Friday") {
	document.getElementById("todaySong").innerHTML = "Song: Delicate";
	document.getElementById("todayArtist").innerHTML = "Artist: Taylor Swift";
	document.getElementById("todayIframe").src = "https://www.youtube.com/embed/tCXGJQYZ9JA";
} else if (n == "Saturday") {
	document.getElementById("todaySong").innerHTML = "Song: This is America";
	document.getElementById("todayArtist").innerHTML = "Artist: Donald Glover (Childish Gambino)";
	document.getElementById("todayIframe").src = "https://www.youtube.com/embed/VYOjWnS4cMY";
} else {
	alert ("error i think you broke something");
}

document.getElementById("rapDisplay").style.display = "none";
document.getElementById("countryDisplay").style.display = "none";
document.getElementById("alternativeDisplay").style.display = "none";
document.getElementById("moreDisplay").style.display = "none";

document.getElementById("popDisplay").style.display = "block";

function doPopClick() {
	document.getElementById("rapDisplay").style.display = "none";
	document.getElementById("countryDisplay").style.display = "none";
	document.getElementById("alternativeDisplay").style.display = "none";
	document.getElementById("moreDisplay").style.display = "none";

	document.getElementById("popDisplay").style.display = "block";
}

function doRapClick() {
	document.getElementById("popDisplay").style.display = "none";
	document.getElementById("countryDisplay").style.display = "none";
	document.getElementById("alternativeDisplay").style.display = "none";
	document.getElementById("moreDisplay").style.display = "none";

	document.getElementById("rapDisplay").style.display = "block";
}

function doCountryClick() {
	document.getElementById("popDisplay").style.display = "none";
	document.getElementById("rapDisplay").style.display = "none";
	document.getElementById("alternativeDisplay").style.display = "none";
	document.getElementById("moreDisplay").style.display = "none";

	document.getElementById("countryDisplay").style.display = "block";
}

function doAlternativeClick() {
	document.getElementById("popDisplay").style.display = "none";
	document.getElementById("rapDisplay").style.display = "none";
	document.getElementById("countryDisplay").style.display = "none";
	document.getElementById("moreDisplay").style.display = "none";

	document.getElementById("alternativeDisplay").style.display = "block";
}

function doMoreClick() {
	document.getElementById("rapDisplay").style.display = "none";
	document.getElementById("countryDisplay").style.display = "none";
	document.getElementById("alternativeDisplay").style.display = "none";
	document.getElementById("popDisplay").style.display = "none";

	document.getElementById("moreDisplay").style.display = "block";
}






