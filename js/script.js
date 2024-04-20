const accBtn = document.querySelector("#createAccBtn");

accBtn.addEventListener("click",() => {

    checkPassword();
    checkInformation();
    checkEmail();
});

const emailInp = document.querySelector("#email");

emailInp.addEventListener("input",()=>{

    checkEmail();
});


function checkPassword(){
    var password = document.querySelector("#password").value, confirmPassword = document.querySelector("#confirm_password").value;

    if((password == confirmPassword) && (password != "" ||confirmPassword != "")){

        document.querySelector("#password").setAttribute("style","border-color:none;");
        document.querySelector("#errorPassword").innerHTML += "";

        document.querySelector("#confirm_password").setAttribute("style","border-color:none;");
        document.querySelector("#errorCPassword").innerHTML += "";

    }else{

        document.querySelector("#password").setAttribute("style","border-color:red;");
        document.querySelector("#errorPassword").innerHTML += "*Check that password is correct";

        document.querySelector("#confirm_password").setAttribute("style","border-color:red;");
        document.querySelector("#errorCPassword").innerHTML += "*Check that password is correct";
    }
}

function checkInformation(){
    var fName = document.querySelector("#first_name"), lName = document.querySelector("#last_name");
    var phoneNumber = document.querySelector("#phone_number"), email = document.querySelector("#email");
    const regTestString = /\d|[!"#¤%&/()=?`´¨'.,_:;/*+<>|]/;
    const regTestNum1 = /\d{10,}/, regTestNum2 = /\D/;
    var regTestNum = false;
    var fNameCheck = regTestString.test(fName.value), lNameCheck = regTestString.test(lName.value) //reg tests


    if(regTestNum1.test(phoneNumber.value) == true && regTestNum2.test(phoneNumber.value) == false){
        regTestNum = true;
    }else regTestNum = false;


    switch(fNameCheck){
        case true:
            document.querySelector("#errorFName").innerHTML = "*Check that name is correct";
            break;
        default:
            document.querySelector("#errorFName").innerHTML ="";
            break;
    }
    
    switch(lNameCheck){
        case true:
            document.querySelector("#errorLName").innerHTML = "*Check that name is correct";
            break;
        default:
            document.querySelector("#errorLName").innerHTML ="";
            break;
    }

    switch(regTestNum){
        case false:
            document.querySelector("#errorPNumber").innerHTML = "*Check that Phone number is correct";
            break;
        default:
            document.querySelector("#errorPNumber").innerHTML = "";
            break;
    }
    
}

function checkEmail(){
    var email = document.querySelector("#email");
    const regTest= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch(regTest.test(email.value)){
        case false:
            document.querySelector("#errorEmail").innerHTML = "*Check that Email is correct";
            document.querySelector("#email").setAttribute("style","border-color:red;");
            break;
        default:
            document.querySelector("#errorEmail").innerHTML = "";
            document.querySelector("#email").setAttribute("style","border-color:none;");
            break;
    }

}
