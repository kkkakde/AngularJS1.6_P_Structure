app.controller("login_Controller",
    function ($scope, $http, loginService, NgTableParams) {
        alert();
        // on login Submit
        $scope.onSubmitLogin = function () {
            var req =
                {
                    "LoginID": $scope.LoginID,
                    "Password": $scope.Password,
                }
            var result = loginService.onSubmitLogin(req);
            result.then(function (res) {
                if (res.status == 200) {
                    alert(JSON.stringify(res.data.message));
                }
            },
                function (res) {
                });
        }
    });