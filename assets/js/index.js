
document.addEventListener("DOMContentLoaded", function (event) {  //waits for page load
    $("#content-area").empty();
    //create static image html copied below
    //<img id="logo-main" src="assets/images/logo/ANZ_Logo_Crop_Trans.png" alt="ANZ logo">
    const logo = $("<img>");
    logo.attr("src", "assets/images/logo/ANZ_Logo_Crop_Trans.png").attr("alt", "ANZ logo");
    logo.attr("id", "logo-main");

    const welcome = $("<div>");
    welcome.text("Welcome to Alexander N Zook's Portfolio.")
    welcome.attr("id", "welcome-text");

    const projBtn = $('<button/>', {
        text: 'Projects',
        id: "projects-btn",
        value: 'on'
    });
    projBtn.addClass("mdl-button mdl-js-button mdl-button--colored");
    // projBtn.append("<i class=\"material-icons\">favorite</i>");

    $("#content-area").append(logo);
    $("#content-area").append(welcome);
    $("#content-area").append(projBtn);
    $("#logo-main").addClass("animatedFastFade fadeIn");
    $("#welcome-text").addClass("animatedSlowFade fadeIn");
    $("#projects-btn").addClass("animatedSlowFade fadeIn");

    setTimeout(function () {
        // $("#content-area").append(projBtn);
    }, 6000);


    $("#projects-btn").on("click", function (event) {
        event.preventDefault();
        $("#content-area").empty();

        for (var i = 0; i < portfolio.length; i++) {

            var item = $("<div>");
            item.attr("style", "margin: 20px; padding: 15px; background: whitesmoke;");
            item.addClass("demo-card-wide mdl-card mdl-shadow--2dp");
            var titleDiv = $("<div>")
            var title = $("<p>")
            titleDiv.addClass("mdl-card__title");
            title.addClass("mdl-card__title-text");
            title.attr("style", "font-size: 18px; font-weight: bold; text-align: center;");
            title.html(portfolio[i].title);
            titleDiv.append(title);

            var info = $("<div>");
            info.addClass("mdl-card__supporting-text");
            info.html(portfolio[i].tagline);

            var linkDiv = $("<div>");
            linkDiv.addClass("mdl-card__actions project-link");
            var link = $("<a />");
            link.text("Details").attr("href", portfolio[i].url).attr("target", "_blank");
            link.attr("style", "color: dodgerblue; text-decoration: none;");
            linkDiv.append(link);

            item.append(titleDiv).append(info).append(linkDiv);
            $("#content-area").append(item).addClass("animatedFastFade fadeIn");
        }
    });

});