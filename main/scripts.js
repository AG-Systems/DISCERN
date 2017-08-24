var app = angular.module("myApp", ["ngRoute"]);

/*app.value("bios", [
    //Harry
    {
        person: "Harry Blount",
        image: "images/mark-zuckerberg.jpg"
    },
    //Marc
    {
        person: "Marc Cooperstein",
        image: "images/brady.png"
    },
    //Elon
    {
        person: "Elon Musk",
        image: "images/elon.jpg"
    },
    //Bezos
    {
        person: "Jeff Bezos",
        image: "images/bezos.jpg"
    }
]);*/

app.config(function ($routeProvider) {
    $routeProvider.when("/about", {
            templateUrl: "about.html",
            controller: "about_controller"
        })
        .when("/data", {
            templateUrl: "data.html"
        })
        .when("/demo", {
            templateUrl: "demo.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/news", {
            templateUrl: "news.html"
        })
        .when("/services", {
            templateUrl: "services.html"
        })
        .otherwise({
            templateUrl: "home.html"
        });
});

app.controller('about_controller', function ($scope) {
    $scope.current_name = "";
    $scope.bio = "";
    $scope.image = "";
    $scope.changeName = function (name) {
        $scope.current_name = name;
        console.log(name);
    };
    $scope.changebio = function (bio_info) {
        $scope.bio = bio_info;
    }
    $scope.changeImg = function (img) {
        $scope.image = img;
    }
    var modal = document.getElementById('myModal');
    //var span = document.getElementsByTagName("span");
    $(".bios").click(function () {
        modal.style.display = "block";
    });
    $("span").click(function () {
        modal.style.display = "none";
    })
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
