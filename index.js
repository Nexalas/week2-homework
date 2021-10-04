document.addEventListener("DOMContentLoaded", function () {
    var imageArray = [
        "https://www.cadogantate.com/fine-art-paintings/images/Adoration%20of%20the%20Magi.jpg",
        "https://www.cadogantate.com/fine-art-paintings/images/Madonna%20and%20child%20in%20a%20niche.jpg",
        "https://www.cadogantate.com/fine-art-paintings/images/Annunciation.jpg",
        "https://www.cadogantate.com/fine-art-paintings/images/St%20Luke%20Painting%20the%20Virgin.jpg",
        "https://www.cadogantate.com/fine-art-paintings/images/The%20Agony%20of%20the%20Garden.jpg",


    ];
    var imageArrayIndex = 0;

    var leftButton = document.querySelector("#leftButton");
    var rightButton = document.querySelector("#rightButton");
    var imageHolder = document.getElementById("imageHolder");

    
    imageHolder.src = imageArray[imageArrayIndex];

    rightButton.addEventListener('click', function () {
        if (imageArrayIndex < imageArray.length - 1) {
            imageArrayIndex++;
            imageHolder.src = imageArray[imageArrayIndex];
        }
        else {
            console.log("Too big")
        }
    })

    leftButton.addEventListener('click', function () {
        if (imageArrayIndex > 0) {
            imageArrayIndex--; 
            imageHolder.src = imageArray[imageArrayIndex]; 
        }
        else {
            console.log("Too big")
        }
    })
})