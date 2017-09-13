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
        .when("/partners", {
            templateUrl: "partners.html"
        })
        .when("/overview", {
            templateUrl: "overview.html"
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
app.controller('news', function ($scope, $sce, $http) {
    $scope.index = 0;
    $scope.posts = [
        {
            title: "Is Your Data Ready?",
            date: "05/25/2017",
            post_id: 0,
            link: "https://www.linkedin.com/pulse/your-data-ready-anthea-stratigos?trk=v-feed&lipi=urn:li:page:d_flagship3_profile_view_base_recent_activity_details_all;UASEq0lDL1iAuDpVmHVakw%3D%3D",
            text: "I had the pleasure of sitting down recently with Harry Blount, CEO of DISCERN. They have built what Google does for images but for data..."
      },
        {
            title: "Press release",
            date: "06/14/2017",
            post_id: 1,
            link: "https://www.battlefin.com/press-release-discern",
            text: "'DISCERN’s platform automates non-alpha generating activities such as data management, visualization and sharing while simultaneously augmenting and enhancing alpha-generating activities in a repeatable, scalable, machine-learning framework” said Harry Blount, CEO of DISCERN. 'Our partnership with Battlefin enables their hedge fund customers to achieve more insights, more often and better returns..."
      },
        {
            title: "How DISCERN was founded",
            date: "07/09/1998",
            post_id: 2,
            link: "https://www.discern.com/news/2016/5/4/transformed-by-911-wisconsin-native-started-investment-analytics-firm",
            text: "'One of the things about 9/11 that transformed me is I realized if people had better access to information, they could make better decisions in general,' \
          said Blount, who left New York several years later and is now running a start-up company in San Francisco."

      },
        {
            title: "DISCERN Raises $20 Million",
            date: "01/01/2018",
            post_id: 3,
            link: "https://blogs.wsj.com/venturecapital/2015/09/08/discern-secures-20-million-to-find-signals-for-investors-in-a-field-of-noise/",
            text: "Discern Group Inc., a San Francisco-based startup that specializes in finding what it calls 'weak signals' that could affect financial markets, used public data to determine that a well drilled by an Oklahoma-based energy company one day last November performed better than 95% of the company's wells in the region, was an outlier and therefore deserved a closer look..."

      },
        {
            title: "SNL Financial Joins DISCERN’s Signaling Platform",
            date: "02/02/2000",
            post_id: 4,
            link: "https://www.discern.com/news/2015/4/6/snl-financial-joins-discerns-signaling-platform",
            text: "'Customers desire to spend more time on analysis and less time on mundane activities such as data aggregation, organization and presentation” says DISCERN CEO Harry Blount.  'With the addition of SNL, we can now provide real estate investors with all of the supply, demand, inventory valuation data they need, in one-location, to create and sustain a competitive information advantage...'"
      },
        {
            title: "Former Wall Street Execs Shake-Up Real Estate Investment Analysis",
            date: "03/01/2019",
            post_id: 5,
            link: "https://cre.tech/former-wall-street-execs-shake-up-real-estate-investment-analysis/",
            text: "In 2008, The National Academy of Sciences Committee for Forecasting Future Disruptive Technologies invited Wall Streeter Harry Blount to help conduct a research study. Their thesis was that better foresight using data, tech and processes could help reduce the frequency and magnitude of events like 9/11..."

      },
        {
            title: "Dummy title 1 ",
            date: "03/01/2019",
            post_id: 6,
            link: "https://www.google.com/",
            text: "Tbh heirloom wayfarers everyday carry distillery, shoreditch pickled glossier bespoke occupy. 3 wolf moon edison bulb portland, green juice cred raw denim adaptogen tattooed. Yuccie chillwave cardigan tattooed poke waistcoat affogato cred cloud bread trust fund pok pok semiotics typewriter literally brunch. Leggings celiac hashtag, freegan bicycle rights iPhone occupy farm-to-table copper mug tbh church-key cred. Tacos lo-fi YOLO poke. Chicharrones 90's lumbersexual, mlkshk small batch adaptogen franzen ennui four dollar toast kogi. Gentrify craft beer bitters, slow-carb cronut cred farm-to-table intelligentsia. Ramps raclette pok pok bespoke leggings tilde you probably haven't heard of them franzen lo-fi. Williamsburg jean shorts air plant, green juice YOLO knausgaard try-hard four loko helvetica brunch food truck gluten-free hell of truffaut..."

      },
        {
            title: "Dummy title 2",
            date: "03/01/2019",
            post_id: 7,
            link: "https://www.youtube.com/",
            text: "Hella church-key listicle heirloom squid. Humblebrag woke biodiesel la croix post-ironic truffaut. Echo park thundercats pickled YOLO fingerstache. Food truck bespoke before they sold out, cornhole plaid semiotics four dollar toast irony snackwave squid tousled. 90's farm-to-table cray beard meggings cloud bread yr sriracha readymade... "

      }
    ]
    $scope.change_post = function (index) {
        $scope.index = index
        $scope.current_story = $scope.posts[$scope.index]
        console.log($scope.current_story);
    };
    $scope.current_story = $scope.posts[$scope.index]
      $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      }
});

app.controller('about_controller', function ($scope) {
    $scope.current_name = "";
    $scope.bio = "";
    $scope.index = 0;
    $scope.bios = [
        {
            bio_id: 0,
            bullets: [
                "20+ yrs Wall St", "Wall St Journal All Star", "$25 Billion in IPOs", "National Academy of Sciences..."
            ]
        }
    ];
    $scope.loadbio= function (index, bio_input) {
        var bio_page = null;
        $scope.bio = bio_input;
        if ($(document).width() >= 1200)
        {
            bio_page = 4;
        }
        else if($(document).width() >= 993)
        {
            bio_page = 3;
        }
        else if($(document).width() >= 769)
        {
            bio_page = 2;
        }
        else
        {
            bio_page = 1;
            $("#" + (bio_page-1)).after("<style>.col-sm-6 { position: static; } </style>");
        }
        if ( $("#" + (bio_page-1) ).length > 0 ) {
        
            $("#bioShown").remove();
            if(bio_page == 4 && index < 4)
            {
                $("#3").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>"); 
            }
            else if(bio_page == 4 && index < 9)
            {
                 $("#7").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");         
                
            }
            else if(bio_page == 4 && index < 13)
            {
               $("#9").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");          
            }
            
            
            if(bio_page == 3 && index < 3)
            {
               $("#2").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            else if(bio_page == 3 && index < 6)
            {
                $("#5").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");                        
            }
            else if(bio_page == 3 && index < 9)
            {
               $("#8").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");                         
            }
            else if(bio_page == 3 && index < 12)
            {
               $("#9").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");                         
            }
            
            if(bio_page == 2 && index < 2)
            {
               $("#1").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            else if(bio_page == 2 && index < 4)
            {
               $("#3").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            else if(bio_page == 2 && index < 6)
            {
               $("#5").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            else if(bio_page == 2 && index < 8)
            {
               $("#7").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            else if(bio_page == 2 && index < 10)
            {
               $("#9").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            
            if(bio_page == 1 && index < 1)
            {
               $("#0").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }    
            
            else if(bio_page == 1 && index < 2)
            {
               $("#1").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }

            else if(bio_page == 1 && index < 3)
            {
               $("#2").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            } 
            
            else if(bio_page == 1 && index < 4)
            {
               $("#3").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            
            else if(bio_page == 1 && index < 5)
            {
               $("#4").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }   
            
            else if(bio_page == 1 && index < 6)
            {
               $("#5").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }   
            else if(bio_page == 1 && index < 7)
            {
               $("#6").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            } 
            else if(bio_page == 1 && index < 8)
            {
               $("#7").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            else if(bio_page == 1 && index < 9)
            {
               $("#8").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
            else if(bio_page == 1 && index < 10)
            {
               $("#9").after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");  
            }
        }
        else
        {
            console.log(bio_input);
            $("#" + (bio_page-1)).after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
        }
    };
    /*
    $scope.team = [
        {
            name: "Harry E. Blount",
            bio: "Harry Blount, cofounded DISCERN in 2009, based in part on a study done for the national academy of science committee on “Forecasting Future Disruptive Tech” and his 20+ years on Wall Street with major investments firms such as brothers, credit suisse, first boston, donaldson, lukfin and jenette and CIBC oppenheimer. Previously, Harry was named an insituition investor all-Amercian in both infomation tech hardware and internet infrastructure and a wall street journal all-star covering the computer hardware sector. Harry also lent his expertise to the national academy of sciences, where he served as a member of the comittee for forecasting future disruptive tech and to the tech musuem of innovating in san jose where he chaired the futures ocmittee. Harry gradurate from the university of wisconsin la crosse in 1986 with a bs in finance and has been a cra charter holder since the early 1990s",
            title: "Chairman & CEO",
            img: "images/Team_Members_Harry.png"
      },
        {
            
            name: "Thor Hauge",
            bio: "Thor Hauge has a unique background with years of expertise in innovation commercialization, peer-to-peer, digital currencies, mobile payments and big data. Previously, Thor was a Global Business Development Executive with Western Union Digital Ventures and worked in Early Stage Venture Investments at Nokia Ventures.",
            title: "Head of Business Development",
            img: "images/Team_Members_Thor.png"
        },
      {
            name: "Jim Christie",
            bio: "Tesla, SpaceX, Solar City... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores porro amet laboriosam, quasi, illo obcaecati odit. Fuga blanditiis, magni maxime asperiores possimus, aliquam hic iure dignissimos iusto perspiciatis, dolorem enim?",
            title: "Head of Product",
            img: "images/Team_Members_Jim.png"          
      },
      {
            name: "Raghu Madabusi",
            bio: "Raghu Madabusi possess more than 20 years of design, development, and management experience in leading complex projects and high-caliber teams in USA, Germany and India. A Principal Technical Architect with strong business acumen and technical experience in Big Data, Cloud Computing & Traditional IT Projects. Raghu is PMP certified and holds close to dozen IT certifications. He has expertise in building complex Prototypes & Implementations in Big Data & Cloud that involve Machine Learning, Natural Language Processing, Graph Databases, Distributed Computing, Microservices, and more",
            title: "CTO",
            img: "images/Team_Members_Raghu.png"           
      },
      {
            name: "Troy Hansen",
            bio: "30+ years Senior-level Quality Assurance executive. Prior to joining DISCERN, Troy worked for General Dynamics where he was responsible for communications testing on the last two major U.S. satellite constellations. Troy has also served in senior engineering positions for a variety of other firms including Xerox, Honeywell and Fischer Scientific. Troy is an avid options and commodity trader specializing in gold securities.",
            title: "Data Integrity & Enhancement",
            img: "images/Team_Members_Troy.png"           
      },
      {
            name: "Mark Herrmann",
            bio: "Mark Herrmann has 18 years of institutional equity sales experience, including 9 as a Managing Director at Bear Stearns, covering the largest hedge funds and mutual funds on the west coast.  Over the past year, he has been working in a marketing and product development role for several alternative data companies.  Mark received an undergraduate degree in mechanical engineering from Rensselaer Polytechnic Institute and an MBA in finance from USC. He is based in San Francisco.",
            title: "Data & Content Sales",
            img: "images/Team_Members_Mark.png"           
      },
      {
            name: "Dave Wigginton",
            bio: "David Wigginton has demonstrated a consistent ability to provide differentiated coverage of the real estate investment trust sector both as a Senior Analyst at Macquarie Capital and in the equity research department of Merrill Lynch. Prior to commencing his career in research, David worked as a Senior Consultant in the Financial Services Advisory area at Ernst & Young. He is a graduate of the University of Notre Dame, where he earned an M.S. in Accountancy, and Brigham Young University, where he earned a B.S. in Business Management with a finance emphasis.",
            title: "Real Estate Curation",
            img: "images/Team_Members_Dave.png"           
      },
      {
            name: "Rick Church",
            bio: "Richard Church’s experience base includes 20+ years in equity investing in both public and private realms. His strengths revolve around strategy, financial advisory services, business valuation and global consumer/retail fundamental research. Richard’s background includes senior roles, such as Managing Director at Citi-Smith Barney; Managing Director at Shumway Capital Partners; and Principal/CIO at Quartern Capital Partners. Among Richard’s honors stand his distinction as a five-time winner of the Institutional Investor All-America Research Team award and the Wall Street Journal Best of the Street Award.",
            title: "Consumer Retail Curation",
            img: "images/Team_Members_Richard.png"           
      },
      {
            name: "Gil Yang",
            bio: "Jeff Bezos is his own bodyguard... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique beatae neque, consectetur quasi, nisi. Sunt odio odit quibusdam repellendus in architecto libero corporis magnam tenetur. Nesciunt mollitia excepturi sequi.",
            title: "Energy Curation",
            img: "images/Team_Members_Gil.png"           
      },
      {
            name: "Sanjay Agarwal",
            bio: "Jeff Bezos is his own bodyguard... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga similique beatae neque, consectetur quasi, nisi. Sunt odio odit quibusdam repellendus in architecto libero corporis magnam tenetur. Nesciunt mollitia excepturi sequi.",
            title: "Chief Data Scientist",
            img: "images/Team_Members_Sanjay.png"           
      }
     ];
     */
    $scope.image = "";
    $scope.bio_page = 0;
    $scope.hidden = "";
    /*
    $scope.showbio = function (b) 
    {
        if ($(document).width() >= 1200)
        {
            bio_page = 4;
        }
        else if($(document).width() >= 993)
        {
            bio_page = 3;
        }
        else if($(document).width() >= 769)
        {
            bio_page = 2;
        }
        else
        {
            bio_page = 1;
        }
        $scope.hidden = b;
        $("#" + (bio_page-1)).append("<div style='width: 100%;height: 200px;background-color: black; margin-top: 400px;'></div> ");
        console.log($(document).width());
    }
    */
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
    $scope.changeBullets = function (index) {
        $scope.index = index
        $scope.current_bio = $scope.bios[$scope.index]
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


app.controller('services_controller', function ($scope) {
    $scope.current_pic = "";
    $scope.changephoto = function (img_url) {
        $scope.current_pic = img_url;
    }
    var modal = document.getElementById('myModal');
    //var span = document.getElementsByTagName("span");
    $(".list-group").click(function () {
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
    app.controller('UI', function ($scope, $window) {
        $scope.$on('$viewContentLoaded', function () {
            $window.scrollTo(0, 0);
        });
    });
    
