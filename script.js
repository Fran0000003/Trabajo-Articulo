const mainButton = document.getElementById(main-button)

function changeClaroOscuro()
{
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        mainTitle.style.color = "black";

    } else {
        document.body.style.backgroundColor = "black";
        mainTitle.style.color = "white";
    }
}
mainButton.addEventListener("click", changeClaroOscuro);