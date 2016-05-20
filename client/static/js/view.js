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

var role = "<h2 class='hidden'>>Software Developer</h2>";

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
    //Returns Container
    return m("#container", { class: "container-fluid" }, [

        // 
        //Header Section
        // 
        m("#header", { class: "page-header" }, [
            //Header Image
            m("#header_image", m.trust(image("header")), [
                //Displays Name
                m("#header_name", m.trust(name)),
                //Role
                m("#header_role", m.trust(role)),
            ]),

            //Navigation Bar
            m("nav", { id: "nav_bar", class: "navbar navbar-default ", role: "navigation" }, [
                m(".container-fluid",
                    m("button", { type: "button", class: "navbar-toggle pull-left" },
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" })),
                    m("#myNavbar", { class: "collapse navbar-collapse", },
                        m("ul", { class: "nav navbar-pills nav-justified" },
                            links.map(function (link) {
                                return m("li", { class: "active", role: "presentation", id: link.id },
                                    m("a", { href: link.url }, link.title));
                            }))
                    )
                )
            ]),
        ]),
        //Main Sections of Page
        // 
        //About Section
        // 
        m("#about", { class: "container-fluid" }, [
            m("#about_image", m.trust(image("about"))),
            m("#about_quote", m.trust(job_quote)),
            m("#about_text", m.trust(about_text)),
        ]),

        // 
        //Projects Section
        // 
        m("#projects", { class: "container-fluid" }, [
            m("#projects_image", { id: "projects_image" }, m.trust(image("tools"))),
            m("#tools_quote", m.trust(tools_quote)),
            m("#tools_sections", { style: "display: block" }, [
                m("#languages", m.trust(languages), [
                    m("#languages_icons", { style: "display:flex" }, [
                        m.trust(icon("python")),
                        m.trust(icon("swift")),
                        m.trust(icon("javascript")),
                    ]),
                ]),
                m("#substance_style", m.trust(substance_style), [
                    m("#substance_style_icons", { style: "display:flex" }, [
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
        m("#contact", { class: "container-fluid" }, [
            // m("#contact_image", m.trust(image("contact"))),
            m("#contact_text", m.trust(contact_text_top)),
            m("#social_media_icons", { style: "display:flex" }, [
                m.trust(icon("linkedin")),
                m.trust(icon("github")),
                m.trust(icon("facebook")),
                m.trust(icon("twitter")),
                m.trust(icon("email")),
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


//Jquery Adding Attributes
$(function () {
    // $("#container").addClass("hidden");
    $("#container").attr("data-spy", "scroll");
    $("#container").attr("data-target", ".navbar");
    $("#container").attr("data-offset", "50");
    $("#header_name h1").wrapInner("<span>");
    $("#header_role h2").wrapInner("<span>");
    // $("nav").addClass("hidden");
    $("button").attr('data-toggle', "collapse");
    $("button").attr('data-target', "#myNavbar");
    $("#linkedin_icon").wrap($('<a>', { href: "http://www.linkedin.com/in/theebrentellis", target: "_blank" }));
    $("#github_icon").wrap($('<a>', { href: "http://www.github.com/theebrentellis", target: "_blank" }));
    $("#facebook_icon").wrap($('<a>', { href: "http://www.facebook.com/brent.ellis.3382", target: "_blank" }));
    $("#twitter_icon").wrap($('<a>', { href: "http://www.twitter.com/TheeBrentEllis?lang=en", target: "_blank" }));
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
function animated_complete(image, animated) {
    image = $(image);
    setTimeout(function () {
        image.removeClass(animated);
    }, [750]);
}

//Loads Once Virtual DOM has been rendered
$(document).ready(function () {
    //Snaps Navigation Bar To Top On Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > ($("#about_image").height())) {
            $("#nav_bar").slideDown("fast", function () {
                $("#nav_bar").addClass("navbar-fixed-top width container");
            })
        }
        if ($(window).scrollTop() < ($("#about_image").height())) {
            $("#nav_bar").removeClass("navbar-fixed-top width container");
        }
    });

    //Fades Body In
    $("#container.hidden").fadeIn(3000).removeClass("hidden");
    $('#container').scrollspy({ target: ".navbar", offset: 50 });


    //Fades For App Loading
    $('h1.hidden').fadeIn(4000).removeClass('hidden');
    $('h2.hidden').fadeIn(5000).removeClass('hidden');
    // $('nav.hidden').fadeIn(6000).removeClass('hidden');


    //Hover Events For Contact Images
    //Flip Animation Added To All Icons in Div
    $("#social_media_icons").children("a").hover(function () {
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
});