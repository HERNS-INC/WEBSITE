
const form = document.forms["userForm"]

const form1_wrapper = document.getElementById('whitelist-form-1')
const form2_wrapper = document.getElementById('whitelist-form-2')

const nigeriaRadio = document.getElementById('nigeria-radio')
const americaRadio = document.getElementById('america-radio')
const sideBarItems = document.getElementsByClassName('sideBarItem')
const sideBarListItemTwo = document.getElementById('whitelist-item-2')
const sideBarDashedLine = document.getElementById('sideBarDashedLine')

const form2_option = document.getElementById("number2")
const form1_option = document.getElementById("number1")

const body = document.body
nigeriaRadio.check = true;

form.addEventListener('submit', (e)=>{
    // Forwards the data to the backend_server
    e.preventDefault()
    sendEmail();
})

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

const validate=(formData)=>{
    // Validates user Input before sending the form
    if (formData.length > 1){
        return true;
    }
    return false
}

const sendEmail=()=>{
    // forwards the form data to the email provided
    let payload = {}
   for (let el of form){
        payload[el.name] = el.value
   }

//    console.log(payload)
   const data = {
        Host:"smtp.gmail.com",
        Username:"",
        Password:"",
        To:"receiver",
        From:"sender",
        Subject:"",
        body:payload
};

    try{
        // Email.send(payload)
        
    }catch(e){
        console.error(e)
    }
}

const switchCountry=(country)=>{
   if (country==="nigeria"){
    sideBarDashedLine.style.visibility ='visible'
    sideBarListItemTwo.style.visibility='visible'
   }else{
    sideBarDashedLine.style.visibility = 'hidden'
    sideBarListItemTwo.style.visibility = 'hidden'
   }
}
