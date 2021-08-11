// load khung web
function containerComponent(){
    let str = '<div class="container">\n' +
        '  <div class="row" id="avatar">\n' +
        '  </div>\n' +
        '  <div class="row">\n' +
        '  <div class="col-3" id="information"></div>\n' +
        '  <div class="col-9">' +
        '  <div class="row">'+
        // '   <div class="col-1"><button style="width: 100%" class="btn btn-outline-primary" onclick="showListFriend()"><p style="color: aqua">Friend</p></button></div>' +
        // '   <div class="col-1"><button style="width: 100%" class="btn btn-outline-primary" onclick="showListFriend()"><p style="color: aqua"></p>Message</button></div>' +
        '   <div class="col-1"><button class="btn btn-outline-warning" style="color: darkgreen" onclick="findPostByAccountId()">Post</button></div>' +
        '   <div class="col-1"><button class="btn btn-outline-warning" style="color: darkgreen" onclick="showListFriend()">Friend</button></div>' +
        '   <div class="col-1"><button class="btn btn-outline-warning" style="color: darkgreen">Message</button></div>' +
        '   <div class="col-7"><input type="text" placeholder="Bạn đang nghĩa gì" style="width: 100%"></div>' +
        '   <div class="col-1"><button onclick="logout(), window.location.href='+"'login.html'"+' " class="btn btn-outline-warning" style="color: darkgreen">Logout</button></div>' +
        '</div>'+
        '  <div class="row" id="post&friend"></div>'+
        '   </div>\n' +
        '  </div>\n' +
        '</div>'
    document.getElementById("content").innerHTML = str;
}

// show list friend
function showListFriend(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/relationships/"+localStorage.getItem("id"),
        success: function (list){
            // let friend = [];
            // for (let i = 0; i < list.length; i++) {
            //     friend.push(list[i].id);
            // }
            // localStorage.setItem()
            let str = '';
            for (let i = 0; i < list.length; i++) {
                str+= '<div class="col-xl-3 col-sm-6 mb-5">\n' +
                    '        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">\n' +
                    '          <h5 class="mb-0">'+ list[i].fullName+'</h5>\n' +
                    '          <ul class="social mb-0 list-inline mt-3">\n' +
                    '            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>\n' +
                    '            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>\n' +
                    '            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>\n' +
                    '          </ul>\n' +
                    '        </div>\n' +
                    '      </div>'
            }
            document.getElementById("post&friend").innerHTML = str;

        }
    })
}

// show information
function showInformation(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/users/"+ localStorage.getItem("id"),
        success: function (user) {
            // console.log(user)
            let str = '<div class="card" style="width: 18rem;">\n' +
                '  <ul class="list-group list-group-flush">\n' +
                '    <li class="list-group-item"><div>Address: '+ user.address +'</div></li>\n' +
                '    <li class="list-group-item"><div>Date Of Birth: '+ user.dateOfBirth +'</div></li>\n' +
                '    <li class="list-group-item"><div>Phone: '+ user.phoneNumber +'</div></li>\n' +
                '    <li class="list-group-item"><div>Description: '+ user.description +'</div></li>\n' +
                '  </ul>\n' +
                // test modal
                // '   <div class="col-6"><button style="width: 200%" class="btn btn-outline-warning"><p style="color: coral">Update</p></button></div>' +
                '   <div class="col-6"><div>\n' +
                '  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="updateUserToModal()">\n' +
                '  Update\n' +
                '  </button>\n' +
                '</div></div>' +
                '</div>';
            document.getElementById("information").innerHTML = str;
        }

    })
}

// show avatar
function showAvatar() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: "http://localhost:8080/users/"+ localStorage.getItem("id"),
        success: function (per) {
            // console.log(per)
            let str = '<div class="row">\n' +
            '            <div class="card">\n' +
            '                <div class="card-body">\n' +
            '                    <div class="d-flex flex-column align-items-center text-center">\n' +
            '                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">\n' +
            '                        <div class="mt-3">\n' +
            '                            <h4>'+ per.fullName+'</h4>\n' +
            // '                            <p class="text-secondary mb-1">Full Stack Developer</p>\n' +
            '<!--                            <button class="btn btn-primary">Follow</button>-->\n' +
            '\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n';

            document.getElementById("avatar").innerHTML = str;

        }
    })
}

