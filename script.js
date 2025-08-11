var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemen = document.getElementById("sidemenu");

function openmenu() {
    sidemen.style.right = "0";
    document.addEventListener("click", handleOutsideClick);
}

function closemenu() {
    sidemen.style.right = "-200px";
    document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(event) {
    // if click is outside sidemenu and not on the hamburger icon
    const clickedInside = sidemen.contains(event.target) || event.target.closest(".fa-bars");
    if (!clickedInside) {
        closemenu();
    }
}

// Theme toggle
const themeToggle = document.getElementById('themetoggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});
