
const form1 = document.getElementById('whitelist-form-1')
const form2 = document.getElementById('whitelist-form-2')
const nigeriaRadio = document.getElementById('nigeria-radio')
const americaRadio = document.getElementById('america-radio')
const sideBarItems = document.getElementsByClassName('sideBarItem')
const sideBarListItemTwo = document.getElementById('whitelist-item-2')
const sideBarDashedLine = document.getElementById('sideBarDashedLine')

const body = document.body
nigeriaRadio.check = true;

nigeriaRadio.addEventListener('click', ()=>{
    switchCountry('nigeria');
})

americaRadio.addEventListener('click', ()=>{
    switchCountry('america')
})


const initialize=()=>{
    // Initializes the whitelist page on pageLoad
    nigeriaRadio.check = true;
}

const nextForm=()=>{
    /*Go to the next form

        - Hides form 1 when the next button is selected
        - Displays form two
    */
    form1.style.display = 'none'
    form2.style.display = 'block'
}
const previousForm=()=>{
     /*Go to the previous form

        - Hides form 2 when the backward button is selected
        - Displays form one
    */
    form1.style.display = 'block'
    form2.style.display = 'none'
}

const showSecondForm=()=>{
    // Shows the second form
}

const showModal=()=>{
    // Displays the modal after completion
}

const sendEmail=()=>{
    // forwards the form data to the email provided
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
