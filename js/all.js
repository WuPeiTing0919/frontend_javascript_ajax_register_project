const signUp = document.querySelector('.signUp');
const signIn = document.querySelector('.signIn');

const signUpbtn = document.querySelector('.signUp ul li');
const signInbtn = document.querySelector('.signIn ul li');

const signUp_passwordItem = document.querySelector('.signUp .password_Item i');
const signIn_passwordItem = document.querySelector('.signIn .password_Item i');

const signInEmail = document.querySelector('.signIn input[type="email"]');
const signInPassword = document.querySelector('.signIn input[type="password"]');
const signInSend = document.querySelector('.signIn input[type="submit"]'); 
const signUpEmail = document.querySelector('.signUp input[type="email"]');
const signUpPassword = document.querySelector('.signUp input[type="password"]');
const signUpSend = document.querySelector('.signUp input[type="submit"]'); 

// 登入翻頁動畫
signInbtn.addEventListener("click",function(){
  signIn.classList.add('postflop');
  signUp.classList.add('Preflop');
});

// 註冊翻頁動畫
signUpbtn.addEventListener("click",function(){
  signIn.classList.remove('postflop');
  signUp.classList.remove('Preflop');
});

// 密碼顯示的函式
function signInUp_passwordFunction(passwordItem,passwordInput){
  if(passwordItem.getAttribute("class") == 'fa-solid fa-eye'){
    passwordItem.setAttribute("class","fa-solid fa-eye-slash");
    passwordInput.setAttribute("type","password");
  }else{
    passwordItem.setAttribute("class","fa-solid fa-eye");
    passwordInput.setAttribute("type","text");
  }
}

// 註冊、登入共通內容函式
function signInUp_function(url,emailItem,passwordItem){
  let obj = {
    email : '',
    password : ''
  };

  // 傳送註冊資料 : email、password
  obj.email = emailItem.value.trim();
  obj.password = passwordItem.value.trim();

  // 註冊資料 ajax
  if(obj.email =="" || obj.password == ""){
    alert("請輸入正確資料，謝謝。");
    return;
  }else{
    axios.post(url, obj)
    .then(function (response) {
      alert(response.data.message);

      emailItem.value ="";
      passwordItem.value ="";
    })
    .catch(function (error) {
      alert(error.response.data.message);
    });
  }
}

// 註冊事件
signUpSend.addEventListener("click",function(e){
  // 清除 submit 預設事件
  e.preventDefault();

  signInUp_function('https://escape-room.hexschool.io/api/user/signup',signUpEmail,signUpPassword);
});

// 登入事件
signInSend.addEventListener("click",function(e){
  // 清除 submit 預設事件
  e.preventDefault();
  
  signInUp_function('https://escape-room.hexschool.io/api/user/signin',signInEmail,signInPassword);
});

// 註冊的密碼顯示事件
signUp_passwordItem.addEventListener("click",function(e){
  signInUp_passwordFunction(signUp_passwordItem,signUpPassword);
});

// 登入的密碼顯示事件
signIn_passwordItem.addEventListener("click",function(e){
  signInUp_passwordFunction(signIn_passwordItem,signInPassword);
});

