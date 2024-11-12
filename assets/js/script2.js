
const form = document.forms["userForm"]

const form1_wrapper = document.getElementById('whitelist-form-1')
const form2_wrapper = document.getElementById('whitelist-form-2')

const nigeriaRadio = document.getElementById('nigeria-radio')
const americaRadio = document.getElementById('america-radio')
const sideBarItems = document.getElementsByClassName('sideBarItem')
const sideBarListItemTwo = document.getElementById('whitelist-item-2')
const sideBarDashedLine = document.getElementById('sideBarDashedLine')

const switchBtn = document.getElementById("switch-btn")
const joinWhiteListBtn = document.getElementById("btn-submit")

const form2_option = document.getElementById("number2")
const form1_option = document.getElementById("number1")

// ACCORDION BUTTONS 
const btns = document.getElementsByClassName('accordion-btn')
const answers = document.getElementsByClassName("answer")

// DISPLAYS ANSWER TO QUESTION IN THE ABOUT PAGE
/*
When a button is clicked, it shows the corresponding answer

*/
for (let i = 0; i < btns.length; i++){
    const btn = btns[i]
    const panel = answers[i]
    btn.addEventListener("click", ()=>{
        if (panel.style.display==="block"){
            panel.style.display = "none"
        }else{
            panel.style.display = "block"
            panel.style.transition = "ease out .4s"
            panel.style.maxHeight = "100%"
        }
    })
}


const body = document.body

nigeriaRadio.check = true;

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     sendEmail();
// })

nigeriaRadio.addEventListener('click', ()=>{
    switchCountry('nigeria');
})

americaRadio.addEventListener('click', ()=>{
    console.log('america clicked')
    switchCountry('america')
})


const nextForm=()=>{
    /*Go to the next form

        - Hides form 1 when the next button is selected
        - Displays form two
    */
    form1_wrapper.style.display = 'none'
    form2_wrapper.style.display = 'block'

    // Unfocusing form 1 option
    form1_option.style.backgroundColor = "#EDF2F7"
    form1_option.style.color = "black";

    form2_option.style.backgroundColor = "#0E2F3E";
    form2_option.style.color = "#EDF2F7"

}

const previousForm=()=>{
     /*Go to the previous form

        - Hides form 2 when the backward button is selected
        - Displays form one
    */
    form1_wrapper.style.display = 'block'
    form2_wrapper.style.display = 'none'
}

const showModal=()=>{
    // Displays the modal after completion
}

const isValid=(payload)=>{
    // Validates user Input before sending the form
    let valid = true;
    if (
        payload.country && payload.company_name 
        && payload.email_address && payload.company_phone && payload.address && payload && state){
        return valid
    }else{
        return !valid
    }
}

const getFormData=()=>{
    let payload = {}
    for (let elem in form){
        payload[elem.name] = elem.value;
    }
    return payload
}

const sendEmail=()=>{
    // forwards the form data to the email provided
    
    const data = getFormData()
    const is_valid = isValid(data)

    if (is_valid){
        try{
            const data = {
                // Host:"smtp.gmail.com",
                Host:"smtp.elasticemail.com",
                Username:"noreply@grrn.io",
                Password:"7B29724D0A131122D4E01AAEA017E86324BB",
                To:"maruche@herns.org",
                From:"noreply@grrn.io",
                Subject:"",
                body:"Nothing to see here"
                };
        Email.send(input_data).then(
            message =>{
                if (message=="OK"){
                    Swal.fire({
                        title: "Thank you!",
                        text: "We have received your data. We'll be in touch!",
                        icon: "success"
                      });
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!"
                      });
                }
            } 
        )
        }catch(e){
            console.error(e)
        }
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Input(s)!"
          });
    }
}

const switchCountry=(country)=>{
   if (country==="nigeria"){
    sideBarDashedLine.style.visibility ='visible'
    sideBarListItemTwo.style.visibility='visible'
    
    // BUTTON
    switchBtn.innerHTML = "Next"
    switchBtn.style.borderRadius = "8px"
    switchBtn.style.border = "1px solide gray"
    switchBtn.style.backgroundColor = "#EDF2F7"
    switchBtn.style.color = "#0E2F3E"

    // ACTION
    switchBtn.onclick = nextForm

   }else{
    
    // AMERICA SELECTED
    sideBarDashedLine.style.visibility = 'hidden'
    sideBarListItemTwo.style.visibility = 'hidden'

    // STYLING BUTTON
    switchBtn.innerText = "Submit"
    switchBtn.style.backgroundColor="rgba(141, 213, 70, 1)"
    switchBtn.style.color= "#0E2F3E"
    switchBtn.style.fontSize = "16px"
    switchBtn.style.fontFamily = "Poppins"

    // ACTION
    switchBtn.onclick = sendEmail

   }
}


// const ToggleAccordion=()=>{
//     console.log('btn clicked')
// }


// joinWhiteListBtn.addEventListener("submit", ()=>{
//     console.log('form submitted')
// })