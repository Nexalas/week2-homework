document.addEventListener("DOMContentLoaded", function () {
    var imageArray = [
        "https://www.cadogantate.com/fine-art-paintings/images/Adoration%20of%20the%20Magi.jpg",
        "https://www.cadogantate.com/fine-art-paintings/images/Madonna%20and%20child%20in%20a%20niche.jpg",


    ];
    var imageArrayIndex = 0;

    var leftButton = document.querySelector("#leftButton");
    var rightButton = document.querySelector("#rightButton");
    var imageHolder = document.getElementById("imageHolder");

    //src = imageArray[0]
    imageHolder.src = imageArray[imageArrayIndex];

    rightButton.addEventListener('click', function () {
        if (imageArrayIndex < imageArray.length - 1) {
            imageArrayIndex++; //increment 0 to 1
            imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[1]
        }
        else {
            console.log("Out of Bounds on right button!")
        }
    })

    leftButton.addEventListener('click', function () {
        if (imageArrayIndex > 0) {
            imageArrayIndex--; //increment 1 to 0
            imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[0]
        }
        else {
            console.log("Out of Bounds on right button!")
        }
    })
})