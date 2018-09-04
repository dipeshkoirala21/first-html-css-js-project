
var slideIndex = 0;
var image = new Array('slider22.jpg', 'image.jpg', 'everest.jpg');
showSlides();


function showSlides() {
	var coverImg = document.getElementById('HomePage');
    coverImg.style.background = "url(../IMAGES/"+image[slideIndex]+") no-repeat";
    coverImg.style.backgroundSize = 'cover';
    slideIndex++;
    if (slideIndex> 2) {slideIndex = 0}    
    setTimeout(showSlides, 3000); // Change image every 3 seconds

}