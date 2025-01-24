let button = document.querySelector("#Explore");
console.log(button);

button.onclick = function redirectToImage() {
    // Array of image URLs
    var imageUrls = [
        'img/price details.jpg'
    ];

    // Get a random index
    var randomIndex = Math.floor(Math.random() * imageUrls.length);

    // Redirect to the randomly selected image
    window.location.href = imageUrls[randomIndex];
};

let contact = document.querySelector("#contact-btn");
contact.onclick = function directtoimg() {
    window.location.href = "img/WhatsApp number.jpg";
}