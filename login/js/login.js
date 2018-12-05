var btnSubmit = document.forms['login-form']['btn-submit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        doLogin();
    }
};

//ham kiem tra form
function validateForm() {
    //cac gia tri kiem tra ban dau
    var isValidate = false;
    var isValidateEmail = false;
    var isValidatePassword = false;
    //lay thong tin tu form
    var email = document.forms['login-form']['email'];
    var msgEmail = document.querySelector("[class*='msg-email']");
    var password = document.forms['login-form']['password'];
    var msgPassword = document.querySelector("[class*='msg-password']");
    //kiem tra email
    if (email.value == null || email.value.length == 0) {
        msgEmail.classList.add('msg-error');
        msgEmail.classList.remove('msg-success');
        msgEmail.innerHTML = 'Email không được để trống';
        isValidateEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Hợp lệ';
        isValidateEmail = true;
    }
    // kiem tra password
    if (password.value.length == 0 || password.value == null) {
        msgPassword.classList.add('msg-error');
        msgPassword.classList.remove('msg-success');
        msgPassword.innerHTML = 'Mật khẩu không được để trống';
        isValidatePassword = false;
    } else if (password.value.length < 5) {
        msgPassword.classList.add('msg-error');
        msgPassword.classList.remove('msg-success');
        msgPassword.innerHTML = 'Mật khẩu ít nhất có 5 kí tự';
        isValidatePassword = false;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = 'Hợp lệ';
        isValidatePassword = true;
    }
    isValidate = isValidatePassword && isValidateEmail;
    return isValidate;
}

// ham gui du lieu login
function doLogin() {
    var email = document.forms['login-form']['email'].value;
    var password = document.forms['login-form']['password'].value;
    var loginInformation = {
        password: password,
        email: email,
    };
    var jsonLoginInformation = JSON.stringify(loginInformation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Đăng nhập thành công với ID: ' + responseData.token);
            localStorage.setItem('token-key', responseData.token);
            location.href = '../../latest-song/page/latest-song.html';
        }
        else if (xhr.readyState == 4) {
            var responseData = JSON.parse(xhr.responseText);
            var msgEmail = document.querySelector("[class*='msg-email']");
            var msgPassword = document.querySelector("[class*='msg-password']");
            alert('Đăng nhập thất bại, Thử lại! '
                + xhr.responseText);
            if (responseData.error.email != null) {
                msgEmail.classList.add('msg-error');
                // msgEmail.innerHTML = responseData.error.email;
                msgEmail.innerHTML = 'Email không hợp lệ. Email không tồn tại hoặc đã bị xóa.';
            }
            if (responseData.error.password != null) {
                msgPassword.classList.add('msg-error');
                // msgPassword.innerHTML = responseData.error.password;
                msgPassword.innerHTML = 'Mật khẩu không hợp lệ.';
            }
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(jsonLoginInformation);
}
