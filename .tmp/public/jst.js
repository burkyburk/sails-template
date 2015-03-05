this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/assignment.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="assignmentCtrl">\n\t<header>\n\t\t<h2> Assignments</h2>\n\t</header>\n\t<form ng-submit="assignmentSubmit(assignment)">\n\t\t<div>\n\t\t\t<input ng-model="assignment.name" type="text" placeholder="Please enter the name of the assignment">\n\t\t</div>\n\t\t<div>\n\t\t\t<input ng-model="assignment.dueAt" type="datetime-local" placeholder="Date Assignment is Due">\n\t\t</div>\n\t\t<div>\n\t\t\t<input ng-model="assignment.url" type="text" placeholder="URL of Assignment">\n\t\t</div>\n\t\t<div>\n\t\t\t<button> Sign Up </button>\n\t\t</div>\n\t</form>\n\t<span ng-show="emailErrorMsg"> That is not a valid email </span>\n\t<span ng-show="passwordErrorMsg"> That is not a valid password </span>\n\t<div>\n\t\t<a ui-sref="login"> Back to the Log In Page! </a>\n\t</div>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/dashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section ng-controller="dashboardCtrl">\n\t<h1> Dashboard </h1>\n\t<h2> <a ui-sref="assignment"> Create New Assignment </a> </h2>\n</section>\n';

}
return __p
};

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
__p += '<section class="user-form">\n\t<h2>Log in</h2>\n\t<form class="form" ng-submit="login(credentials)">\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<button type="submit">Log in</button>\n\t</form>\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n\t<h2>Register</h2>\n\t<form class="form" ng-submit="register(credentials)" novalidate>\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<button type="submit">Sign Up</button>\n\t</form>\n</section>\n';

}
return __p
};