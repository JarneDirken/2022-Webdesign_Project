// Author: Tiziano Van der Waals

// Variables to store different elements from the DOM
const lightDarkSwitch = document.getElementById('lightDarkSwitch');
const mainClassList = document.querySelector('main').classList;
const darkModeIcon = document.getElementById('darkIcon').classList;

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
// Array to store different elements from the DOM
const examples = [
    document.getElementById('print'),
    document.getElementById('vars'),
    document.getElementById('if'),
    document.getElementById('for'),
];

// Variable to be used as a counter for the array
let index = 0;

// Add the classes bg-light and text-dark to the main tag
mainClassList.add('bg-light', 'text-dark');

// When the site loads this function activates
window.onload = () => {
    /* 
    If the item 'theme' in the localStorage is light, 
    make sure the classes bg-light and text-dark are added to the main tag if they aren't yet 
    
    If the item 'theme' in the localStorage is not light,
    make sure the classes bg-dark and text-light are added to the main tag if they aren't yet 
    and remove the classes bg-light and text-dark from the main tag 
    also change the icon button from a sun to a moon
    */
    if (localStorage.getItem('theme') === 'light') {
        mainClassList.add('bg-light', 'text-dark');
    } else {
        darkModeIcon.remove('fa-sun');
        darkModeIcon.add('fa-moon');
        mainClassList.remove('bg-light', 'text-dark');
        mainClassList.add('bg-dark', 'text-light');
    }
    // Put a border around the first item in the list that shows the examples
    examples[index].classList.add('border', 'border-primary', 'border-3');
};

// If the lightDarkSwitch is checked, the dark mode is activated
lightDarkSwitch.addEventListener('click', () => {
    // One line if else to switch the theme item in localStorage between light and dark
    localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light');

    /*
    If the main tag has the class bg-light and text-dark, remove them and add the classes bg-dark and text-light
    If the main tag has the class bg-dark and text-light, remove them and add the classes bg-light and text-dark
    */
    if (mainClassList.contains('bg-light')) {
        mainClassList.remove('bg-light', 'text-dark');
        mainClassList.add('bg-dark', 'text-light');
    } else {
        mainClassList.remove('bg-dark', 'text-light');
        mainClassList.add('bg-light', 'text-dark');
    }

    //Change the icon button from a sun to a moon, or vice versa
    if (darkModeIcon.contains('fa-sun')) {
        darkModeIcon.remove('fa-sun');
        darkModeIcon.add('fa-moon');
    } else {
        darkModeIcon.remove('fa-moon');
        darkModeIcon.add('fa-sun');
    }
});

// When the next button is clicked, the next item in the list gets a border and the border of the previous item is removed
nextButton.addEventListener('click', () => {
    examples[index].classList.remove('border', 'border-primary', 'border-3');
    index = (index + 1) % examples.length;
    examples[index].classList.add('border', 'border-primary', 'border-3');
});

// When the previous button is clicked, the previous item in the list gets a border and the border of the next item is removed
prevButton.addEventListener('click', () => {
    examples[index].classList.remove('border', 'border-primary', 'border-3');
    index = (index - 1 + examples.length) % examples.length;
    examples[index].classList.add('border', 'border-primary', 'border-3');
});
