function getLayout(){
    let layout = '<div class="container">\n' +
        '    <div class="row">\n' +
        '       <div class="col-2"><a href="personalPage.html">Back to HomePage</a></div>'+
        '       <div class="col-2"><button class="btn btn-sm btn-outline-success" onclick="showListUser()">User Management</button></div>'+
        '       <div class="col-2"><button class="btn btn-sm btn-outline-success" onclick="showPost()">Post Management</button></div>'+
        '    </div>\n' +
        '    <div class="row" id="content">\n' +
        '    </div>\n' +
        '</div>'
    document.getElementById("contentAdmin").innerHTML = layout;

}

function showListUser(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/users",
        success: function (list){
            console.log(list)
            let str = '    <h4>User Management</h4> '+
                '<table class="table table-hover table-striped">\n' +
                '    <tr style="background-color: #4d9a4f; color: white">\n' +
                '        <th>User Name</th>\n' +
                '        <th>Password</th>\n' +
                '        <th>Full Name</th>\n' +
                '        <th>Role</th>\n' +
                '        <th>Status</th>\n' +
                '        <th>Xóa</th>\n' +
                '        <th>UpRole</th>\n' +
                '        <th>Block</th>\n' +
                '    </tr>'
            for (let i = 0; i < list.length; i++) {
                str += '<tr>\n' +
                    '        <td>'+list[i].username+'</td>\n' +
                    '        <td>'+list[i].password+'</td>\n' +
                    '        <td>'+list[i].fullName+'</td>\n' +
                    '        <td>'+list[i].roleSet[0].name+'</td>\n' +
                    '        <td>'+list[i].status+'</td>\n' +
                    '        <td><button class="btn btn-sm btn-outline-danger" >Delete</button></td>\n' +
                    '        <td><button class="btn btn-sm btn-outline-success" onclick="upRole('+list[i].id+')">UpRole</button></td>\n' +
                    '        <td><button class="btn btn-sm btn-outline-secondary" onclick="changeStatus('+list[i].id+')">Block</button></td>\n' +
                    '    </tr>'
            }
            str += '</table>';
            document.getElementById("content").innerHTML = str;
        }
    })
}
function showPost(){
    $.ajax({
        type: "get",
        url: "http://localhost:8080/posts",
        success: function (listPost){
            // console.log(listPost)
            let str = '    <h4>Post Management</h4> '+
                '<table class="table table-hover">\n' +
                '    <tr>\n' +
                '        <th>User Name</th>\n' +
                '        <th>Content</th>\n' +
                '        <th>Status</th>\n' +
                '        <th>Time</th>\n' +
                '        <th>Xóa</th>\n' +
                '    </tr>'
            for (let i = 0; i < listPost.length; i++) {
                str += '<tr>\n' +
                    '        <td>'+listPost[i].user.username+'</td>\n' +
                    '        <td>'+listPost[i].content+'</td>\n' +
                    '        <td>'+listPost[i].status+'</td>\n' +
                    '        <td>'+listPost[i].time+'</td>\n' +
                    '        <td><button class="btn btn-sm btn-outline-danger" onclick="deletePost('+listPost[i].id+')">Delete</button></td>\n' +
                    '    </tr>'
            }
            str += '</table>';
            document.getElementById("content").innerHTML = str;
        }
    })
}
function deletePost(id){
    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type:"delete",
        url: "http://localhost:8080/posts/"+id,
        success: function (){
            alert("xóa rồi nehs")
            showPost()
        }
    })
}
function upRole(id){
    $.ajax({
        type:"get",
        url: "http://localhost:8080/users/"+id,
        success: function (user){
            console.log(user)
            console.log(user.roleSet[0].id)
            if (user.roleSet[0].id==2){
                user.roleSet[0].id = 1;
                user.roleSet[0].name = "ROLE_ADMIN";
                console.log(user)
                $.ajax({
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "put",
                    data: JSON.stringify(user),
                    url: "http://localhost:8080/users/update/"+id,
                    success: function (){
                        getLayoutAdmin()
                    }
                })
            }else {
                user.roleSet[0].id = 2;
                user.roleSet[0].name = "ROLE_USER";
                console.log(user)
                $.ajax({
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "put",
                    data: JSON.stringify(user),
                    url: "http://localhost:8080/users/update/"+id,
                    success: function (){
                        getLayoutAdmin()
                    }
                })

            }
        }
    })
}

//block account
function changeStatus(id){
    $.ajax({
        type:"get",
        url: "http://localhost:8080/users/"+id,
        success: function (user){
            console.log(user)
            console.log(user.roleSet[0].id)
            if (user.status==true){
                user.status = false;
                console.log(user)
                $.ajax({
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "put",
                    data: JSON.stringify(user),
                    url: "http://localhost:8080/users/update/"+id,
                    success: function (){
                        getLayoutAdmin()
                    }
                })
            }else {
                user.status = true;
                $.ajax({
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    type: "put",
                    data: JSON.stringify(user),
                    url: "http://localhost:8080/users/update/"+id,
                    success: function (){
                        getLayoutAdmin()
                    }
                })
            }
        }
    })
}

