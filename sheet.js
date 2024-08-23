const scriptURL = 'https://script.google.com/macros/s/AKfycbxf7QA4i-7vK9_yhtv0fq1PpwpUuEHOlglwdpxPxOYfLjutupsjbw1oBA_KBrTGpctmYw/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg");

          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message sent successfully..";
                    setTimeout(function(){
                        msg.innerHTML=" "
                    },3000)
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
            })