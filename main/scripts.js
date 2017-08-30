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
            templateUrl: "news.html",
            controller: "news"
        })
        .when("/services", {
            templateUrl: "services.html"
        })
        .otherwise({
            templateUrl: "home.html"
        });
});
app.controller('news', function($scope) {
    $scope.index = 0;
    $scope.posts = [
      {title: "Is Your Data Ready?", date: "05/25/2017", post_id: 0,
          link: "https://www.linkedin.com/pulse/your-data-ready-anthea-stratigos?trk=v-feed&lipi=urn:li:page:d_flagship3_profile_view_base_recent_activity_details_all;UASEq0lDL1iAuDpVmHVakw%3D%3D",
          text: "I had the pleasure of sitting down recently with Harry Blount, CEO of DISCERN. They have built what Google does for images but for data."
      },
      {title: "Press release", date: "06/14/2017", post_id: 1, 
          link: "http://www.battlefin.com/press-release-discern",
          text: "'DISCERN’s platform automates non-alpha generating activities such as data management, visualization and sharing while simultaneously augmenting and enhancing alpha-generating activities in a repeatable, scalable, machine-learning framework” said Harry Blount, CEO of DISCERN. 'Our partnership with Battlefin enables their hedge fund customers to achieve more insights, more often and better returns"
      },
      {title:"How DISCERN was founded", date: "07/09/1998", post_id: 2,
          link: "http://www.discern.com/news/2016/5/4/transformed-by-911-wisconsin-native-started-investment-analytics-firm",
          text: "'One of the things about 9/11 that transformed me is I realized if people had better access to information, they could make better decisions in general,' \
          said Blount, who left New York several years later and is now running a start-up company in San Francisco."
          
          
      },
      {title:"DISCERN Raises $20 Million", date: "01/01/2018", post_id: 3,
          link: "https://blogs.wsj.com/venturecapital/2015/09/08/discern-secures-20-million-to-find-signals-for-investors-in-a-field-of-noise/",
          text: "Discern Group Inc., a San Francisco-based startup that specializes in finding what it calls 'weak signals' that could affect financial markets, used public data to determine that a well drilled by an Oklahoma-based energy company one day last November performed better than 95% of the company's wells in the region, was an outlier and therefore deserved a closer look."
          
      },
      {title:"SNL Financial Joins DISCERN’s Signaling Platform", date: "02/02/2000", post_id: 4,
          link: "http://www.discern.com/news/2015/4/6/snl-financial-joins-discerns-signaling-platform",
          text: "'Customers desire to spend more time on analysis and less time on mundane activities such as data aggregation, organization and presentation” says DISCERN CEO Harry Blount.  'With the addition of SNL, we can now provide real estate investors with all of the supply, demand, inventory valuation data they need, in one-location, to create and sustain a competitive information advantage.'"
      },
      {title:"Former Wall Street Execs Shake-Up Real Estate Investment Analysis", date: "03/01/2019", post_id: 5,
          link: "https://cre.tech/former-wall-street-execs-shake-up-real-estate-investment-analysis/",
          text: "In 2008, The National Academy of Sciences Committee for Forecasting Future Disruptive Technologies invited Wall Streeter Harry Blount to help conduct a research study. Their thesis was that better foresight using data, tech and processes could help reduce the frequency and magnitude of events like 9/11."
          
      },
      {title:"Dummy title 1 ", date: "03/01/2019", post_id: 6,
          link: "https://www.google.com/",
          text: "Tbh heirloom wayfarers everyday carry distillery, shoreditch pickled glossier bespoke occupy. 3 wolf moon edison bulb portland, green juice cred raw denim adaptogen tattooed. Yuccie chillwave cardigan tattooed poke waistcoat affogato cred cloud bread trust fund pok pok semiotics typewriter literally brunch. Leggings celiac hashtag, freegan bicycle rights iPhone occupy farm-to-table copper mug tbh church-key cred. Tacos lo-fi YOLO poke. Chicharrones 90's lumbersexual, mlkshk small batch adaptogen franzen ennui four dollar toast kogi. Gentrify craft beer bitters, slow-carb cronut cred farm-to-table intelligentsia. Ramps raclette pok pok bespoke leggings tilde you probably haven't heard of them franzen lo-fi. Williamsburg jean shorts air plant, green juice YOLO knausgaard try-hard four loko helvetica brunch food truck gluten-free hell of truffaut."
          
      },
      {title:"Dummy title 2", date: "03/01/2019", post_id: 7,
          link: "https://www.youtube.com/",
          text: "Hella church-key listicle heirloom squid. Humblebrag woke biodiesel la croix post-ironic truffaut. Echo park thundercats pickled YOLO fingerstache. Food truck bespoke before they sold out, cornhole plaid semiotics four dollar toast irony snackwave squid tousled. 90's farm-to-table cray beard meggings cloud bread yr sriracha readymade. "
          
      }
    ]
    $scope.change_post = function (index) {
        $scope.index = index
        $scope.current_story = $scope.posts[$scope.index]
        console.log($scope.current_story);
    };    
    $scope.current_story = $scope.posts[$scope.index]
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
