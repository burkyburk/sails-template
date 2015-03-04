this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2> Home Page </h2>\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="loginCtrl">\n\t<header>\n\t\t<h2> Login </h2>\n\t</header>\n\t<form ng-submit="loginSubmit(username, userpassword)">\n\t\t<input ng-change="emailChanged(username)" ng-model="username" type="text" placeholder="Enter Username">\n\t\t<input ng-change="passwordChanged(userpassword)" ng-model="userpassword" type="Password" placeholder="Password">\n\t\t<button> Log In </button>\n\t</form>\n    <span ng-show="emailErrorMsg">Email address is invalid.</span>\n\t<span ng-show="passwordErrorMsg">Password is invalid.</span>\n\t<div>\n\t\t<a ui-sref="register"> Sign Up!</a>\n\t</div>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="registerCtrl">\n\t<header>\n\t\t<h2> Registration </h2>\n\t</header>\n\t<form ng-submit="loginSubmit(username, userpassword)">\n\t\t<input ng-change="emailChanged(username)" ng-model="username" type="text" placeholder="Enter Username">\n\t\t<input ng-change="passwordChanged(userpassword)" ng-model="userpassword" type="Password" placeholder="Password">\n\t\t<button> Sign Up </button>\n\t</form>\n\t<span ng-show="emailErrorMsg">Email address is invalid.</span>\n\t<span ng-show="passwordErrorMsg">Password is invalid.</span>\n\t<div>\n\t\t<a ui-sref="login">Already Registered? Log In! </a>\n\t</div>\n</section>\n';

}
return __p
};