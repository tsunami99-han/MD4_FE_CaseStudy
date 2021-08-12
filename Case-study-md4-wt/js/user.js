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
            alert("ok")
        },
        error: function () {
            alert("error")
        },

    });

    // event.preventDefault();
}

function login(){
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
            success: function (data){
                console.log(data)
                localStorage.setItem("token", data.accessToken)
                localStorage.setItem("id", data.id)
                window.location.href='test.html'
            },
         error:function () {
             alert("TêN tài khoản hoặc mật khẩu không đúng")
         }
        })
    }

function check() {
    let account = document.getElementById('account').value;
    let password = $('#password').val();
    let fullName = $('#fullName').val();
    let date = $('#dataOfBirth').val();
    let gender = $('#gender').val();
    let address = $('#address').val();
    let phone = $('#phoneNumber').val();
    console.log(gender)
    if (account === "") {
        document.getElementById('messageName').innerHTML = `<p> Name Account Không Được Để Trống </p>`
    } else if (password === "") {
        document.getElementById('messagePassword').innerHTML = `<p> Password Không Được Để Trống </p>`
    }
    if (fullName === "") {
        document.getElementById('messageFullName').innerHTML = `<p> Full Name Không Được Để Trống </p>`
    }
    if (date === "") {

        document.getElementById('messageDate').innerHTML = `<p> Date Không Được Để Trống </p>`
    }
    if (gender === "") {
        document.getElementById('messageGenders').innerHTML = `<p> Gender Không Được Để Trống </p>`
    }
    if (address === "") {
        document.getElementById('messageAddress').innerHTML = `<p> Address Không Được Để Trống </p>`
    }
    if (phone === "") {
        document.getElementById('messagePhoneNumber').innerHTML = `<p> Phone Number Không Được Để Trống </p>`
    }
    if (account !== "" && password !== "" && fullName !== "" && date !== "" && gender !== "" && address !== "" && phone !== "") {
        console.log("vao");

        $('#sigup').prop('disabled', false);
    }

}
function createPost() {
    let content = document.getElementById('content').value;
    let image = $('#uploadFile')[0].files[0];
    let status = document.getElementById('status').value;
    let data = new FormData();
    data.append("content", content)
    data.append("status", status)
    data.append("image", image)
    data.append("userId", '8')
    console.log(data)
    $.ajax({
        type:"POST",
        enctype:'multipart/form-data',
        url:"http://localhost:8080/relationshipss/create-post",
        data:data,
        processData: false,
        contentType: false,
        cache: false,
        success:function (){
            alert("ok")
        },
        error(){
           alert("lỗi")
        }
    })

}
