



function login(){
var number = document.getElementById("phoneNo").value;
var data = JSON.parse(localStorage.getItem("user"));

if(number==""){
alert("Please Enter your contact number")
} 
else if(number.split("").length !== 10){
alert('Please enter valid Phone number');
return
}

else{

alert("Login Successfully")
let loginStatus="true"
window.location.href='home.html'
}

}

function openLogin() {

var div = document.getElementById("loginCon");
div.style.visibility = "visible";
}
function closeLogin() {
var div = document.getElementById("loginCon");
var login = document.getElementById("kLogin");
var content = `
<div class="kCross">
<button onclick="closeLogin()">
╳
</button>
</div>
<img
src="https://static.cure.fit/assets/images/curefit_login_logo.svg"
alt="logo"
/>
<img
src="https://static.cure.fit/assets/images/curefit-name.svg"
alt="name"
/>

<input type="phone" placeholder="Enter your phone number" />
<button class="login__continueBtn">Continue</button>
<li>
By Continuing you agree to the
<em style="color: red">Terms of Services</em> and
<em style="color: red">Privacy policy</em>.
</li>

<button class="login__google" onclick="changelayout()">
Continue with <i class="fa fa-google" aria-hidden="true"></i>
<i class="fa fa-facebook" aria-hidden="true"></i>
<i class="fa fa-envelope-o" aria-hidden="true"></i>
</button>
`;


login.innerHTML = content;
div.style.visibility = "hidden";
}
function changelayout() {
var div = document.getElementById("kLogin");
var content = `
<div class="kCross">
<button onclick="closeLogin()">
╳
</button>
</div>
<img
src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/u83vfrv2qdgpuuifrwct"
alt="logo"
/>
<img
src="https://static.cure.fit/assets/images/curefit-name.svg"
alt="name"
/>

<button  class=" google login__options" style="margin: 10px auto" >
<img
  src="https://static.cure.fit/assets/images/google-new.svg"
  alt="google"
/>
<h4 style="color: white">Sign in with Google</h4>
</button>
<button class="facebook login__options" style="margin: 10px auto">
<img
  src="https://static.cure.fit/assets/images/facebook-new.svg"
  alt="facebook"
/>
<h4 style=" color: white">Sign in with Facebook</h4>
</button>
<button class="login__options" style="color: black ; margin: 10px auto" >
<img
  src="https://static.cure.fit/assets/images/mail-new.svg"
  alt="email"
/>
<h4>Sign in with email</h4>
</button>

`;


div.innerHTML = content;
}
