function addNewUser() {
    let name = $('#account').val();
    let password = $('#password').val();
    let fullName = $('#fullName').val();
    let date = $('#dataOfBirth').val();
    let gender = $('#gender').val();
    let address = $('#address').val();
    let phone = $('#phoneNumber').val();
    if (name,password,fullName,address != ""){
        document.getElementById('sigup').disabled = false;
    }
    if (name == ""){
        document.getElementById('messageName').innerHTML= `<p>acv</p>`
    }
    let newUser = {
        name: name,
        password: password,
        fullName: fullName,
        date: date,
        address :address,
        gender: gender,
        roles: {
            id : 2
        },
        phone:phone
    };
    $.ajax({
        //chuyển dữ liệu vè json
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newUser),
        url: "/users",
        // success: successHandler

    });
    // event.preventDefault();
}
function check(){
    let account = document.getElementById('account').value;
    let password = $('#password').val();
    let fullName = $('#fullName').val();
    let date = $('#dataOfBirth').val();
    let gender = $('#gender').val();
    let address = $('#address').val();
    let phone = $('#phoneNumber').val();
    if (account == ""){
        document.getElementById('messageName').innerHTML = `<p> Name Account Không Được Để Trống </p>`}
    if (password == ""){
        document.getElementById('messagePassword').innerHTML = `<p> Password Không Được Để Trống </p>`}
    if (fullName == ""){
        document.getElementById('messageFullName').innerHTML = `<p> Full Name Không Được Để Trống </p>`}
    if (date == ""){
        document.getElementById('messageDate').innerHTML = `<p> Date Không Được Để Trống </p>`}
    if (gender == ""){
        document.getElementById('messageGenders').innerHTML = `<p> Gender Không Được Để Trống </p>`}
    if (address == ""){
        document.getElementById('messageAddress').innerHTML = `<p> Address Không Được Để Trống </p>`}
    if (phone == ""){
        document.getElementById('messagePhoneNumber').innerHTML = `<p> Phone Number Không Được Để Trống </p>`}
    };
