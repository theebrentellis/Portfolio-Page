var MyApp = {};

var links = [
    { title: "home", url: "#", id: "home_id" },
    { title: "about", url: "#about", id: "about_id" },
    { title: "projects", url: "#projects", id: "projects_id" },
    { title: "contact", url: "#contact", id: "contact_id" }
];

var roles = [
    { id: 1, title: ">Software Developer" },
    { id: 2, title: ">Web Designer" },
    { id: 3, title: ">Front End" },
    { id: 4, title: ">Back End" },
    { id: 5, title: ">Full Stack" }
];

var rolePicker = function () {
    var roles = [">Software Developer", ">Front End", ">Back End", ">Full Stack"];
    var number = Math.floor((Math.random() * roles.length) + 0);
    console.log(roles[number]);
    return roles[number];
};

var view_role = function () {
    return m("h4", rolePicker());
    // return m("h4", [
    //     roles.map(function (role) {
    //         console.log(role);
    //         return m.trust(roles.indexOf(role), 0);
    //     })
    // ]);
};

var name = "<p id='name' class='hidden'>Brent Ellis</p>";

var role = "<p id='role' class='hidden'>>Software Developer</p>";

var tools_quote = "<h5 id='tools_quote_text'>Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. <br><i>-George Herbert</i></h5><span><hr/></span>";

var languages = "<h3>Languages</h3>";

var substance_style = "<h3>Substance and Style</h3>";

var job_quote = "<h5 id='job_quote'>Choose a job you love, and you will never have to work a day in your life. <br><i>-Confucius</i></h5><span><hr/></span>";



var about_text = "<h2>About Me!?!?</h2><br><h4>Who is this guy and why should I continue looking at this webpage?</h4><span><p>(Also, what's the deal with the cliche quote?)</p></span><br><h5>Hello World! My name is Brent Ellis and I'm a Full Stack Web Developer with a passion for creating professional high quality websites and applications. I realize the quote might be a vapid expression for some but I've never had a job that engaged me so much that working doesn't feel like working. Where hours seem to fly by and when you learn about a new technology and all you can think about is what you can build with it. With technology expanding at such a rapid pace the sky is the limit on what we can build together. </h5><br><h5>When I'm not working on projects I like to golf and play soccer. I also like to explore new technologies and day dream about the endless possibilites they can provide. </h5>";

var projects_text = "<h4>Check out some of the projects that I've been working on!</h4>";

var contact_text = "<h3>Like what you see so far? Interetsted in hiring me? Feel free to contact me </h3>";

var contact_text_top = "<h3>Like What You've Seen So Far?<br><span>I'm Currently Seeking New Opportunities.</span><br><span>Check out my social media profiles or send me an email.</span><br></h3>";

var contact_text_bottom = "<h3><span>What Can I Build For You?!</span></h3>";

var copyright = "<p>&copy; 2016 Brent Ellis</p>";

var random_text = "<p>Bacon ipsum dolor amet kevin tenderloin bacon short loin swine, pastrami landjaeger. Short loin sirloin rump leberkas, prosciutto cow alcatra ribeye tongue ground round pastrami. Ground round pork loin pastrami tongue cupim shank meatloaf, bresaola pork chop chuck tenderloin frankfurter beef tri-tip. Filet mignon meatloaf turducken bresaola pork chop, ham beef ribs corned beef. Tongue swine bresaola brisket doner tail. Corned beef pancetta strip steak drumstick sirloin pork ham pastrami. </p><br><p>Spare ribs corned beef flank hamburger. Sausage swine ham fatback. Boudin cupim brisket chuck flank. Shank drumstick shoulder pork loin, ball tip ham hock flank t-bone chuck pork belly corned beef salami. Picanha bresaola fatback meatloaf cupim meatball. Andouille beef cow, flank salami sirloin pork belly turducken jerky alcatra shoulder prosciutto. </p>";

