function myMenu() {
    var x = document.getElementById("top-menu");
    if (x.className === "navegacao") {
        x.className += " responsive";
    } else {
        x.className = "navegacao";
    }
}