var API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/members';
//submit
document.forms['register-form']['btnSubmit'].onclick = function () {
    if (validateForm()) {
        doRegister();
    }
};
//reset form
document.forms['register-form']['btnReset'].onclick = function () {
    var msg = document.querySelectorAll("[class*='msg-']");
    for (var i = 0; i < msg.length; i++) {
        msg[i].innerHTML = '';
    }
};

//ham kiem tra form
function validateForm() {
    var isValidate = true, isValidateFirstName = true, isValidateLastName = true;
    var isValidatePassword = true, isValidateConfirmPassword = true, isValidatePhone = true;
    var isValidateAvatar = true, isValidateEmail = true, isValidateAddress = true;
    //kiem tra firstName
    var txtFirstName = document.forms['register-form']['firstName'];
    var msgFirstName = document.querySelector("[class*='msgFirstName']");
    if (txtFirstName.value == null || txtFirstName.value.length == 0) {
        msgFirstName.classList.remove('msg-success');
        msgFirstName.classList.add('msg-error');
        msgFirstName.innerHTML = 'Không được để trống mục này!';
        isValidateFirstName = false;
    } else {
        msgFirstName.classList.remove('msg-error');
        msgFirstName.classList.add('msg-success');
        msgFirstName.innerHTML = 'Hợp lệ.';
        isValidateFirstName = true;
    }
    //kiem tra lastName
    var txtLastName = document.forms['register-form']['lastName'];
    var msgLastName = document.querySelector("[class*='msgLastName']");
    if (txtLastName.value == null || txtLastName.value.length == 0) {
        msgLastName.classList.remove('msg-success');
        msgLastName.classList.add('msg-error');
        msgLastName.innerHTML = 'Không được để trống mục này!';
        isValidateLastName = false;
    } else {
        msgLastName.classList.remove('msg-error');
        msgLastName.classList.add('msg-success');
        msgLastName.innerHTML = 'Hợp lệ.';
        isValidateLastName = true;
    }
    //Kiem tra password
    var pwdPassword = document.forms['register-form']['password'];
    var msgPassword = document.querySelector("[class*='msgPassword']");
    if (pwdPassword.value == null || pwdPassword.value.length == 0) {
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Không được để trống mục này!';
        isValidatePassword = false;
    } else if (pwdPassword.value.length < 5) {
        msgPassword.classList.add('msg-err');
        msgPassword.classList.remove('msg-success');
        msgPassword.innerHTML = 'Mật khẩu phải dài hơn 5 kí tự';
        isValidatePassword = false;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = 'Hợp lệ.';
        isValidatePassword = true;
    }
    //Kiem tra confirmPassword
    var pwdConfirmPassword = document.forms['register-form']['confirmPassword'];
    var msgConfirmPassword = document.querySelector("[class*='msgConfirmPassword']");
    if (pwdConfirmPassword.value == null || pwdConfirmPassword.value.length == 0 || pwdConfirmPassword.value != pwdPassword.value) {
        msgConfirmPassword.classList.remove('msg-success');
        msgConfirmPassword.classList.add('msg-error');
        msgConfirmPassword.innerHTML = 'Xác nhận mật khẩu không đúng!';
        isValidateConfirmPassword = false;
    } else {
        msgConfirmPassword.classList.remove('msg-error');
        msgConfirmPassword.classList.add('msg-success');
        msgConfirmPassword.innerHTML = 'Hợp lệ.';
        isValidateConfirmPassword = true;
    }
    //Kiem tra address
    var txtAddress = document.forms['register-form']['address'];
    var msgAddress = document.querySelector("[class*='msgAddress']");
    if (txtAddress.value == null || txtAddress.value.length == 0) {
        msgAddress.classList.remove('msg-success');
        msgAddress.classList.add('msg-error');
        msgAddress.innerHTML = 'Không được để trống mục này!';
        isValidateAddress = false;
    } else {
        msgAddress.classList.remove('msg-error');
        msgAddress.classList.add('msg-success');
        msgAddress.innerHTML = 'Hợp lệ.';
        isValidateAddress = true;
    }

    //Kiem tra phone
    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = document.querySelector("[class*='msgPhone']");
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Không được để trống mục này!';
        isValidatePhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Hợp lệ.';
        isValidatePhone = true;
    }
    //Kiem tra avatar
    var txtAvatar = document.forms['register-form']['avatar'];
    var msgAvatar = document.querySelector("[class*='msgAvatar']");
    if (txtAvatar.value == null || txtAvatar.value.length == 0) {
        msgAvatar.classList.remove('msg-success');
        msgAvatar.classList.add('msg-error');
        msgAvatar.innerHTML = 'Không được để trống mục này!';
        isValidateAvatar = false;
    } else {
        msgAvatar.classList.remove('msg-error');
        msgAvatar.classList.add('msg-success');
        msgAvatar.innerHTML = 'Hợp lệ.';
        isValidateAvatar = true;
    }
    //Kiem tra email
    var txtEmail = document.forms['register-form']['email'];
    var msgEmail = document.querySelector("[class*='msgEmail']");
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Không được để trống mục này!';
        isValidateEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Hợp lệ.';
        isValidateEmail = true;
    }
    //kiem tra isvalidate
    isValidate = isValidateFirstName && isValidateLastName && isValidatePassword && isValidateConfirmPassword && isValidateAddress && isValidatePhone && isValidateAvatar && isValidateEmail;
    return isValidate;
}

//ham dang ky
function doRegister() {
    var firstName = document.forms['register-form']['firstName'].value;
    var lastName = document.forms['register-form']['lastName'].value;
    var password = document.forms['register-form']['password'].value;
    var address = document.forms['register-form']['address'].value;
    var phone = document.forms['register-form']['phone'].value;
    var avatar = document.forms['register-form']['avatar'].value;
    var gender = document.forms['register-form']['gender'].value;
    var email = document.forms['register-form']['email'].value;
    var birthday = document.forms['register-form']['birthday'].value;
    var introduction = document.forms['register-form']['introduction'].value;
    var registerInformation = {
        firstName: firstName,
        lastName: lastName,
        password: password,
        address: address,
        phone: phone,
        avatar: avatar,
        gender: gender,
        email: email,
        birthday: '1993-06-06',
        introduction: introduction,
    };
    var sendData = JSON.stringify(registerInformation);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status == 201 && xhr.readyState == 4) {
            alert('Đăng ký tài khoản thành công!');
            location.href = '../../login/page/login.html';
        } else if (xhr.readyState == 4) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Đăng ký thất bại, Thử lại!' + responseData.error);
        }
    };
    xhr.open('POST', API, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}