//Helper Functions
//Icon Picker Helper Function
function icon(name) {
    name = name;
    icon_string = "<img id='" + name + "_icon' alt='" + name + "' src='stylesheet/images/" + name + ".png'>";
    return icon_string;
}
//Image Picker Helper Function
function image(name) {
    name = name;
    image_string = "<img id='" + name + "_image' class='img-responsive' src='stylesheet/images/" + name + ".jpeg'>";
    return image_string;
}

//Mithril View For App
var layout = function () {
    //Returns Container
    return m("#container", { class: "container-fluid" }, [

        // 
        //Header Section
        // 

        //Navigation Overlay
        m("#navigation_overlay", [
            m(".button_container", { id: "toggle" }, [
                m("span", { class: "top" }),
                m("span", { class: "middle" }),
                m("span", { class: "bottom" }),
            ]),
            m(".overlay", { id: "overlay" }, [
                m("nav", { class: "overlay-menu", id: "nav_overlay" }, [
                    m("ul",
                        links.map(function (link) {
                            return m("li", { id: link.id },
                                m("a", { href: link.url }, link.title));
                        })),
                ]),
            ]),
        ]),
        m("#header", [
            m(".header_image", m.trust(image("header")),[
                //Displays Name
                m("#header_name", m.trust(name)),
                //Displays Role
                m("#header_role", m.trust(role)),
            ]),
        ]),
        //Main Sections of Page
        // 
        //About Section
        // 
        m("#about", [
            m("#about_image", m.trust(image("about"))),
            m("#about_quote", m.trust(job_quote)),
            m("#about_text", m.trust(about_text)),
        ]),

        // 
        //Projects Section
        // 
        m("#projects", [
            m("#projects_image", { id: "projects_image" }, m.trust(image("tools"))),
            m("#tools_quote", m.trust(tools_quote)),
            m("#tools_section", { class: "float_center" }, [
                m("#languages", m.trust(languages), [
                    m("#languages_icons", { class: "child" }, [
                        m.trust(icon("python")),
                        m.trust(icon("swift")),
                        m.trust(icon("javascript")),
                    ]),
                ]),
                m("#substance_style", m.trust(substance_style), [
                    m("#substance_style_icons", { class: "child" }, [
                        m.trust(icon("html")),
                        m.trust(icon("css3")),
                        m.trust(icon("jquery")),
                        m.trust(icon("bootstrap")),
                        m.trust(icon("mongodb")),
                        m.trust(icon("expressjs")),
                        m.trust(icon("angular")),
                        m.trust(icon("node")),
                        m.trust(icon("mithril")),
                    ]),
                ]),
            ]),
            m("#projects_text", m.trust(projects_text)),
            m("#projects_thumbnails", [
                m(".row", [
                    m(".col-md-3")
                ]),
            ]),
        ]),
        // 
        //Contacts Section
        // 
        m("#contact", [
            m("#contact_text", m.trust(contact_text_top)),
            m(".float_center", [
                m("#social_media_icons", [
                    m.trust(icon("LinkedIn")),
                    m.trust(icon("Github")),
                    m.trust(icon("Facebook")),
                    m.trust(icon("Twitter")),
                    m.trust(icon("Email")),
                ]),
                m(".clear")
            ]),
            m("#contact_text", m.trust(contact_text_bottom)),
        ]),

        // 
        //Footer Section
        // 
        m("#footer", [
            m("#foot_image", m.trust(copyright)),
        ]),
    ]);
};

//Load View and Sets Virtual DOM
m.module(document.body, { controller: function () { }, view: layout });


