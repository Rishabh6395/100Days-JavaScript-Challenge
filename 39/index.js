// Calculate Age from birthDate

// Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format "YYYY-MM-DD".

const calculateAge = (birthdate) =>{
    let todayDate = new Date()
    birthdate = new Date(birthdate)

    // step2
    let age = todayDate.getFullYear() - birthdate.getFullYear()
    // console.log(age)
    
    // step 3
    let monthDiff = todayDate.getMonth() - birthdate.getMonth()

    if(monthDiff < 0 || monthDiff === 0 && todayDate.getDate() < birthdate.getDate()){
        age--
    }
    return age
}


console.log(calculateAge('1990-05-15')) // output will depending on the current date.