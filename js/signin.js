// 六角學院 - 練習用的 API 網址：https://github.com/hexschool/nodejs_ajax_tutorial

$(document).ready(function () {
    $("#signin").click(function () {
        $("#signin").attr("class", "nav-link active")
        $("#signup").attr("class", "nav-link")
        $(".signin-div").show();
        $(".signup-div").hide()
    });

    $("#signup").click(function () {
        $("#signin").attr("class", "nav-link")
        $("#signup").attr("class", "nav-link active")
        $(".signin-div").hide();
        $(".signup-div").show()
    });
});

const signupAcc = document.querySelector('.signupAccount')
const signupPass = document.querySelector('.signupPassword')
const signupRegi = document.querySelector('.signupRegister')
// console.log(signupAcc, signupPass, signupRegi)

const signinAcc = document.querySelector('.signinAccount')
const signinPass = document.querySelector('.signinPassword')
const signinSend = document.querySelector('.signinSend')
// console.log(signinAcc, signinPass, signinSend)

signupRegi.addEventListener('click', function (e) {
    callSignUp()
})
signinSend.addEventListener('click', function (e) {
    callSignIn()
})

function callSignUp() {
    if (signupAcc.value == '' || signupPass.value == '') {
        alert("輸入有誤，請填寫正確資訊")
        return
    }

    let objUp = {}
    objUp.email = signupAcc.value
    objUp.password = signupPass.value
    console.log(objUp);

    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', objUp)
        .then(function (response) {
            // console.log(response.data.message);
            if (response.data.message == "帳號註冊成功") {
                alert("註冊成功！")
            } else if (response.data.message == "此帳號已被使用") {
                alert("註冊失敗！此帳號已有人使用！");
            } else {
                alert("Email 格式不正確")
            }
            signupAcc.value = ''
            signupPass.value = ''
        })
        .catch(function (error) {
            console.log(error);
        })
}

function callSignIn() {
    if (signinAcc.value == '' || signinPass.value == '') {
        alert("請輸入帳號與密碼")
        return
    }

    let objIn = {}
    objIn.email = signinAcc.value
    objIn.password = signinPass.value
    console.log(objIn);

    axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', objIn)
        .then(function (response) {
            // console.log(response.data.message);
            if (response.data.message == "登入成功") {
                alert("登入成功！")
            } else if (response.data.message == "此帳號不存在或帳號密碼錯誤") {
                alert("登入失敗！帳號不存在或帳號密碼錯誤！");
            } else {
                alert("Email 格式不正確")
            }
            signinAcc.value = ''
            signinPass.value = ''
        })
        .catch(function (error) {
            console.log(error);
        })
}