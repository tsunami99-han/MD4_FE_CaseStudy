function addNewUser() {
    let name = $('#account').val();
    let password = $('#password').val();
    let fullName = $('#fullName').val();
    let date = $('#dataOfBirth').val();
    let gender = $('#gender').val();
    let address = $('#address').val();
    let phone = $('#phoneNumber').val();
    if (name, password, fullName, address != "") {
        document.getElementById('sigup').disabled = false;
    }
    if (name == "") {
        document.getElementById('messageName').innerHTML = `<p>acv</p>`
    }
    let newUser = {
        name: name,
        password: password,
        fullName: fullName,
        date: date,
        address: address,
        gender: gender,
        roles: {
            id: 2
        },
        phone: phone
    };
    $.ajax({
        //chuyển dữ liệu vè json
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newUser),
        url: "/users",
        // success: successHandler

    });
    // event.preventDefault();
}

function check() {
    let account = document.getElementById('account').value;
    let password = $('#password').val();
    let fullName = $('#fullName').val();
    let date = $('#dataOfBirth').val();
    let gender = $('#gender').val();
    let address = $('#address').val();
    let phone = $('#phoneNumber').val();
    if (account == "") {
        document.getElementById('messageName').innerHTML = ` Vui lòng nhập tên tài khoản !`
    }
    if (password == "") {
        document.getElementById('messagePassword').innerHTML = `Vui lòng nhập mật khẩu !`
    }
    if (fullName == "") {
        document.getElementById('messageFullName').innerHTML = `Nhập đầy đủ họ tên !`
    }
    if (date == "") {
        document.getElementById('messageDate').innerHTML = `Vui lòng nhập ngày sinh !`
    }
    if (address == "") {
        document.getElementById('messageAddress').innerHTML = ` Vui lòng nhập địa chỉ !`
    }
    if (phone == "") {
        document.getElementById('messagePhoneNumber').innerHTML = `Vui lòng nhập số điện thoại !`
    }
    if (account !== "" && password !== "" && fullName !== "" && date !== "" && gender !== "" && address !== "" && phone !== "") {
        alert("Tài khoản hợp lệ!")
    }
}
;

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        username: username,
        password: password
    }
    console.log(user)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(user),
        url: 'http://localhost:8080/users/login',
        success: function (data) {
            console.log(data)
            localStorage.setItem("token", data.accessToken)
            localStorage.setItem("id", data.id)
            window.location.href = 'personalPage.html'
        },
        error: function () {
            alert("TêN tài khoản hoặc mật khẩu không đúng")
        }
    });
};

