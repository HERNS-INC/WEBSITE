
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

const isValid=(form)=>{
    // Validates user Input before sending the form
    let valid = true;

    for (let elem of form){
        if (elem.value === "" && elem.required){
            elem.style.backgroundColor = ""
            elem.style.border = "1px solid red"
            valid = false;
    }else{
        elem.style.border = "1px solid gray"
        elem.style.backgroundColor = "white"
    }
}
    return valid
}

const getFormData=()=>{
    let payload = {}
    if (isValid(form)){
        for (let elem in form){
            payload[elem.name] = elem.value;
        }
        return payload
    }else{
        return null
    }
}

const sendEmail=()=>{
    // forwards the form data to the email provided
    
    const input_data = getFormData()

    if (input_data != null){
        try{
            const data = {
                Host:"smtp.gmail.com",
                Username:"externalcontact@grrn.io",
                Password:"",
                To:"receiver",
                From:"sender",
                Subject:"",
                body:input_data 
        };

        console.log(data)

        // 
        }catch(e){
            console.error(e)
        }
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
