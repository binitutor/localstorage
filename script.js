
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const outputName = document.getElementById('outputName')
const outputEmail = document.getElementById('outputEmail')

function call_localStorage_data(){
    // ********* 4. call data from localstorage
    let savedName = localStorage.getItem('name')
    // console.log(savedName)
    let savedEmail = localStorage.getItem('email')
    // console.log(savedEmail)
    outputName.textContent = savedName
    outputEmail.textContent = savedEmail
}

function save_data(event){
    event.preventDefault()

    // ********* 1. output data to browser
    // outputName.textContent = inputName
    // outputEmail.textContent = inputEmail

    // ********* 2. output localstorage
    // console.log(localStorage)

    // ********* 3. save data to localStorage
    localStorage.setItem('name', inputName.value)
    localStorage.setItem('email', inputEmail.value)

    location.reload() // refresh

    // ********* 4. call data from localstorage
    // let savedName = localStorage.getItem('name')
    // // console.log(savedName)
    // let savedEmail = localStorage.getItem('email')
    // // console.log(savedEmail)
    // outputName.textContent = savedName
    // outputEmail.textContent = savedEmail

    // ********* 5. delete single data from localStorage
    // localStorage.removeItem('name')

    // ********* 6. delete all data from localStorage
    // localStorage.clear()

    // ********* 7. get all keys
    // let keys = localStorage.key(1)
    // console.log(keys)

}