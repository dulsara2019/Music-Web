const name = document.getElementById('formName')
const email = document.getElementById('formEmail')
const address1 = document.getElementById('formAddress1')
const address2 = document.getElementById('formAddress2')
const address3 = document.getElementById('formAddress3')
const country  =document.getElementById('formCountry')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let massages = []
    if (name.value === '' || name.value == null ) {
        massages.push('Name is required !')
    }
    if (email.value === '' || email.value == null){
        massages.push('Email required !')
    }
    if (address1.value === '' || address1.value == null ) {
        massages.push('Address1 is required !')
    }
    if (address2.value === '' || address2.value == null){
        massages.push('address2 is required !')
    }
    if (address3.value === '' || address3.value == null ) {
        massages.push('address3 is required !')
    }
    if (country.value === '' || country.value == null){
        massages.push('country required !')
    }
    e.preventDefault()
    errorElement.innerText = massages.join(', ') 
})