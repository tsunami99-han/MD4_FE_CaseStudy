function addNewUser() {
    let name = $('#account').val();
    let password = $('#password').val();
    let fullName = $('#fullName').val();
    let date = $('#dataOfBirth').val();
    let gender = $('#gender').val();
    let address = $('#address').val();
    let phone = $('#phoneNumber').val();
    let newUser = {
        username: name,
        password: password,
        fullName: fullName,
        dateOfBirth: date,
        address: address,
        gender: gender,
        phoneNumber: phone
    };
    console.log(newUser)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'POST',
        data: JSON.stringify(newUser),
        url: 'http://localhost:8080/users/register',

        success: function (data) {
            alert("Đã đăng kí thành công")
            window.location.href = "../index.html"
        },
        error: function () {
            alert("error")
        },

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
        $('#sigup').prop('disabled', false);
    }
}
;

// function login() {
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     let user = {
//         username: username,
//         password: password
//     }
//     console.log(user)
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         type: "POST",
//         data: JSON.stringify(user),
//         url: 'http://localhost:8080/users/login',
//         success: function (data) {
//             console.log(data)
//             localStorage.setItem("token", data.accessToken)
//             localStorage.setItem("id", data.id)
//             window.location.href = 'personalPage.html'
//         },
//         error: function () {
//             alert("TêN tài khoản hoặc mật khẩu không đúng")
//         }
//     });
// };

function login(){
    let username = document.getElementById("user").value;
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
        type: "post",
        data: JSON.stringify(user),
        url: 'http://localhost:8080/users/login',
        success: function (data){
            console.log(data.roles[0].authority)
            localStorage.setItem("token", data.accessToken)
            localStorage.setItem("id", data.id)
            localStorage.setItem("user", data.username)
            if (data.roles[0].authority == "ROLE_ADMIN"){
                window.location.href = 'pageAdmin.html'
            }else
                window.location.href='personalPage.html'
        },
        error: function (){
            alert("sai tài khoản hoặc mật khẩu rồi")
        }
    })
}