
const forms = document.forms
const nigeriaRadio = document.getElementById('nigeria-radio')
const americaRadio = document.getElementById('america-radio')
const sideBarItems = document.getElementsByClassName('sideBarItem')


nigeriaRadio.addEventListener('select', ()=>{
    switchCountry('nigeria');
})

americaRadio.addEventListener('select', ()=>{
    switchCountry('america')
})


const initialize=()=>{
    // Initializes the whitelist page on pageLoad
}

const nextForm=()=>{
    // Go to the next form
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
    switch(country){
        case "nigeria":
            for (let item in sideBarItems){
                item.classList.toggle('showSideBarItem')
            }
        case "america":
            for (let item in sideBarItems){
                item.classList.toggle('hideSideBarItem')
            }
    }
}
