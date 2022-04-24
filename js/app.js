/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//var for each element needed
const sections = Array.from(document.querySelectorAll("section"));
const List = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */



// build the Navbar function

function navbuild() {
    let Navlink = '';
    // looping all sections with name and link
    for (section of sections) {

        // Var indicating the name and link we will use

        SID = section.id;
        SName = section.getAttribute('data-nav');
        Navlink += `<li><a class='Menu__link' href ='#${SID}'>${SName}</a></li>
        `;




    }



    //Listing the link in the Navbar var created


    List.innerHTML = Navlink;
}




//Run navbuild function

navbuild();










// Start Active section observing.

// const for how to get the active section 'target'.
const Actvopt = {
    root: null,
    threshold: 0.5,
    rootMargin: "-120px"

};

//Observer to what will do when get section in target.

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {

        /* if funct. for adding active to the viewed section,
and remove it for other sections.
        */

        if (entry.isIntersecting) {

            entry.target.classList.add('your-active-class');

        } else {
            entry.target.classList.remove('your-active-class')

        }




    });

}, Actvopt);

//runing observe for all of the sections.

sections.forEach(section => {
    observer.observe(section);

});


/* Scroll to anchor ID using scrollTO event
smoth scroll with way of detecting the link pressed*/


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});