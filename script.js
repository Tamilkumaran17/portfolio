const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'black-and-white') {
    body.classList.add('black-and-white');
}

// Toggle theme and save preference
themeToggle.addEventListener('click', () => {
    body.classList.toggle('black-and-white');
    const currentTheme = body.classList.contains('black-and-white') ? 'black-and-white' : 'default';
    localStorage.setItem('theme', currentTheme);
});



var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemen = document.getElementById("sidemenu");

            function openmenu(){
                sidemen.style.right = "0";
            }
            function closemenu(){
                sidemen.style.right="-200px"
            }