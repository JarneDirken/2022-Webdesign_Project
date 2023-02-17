// Author:Sohaib Ibenhajene
//Initialize variable hamburger by selecting the class hamburger
const hamburger = document.querySelector('.hamburger');

//add event listener to the hamburger on click
hamburger.addEventListener('click', function () {
    //Toggle the class is-active to the hamburger when you click on it
    this.classList.toggle('is-active');
});

//Ready event becomes active as soon as the page is loaded into the DOM
$(function(){
    //Event listener when the user scrolls on the page
    $(window).scroll(() => {
        //if the user scrolls down more than the navbar height
        const scroll = $(window).scrollTop();
        //if the scroll is greater than the navbar height
        if (scroll > 10) {
            //Make the background color of the navbar purple
            $('.navbar-scroll').css('background-color', '#9471FF');
            //Remove the box shadow from the navbar
            $('.navbar-scroll').css('box-shadow', 'none');
            //Change the color of the navbar when it's collapsed to purple
            $('.navbar-home-collapse').css('background-color', '#9471FF');
        } else {
            //Make the background color of the navbar transparent
            $('.navbar-scroll').css('background-color', 'transparent');
            //Add the box shadow to the navbar
            $('.navbar-scroll').css('box-shadow', '0 4px 12px 0 rgb(0 0 0 / 10%), 0 2px 4px rgb(0 0 0 / 50%)');
            //Change the color of the navbar when it's collapsed to purple with light opacity
            $('.navbar-home-collapse').css('background-color', 'rgba(117, 70, 241, 0.8)');
        }
    });
});

//Initialize variables for the buttons and hidden text
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

//Add event listeners to the buttons on click
btn1.addEventListener('click', () => {
    //Check if the text is hidden
    if (text1.classList.contains("d-none")){
        //If it is hidden, show it
        text1.classList.remove("d-none");
        //Change the button text to hide text
        btn1.innerText = "Hide Text";
    } else {
        //If it is visible, hide it
        text1.classList.add("d-none");
        //Change the button text to Read More
        btn1.innerText = "Read More";
    }
})

//Add event listeners to the buttons on click
btn2.addEventListener('click', () => {
    //Check if the text is hidden
    if (text2.classList.contains("d-none")){
        //If it is hidden, show it
        text2.classList.remove("d-none");
        //Change the button text to hide text
        btn2.innerText = "Hide Text";
    } else {
        //If it is visible, hide it
        text2.classList.add("d-none");
        //Change the button text to Read More
        btn2.innerText = "Read More";
    }
})

//Add event listeners to the buttons on click
btn3.addEventListener('click', () => {
    //Check if the text is hidden
    if (text3.classList.contains("d-none")){
        //If it is hidden, show it
        text3.classList.remove("d-none");
        //Change the button text to hide text
        btn3.innerText = "Hide Text";
    } else {
        //If it is visible, hide it
        text3.classList.add("d-none");
        //Change the button text to Read More
        btn3.innerText = "Read More";
    }
})