//jQuery Adding Attributes & Wraps
$(function () {
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $(".header_text p").wrapInner("<span>");

    $("#tools_section img").attr("data-toggle", "popover");
    $("#tools_section img").attr("data-trigger", "hover");
    $("#tools_section img").attr("data-placement", "bottom");


    //Individual Icon Identifiers
    $("#LinkedIn_icon").wrap($('<a>', { href: "http://www.linkedin.com/in/theebrentellis", target: "_blank" }));
    $("#Github_icon").wrap($('<a>', { href: "http://www.github.com/theebrentellis", target: "_blank" }));
    $("#Facebook_icon").wrap($('<a>', { href: "http://www.facebook.com/brent.ellis.3382", target: "_blank" }));
    $("#Twitter_icon").wrap($('<a>', { href: "http://www.twitter.com/TheeBrentEllis?lang=en", target: "_blank" }));
    $("#Email_icon").wrap($('<a>', { href: "mailto:brent.ellis@live.com" }));

    //Popover Text For Project Icons
    $("#python_icon").attr("title", "Python");
    $("#python_icon").attr("data-content", "Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than would be possible in languages such as C++ or Java.");

    $("#swift_icon").attr("title", "Swift");
    $("#swift_icon").attr("data-content", "Swift is a general-purpose, multi-paradigm, compiled programming language created for iOS, OS X, watchOS, tvOS and Linux developed by Apple Inc.");

    $("#javascript_icon").attr("title", "Javascript");
    $("#javascript_icon").attr("data-content", "A high-level, dynamic, untyped, and interpreted programming language. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins.");

    $("#html_icon").attr("title", "HTML");
    $("#html_icon").attr("data-content", "The standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology used to create web pages, as well as to create user interfaces for mobile and web applications.");

    $("#css3_icon").attr("title", "CSS");
    $("#css3_icon").attr("data-content", "Cascading Style Sheets (CSS) is s style sheet language used for describing the presentation of a document written in a markup language. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.");

    $("#jquery_icon").attr("title", "jQuery");
    $("#jquery_icon").attr("data-content", "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications.");

    $("#bootstrap_icon").attr("title", "Bootstrap");
    $("#bootstrap_icon").attr("data-content", "Bootstrap is a front end web framework for creating websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.");

    $("#mongodb_icon").attr("title", "MongoDB");
    $("#mongodb_icon").attr("data-content", "A NoSQL database, MongoDB avoids the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas, making the integration of data in certain types of applications easier and faster.");

    $("#expressjs_icon").attr("title", "Express.js");
    $("#expressjs_icon").attr("data-content", "Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications. It is the de facto standard server framework for Node.js.");

    $("#angular_icon").attr("title", "AngularJS");
    $("#angular_icon").attr("data-content", "A web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. AngularJS is the frontend part of the MEAN stack.");

    $("#node_icon").attr("title", "Node.js");
    $("#node_icon").attr("data-content", "A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.");

    $("#mithril_icon").attr("title", "Mithril");
    $("#mithril_icon").attr("data-content", "Mithril is a client-side MVC framework used to organize code in a way that is easy to think about and to maintain.");


});


//Helper Functions To Run Full Animation and Reset Class
function magic_off(image) {
    image = $(image);
    setTimeout(function () {
        image.removeClass('magictime puffIn');
    }, [750]
    );
}
function animated_complete(image, animated) {
    image = $(image);
    setTimeout(function () {
        image.removeClass(animated);
    }, [750]);
}

//Loads Once Virtual DOM has been rendered
$(document).ready(function () {
    //Fades Body In
    $("#container.hidden").fadeIn(3000).removeClass("hidden");
    
    //Fades For App Loading
    // $('p.hidden').fadeIn(4000).removeClass('hidden');
    $('p.hidden').fadeIn(5000).removeClass('hidden');
    // $('nav.hidden').fadeIn(6000).removeClass('hidden');


    //Hover Events For Projects & Contact Icons
    //Flip Animation Added To All Icons in Div
    $("#social_media_icons a").children("img").hover(function () {
        $(this).addClass("animated flip");
    }, function () {
        animated_complete(this, "animated flip");
    });

    //Tada Animation Added To All Icons in Div
    $("#languages_icons").children("img").hover(function () {
        $(this).addClass("animated tada");
    }, function () {
        animated_complete(this, "animated tada");
    });
    $("#substance_style_icons").children("img").hover(function () {
        $(this).addClass("animated tada");
    }, function () {
        animated_complete(this, "animated tada");
    });

    //Activates jQuery Popover
    $('[data-toggle="popover"]').popover();
});