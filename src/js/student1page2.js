// Author: Sohaib Ibenhajene

//Initialize variables for the buttons and hidden text
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text6 = document.getElementById('text6');

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

//Add event listeners to the buttons on click
btn4.addEventListener('click', () => {
    //Check if the text is hidden
    if (text4.classList.contains("d-none")){
        //If it is hidden, show it
        text4.classList.remove("d-none");
        //Change the button text to hide text
        btn4.innerText = "Hide Text";
    } else {
        //If it is visible, hide it
        text4.classList.add("d-none");
        //Change the button text to Read More
        btn4.innerText = "Read More";
    }
})

//Add event listeners to the buttons on click
btn5.addEventListener('click', () => {
    //Check if the text is hidden
    if (text5.classList.contains("d-none")){
        //If it is hidden, show it
        text5.classList.remove("d-none");
        //Change the button text to hide text
        btn5.innerText = "Hide Text";
    } else {
        //If it is visible, hide it
        text5.classList.add("d-none");
        //Change the button text to Read More
        btn5.innerText = "Read More";
    }
})

//Add event listeners to the buttons on click
btn6.addEventListener('click', () => {
    //Check if the text is hidden
    if (text6.classList.contains("d-none")){
        //If it is hidden, show it
        text6.classList.remove("d-none");
        //Change the button text to hide text
        btn6.innerText = "Hide Text";
    } else {
        //If it is visible, hide it
        text6.classList.add("d-none");
        //Change the button text to Read More
        btn6.innerText = "Read More";
    }
})

