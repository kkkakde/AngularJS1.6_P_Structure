app.service('loginService', function ($http) {
    this.onSubmitLogin = function (req) {
        var result = $http({
            method: "POST",
            url: rootUrl+"/api/Service/Login",
            data: req,
            dataType: "json"
        });
        return result;
    };
});