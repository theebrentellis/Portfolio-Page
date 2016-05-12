var MyApp = {};

var links = [
    { title: "Home", url: "#", id: "home_id" },
    { title: "About", url: "#about", id: "about_id" },
    { title: "Projects", url: "#projects", id: "projects_id" },
    { title: "Contact", url: "#contact", id: "contact_id" }
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

var name = "<h1 id='name' class='hidden'>Brent Ellis</h1>";

var role = "<h4 class='hidden'>>Software Developer</h4>";

var projects_quote = "<h5>Choose a job you love, and you will never have to work a day in your life. -Confucius</h5>";

var random_text = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Curabitur sodales ligula in libero. </p>";

//Helper Functions
//Icon Picker Helper Function
function icon(name) {
    name = name;
    icon_string = "<img id='" + name + "_icon' src='stylesheet/images/" + name + ".png'>";
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
    return m(".container-fluid", [
        //Header & Navigation Bar

        //Header Section with Background Image
        //Name
        //Role
        m(".header", [
            m(".image", m.trust(image("header_image")), [
                m("#header_name", m.trust(name)),
                m("#role", m.trust(role)),
            ]),
            //Nav Bar
            m("nav", { class: "navbar navbar-default navbar-static-top", role: "navigation" },
                m(".container-fluid",
                    m("button", { type: "button", class: "navbar-toggle pull-left" },
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" })),
                    m("#myNavbar", { class: "collapse navbar-collapse", },
                        m("ul", { class: "nav navbar-pills nav-justified" },
                          
                            links.map(function (link) {
                                return m("li", { class: "active", id: link.id },
                                    m("a", { href: link.url }, link.title));
                            }))
                    )
                )
            ),
        ]),
        //Main Sections of Page

        //About Section
        m("#about", { class: "container-fluid" }, [
            m("#background_image", m.trust(image("about_image"))),
            m("#about_text", m.trust(random_text)),
        ]),

        //Projects Section
        m("#projects", { class: "container-fluid" }, [
            m("#projects_image", { id: "projects_image" }, m.trust(image("tools_image"))),
            m("#projects_technologies_icons", { style: "display:flex" }, [
                m.trust(icon("python")),
                m.trust(icon("swift")),
                m.trust(icon("javascript")),
                m.trust(icon("html")),
                m.trust(icon("css3")),
                m.trust(icon("jquery")),
                m.trust(icon("bootstrap")),
                m.trust(icon("mongodb")),
                m.trust(icon("angular")),
                m.trust(icon("node")),
            ]),
            m("#projects_quote", m.trust(projects_quote)),
            m("#projects_text", m.trust(random_text)),

        ]),

        //Contacts Section
        m("#contact", { class: "container-fluid" }, [
            m("#social_media_icons", { style: "display:flex" }, [
                m.trust(icon("linkedin")),
                m.trust(icon("github")),
                m.trust(icon("facebook")),
                m.trust(icon("twitter")),
                m.trust(icon("email")),
            ]),
            m("#contact_text", m.trust(random_text)),
        ]),

        //Footer Section
        m("#footer", [
            m(".footer_image", { id: "foot_image" }, m.trust(image("footer_image"))),
            m("footer_text"),
        ]),
    ]);
};

//Load View and Sets Virtual DOM
m.module(document.body, { controller: function () { }, view: layout });


//Jquery Adding Attributes
$(function () {
    $("body").addClass("hidden");
    $("body").attr("data-spy", "scroll");
    $("body").attr("data-target", ".navbar");
    $("body").attr("data-offset", "50");
    $("h1").wrapInner("<span>");
    $("h4").wrapInner("<span>");
    $("nav").addClass("hidden");
    $("button").attr('data-toggle', "collapse");
    $("button").attr('data-target', "#myNavbar");
    $("#linkedin_icon").wrap($('<a>', { href: "http://www.linkedin.com/in/theebrentellis" }));
    $("#github_icon").wrap($('<a>', { href: "http://www.github.com/theebrentellis" }));
    $("#facebook_icon").wrap($('<a>', { href: "http://www.facebook.com/brent.ellis.3382" }));
    $("#twitter_icon").wrap($('<a>', { href: "http://www.twitter.com/TheeBrentEllis?lang=en" }));
    $("#email_icon").wrap($('<a>', { href: "mailto:brent.ellis@live.com" }));
});


//Helper Functions To Run Full Animation and Reset Class
function magic_off(image) {
    image = $(image);
    setTimeout(function () {
        image.removeClass('magictime puffIn');
    }, [750]
    );
}
function image_flip_off(image) {
    image = $(image);
    setTimeout(function () {
        image.removeClass("animated flip");
    }, [750]);
}
function image_tada_off(image) {
    image = $(image);
    setTimeout(function () {
        image.removeClass("animated tada");
    }, [750]);
}


//Loads Once Virtual DOM has been rendered
$(document).ready(function () {
    $("body.hidden").fadeIn(3000).removeClass("hidden");
    $('body').scrollspy({ target: ".navbar", offset: 50 });


    //Fades For App Loading

    $('h1.hidden').fadeIn(4000).removeClass('hidden');
    $('h4.hidden').fadeIn(5000).removeClass('hidden');
    $('nav.hidden').fadeIn(6000).removeClass('hidden');


    //Hover Events For Contact Images

    //Flip Animation Added To All Icons in Div
    $("#social_media_icons").children("a").hover(function () {
        $(this).addClass("animated flip");
    }, function () {
        image_flip_off(this);
    });

    //Tada Animation Added To All Icons in Div
    $("#projects_technologies_icons").children("img").hover(function () {
        $(this).addClass("animated tada");
    }, function () {
        image_tada_off(this);
    });
});