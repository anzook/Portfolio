
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
    
    $("#content-area").append(logo);
    $("#content-area").append(welcome);
    $("#logo-main").addClass("animatedFastFade fadeIn");
    $("#welcome-text").addClass("animatedSlowFade fadeIn");

    
    
    document.addEventListener("click", function (event) {
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
            linkDiv.addClass("mdl-card__actions");
            var link = $("<a />");
            link.text("Details").attr("href", portfolio[i].url);
            link.attr("style", "color: dodgerblue; text-decoration: none;");
            linkDiv.append(link);

            item.append(titleDiv).append(info).append(linkDiv);
            $("#content-area").append(item);
        }
    });
});