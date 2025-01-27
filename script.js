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


const themeToggle = document.getElementById('themetoggle');
const body = document.body;

themeToggle.addEventListener('change', ()=>{
    if(themeToggle.checked)
    {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
    else
    {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});