// Đăng xuất
function logout(){
    window.localStorage.removeItem("token");
}

// tìm bài viết theo id người đăng
function findPostByAccountId(){
    $.ajax({
        type: "get",
        url: "http://localhost:8080/posts/user/"+ localStorage.getItem("id"),
        success: function (post) {
            console.log(post)
            let str = '';
            for (let i = 0; i < post.length; i++) {
                str += '<div class="row">'+post[i].user.fullName+'</div>'+
                    '<div class="row" style="margin-top: 20px">'+
                    '<div class="card" style="width: 50rem;">\n' +
                    '  <div class="card-body">\n' +
                    '    <p class="card-text">' + post[i].status + '</p>\n' +
                    '    <p class="card-text">' + post[i].content + '</p>\n' +
                    '  </div>\n' +
                    '  <img src="https://studynet.vn/wp-content/uploads/2019/11/black-friday-la-ngay-gi.jpg" class="card-img-top" alt="...">\n' +
                    '</div>'+ '</div>'
            }
            document.getElementById("post&friend").innerHTML = str;
        }
    })
}


function updateUserToModal(){
    $('#updateUser').modal('hide');

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type:"get",
        url: "http://localhost:8080/users/"+localStorage.getItem("id"),
        success: function (user){
            // console.log(user)

            let userModal = '<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">\n' +
                '  <div class="modal-dialog">\n' +
                '    <div class="modal-content">\n' +
                '      <div class="modal-header">\n' +
                '        <h5 class="modal-title" id="staticBackdropLabel">Update Information</h5>\n' +
                '        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Full Name</h6>\n' +
                '        <div><input type="text" style="width: 100%'+ user.fullName+'"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Date Of Birth</h6>\n' +
                '        <div><input type="text" style="width: 100%"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Phone</h6>\n' +
                '        <div><input type="text" style="width: 100%"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Gender</h6>\n' +
                '        <div><input type="text" style="width: 100%"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Address</h6>\n' +
                '        <div><input type="text" style="width: 100%"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Avatar</h6>\n' +
                '        <div><input type="text" style="width: 100%"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Background</h6>\n' +
                '        <div><input type="text" style="width: 100%"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-body">\n' +
                '        <h6>Description</h6>\n' +
                '        <div><input type="text" style="width: 100%"></div>\n' +
                '      </div>\n' +
                '      <div class="modal-footer">\n' +
                '        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n' +
                '        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>';

            document.getElementById("modal").innerHTML=userModal;
        }
    })
}

function updateInformation(){

    let fullName = document.getElementById("fullName").value;
    console.log(fullName)
    // let dateOfBirth = document.getElementById("modalDateOfBirth").value;
    // let gender = document.getElementById("modalGender").value;
    // let phoneNumber = document.getElementById("modalPhone").value;
    // let avatar = document.getElementById("modalAvatar").value;
    // let backGround = document.getElementById("modalBackGround").value;
    // let address = document.getElementById("modalAddress").value;
    // let description = document.getElementById("modalDescription").value;
    let user = {
        fullName: fullName,
        dateOfBirth: document.getElementById("date").value,
        gender: document.getElementById("gender").value,
        avatar: document.getElementById("avatar").value,
        background: document.getElementById("background").value,
        address: document.getElementById("address").value,
        description: document.getElementById("description").value,
        phoneNumber: document.getElementById("phone").value
    };
    // console.log(user)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "put",
        data: JSON.stringify(user),
        url: "http://localhost:8080/users/update/"+localStorage.getItem("id"),
        success: function (){
            alert("đsung rồi")
            getLayout()
        }
    })
}

