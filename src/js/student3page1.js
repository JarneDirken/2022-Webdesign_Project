// Author: Jarne Dirken

// assigning variables
let i = 0; // variable i with value 0
let j = 1; // variable j with value 1
const sliderImg = document.getElementById('slider-img'); // grabbing the element "slider-img"
let text = document.querySelector(`.number${j}`); // grabbing the element "number" with index value of j
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; //putting the images in a list
// making the text a variable, grabbing the elements
const hid1 = document.querySelector('.number1');
const hid2 = document.querySelector('.number2');
const hid3 = document.querySelector('.number3');
const hid4 = document.querySelector('.number4');
const hid5 = document.querySelector('.number5');
// setting attributes so we can change them later
hid1.setAttribute('hidden', 'hidden');
hid1.removeAttribute('hidden');
hid2.setAttribute('hidden', 'hidden');
hid3.setAttribute('hidden', 'hidden');
hid4.setAttribute('hidden', 'hidden');
hid5.setAttribute('hidden', 'hidden');

// making a function for the button next with an eventlisteren for a click
document.querySelector('#next').addEventListener('click', () => {
    // if i is greater than or equal to the length of the images - 1
    if (i >= images.length - 1) {
        i = -1;
    }
    // setting the text to the element with the class of number and the index value of j
    text = document.querySelector(`.number${j}`);
    // setting the attribute of the text to hidden
    text.setAttribute('hidden', 'hidden');
    // if j is greater than or equal to 5, set j to 0 and increase j by 1
    if (j >= 5) j = 0;
    j++;
    // set the attribute of the next j to show
    text = document.querySelector(`.number${j}`);
    text.removeAttribute('hidden');
    // increase i by 1
    i++;
    return setImg();
});
// making a function for the button back with an eventlisteren for a click
document.querySelector('#back').addEventListener('click', () => {
    // if i is less than or equal to 0, set i to the length of the images
    if (i <= 0) {
        i = images.length;
    }
    // setting the text to the element with the class of number and the index value of j
    text = document.querySelector(`.number${j}`);
    // setting the attribute of the text to hidden
    text.setAttribute('hidden', 'hidden');
    // if j is less than or equal to 1, set j to 6 and decrease j by 1
    if (j <= 1) j = 6;
    j--;
    // set the attribute of the next j to show
    text = document.querySelector(`.number${j}`);
    text.removeAttribute('hidden');
    // decrease i by 1
    i--;
    return setImg();
});
// function to change the image
function setImg() {
    return sliderImg.setAttribute('src', `./assets/student3/${images[i]}`);
}
