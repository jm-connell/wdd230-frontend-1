const date = new Date();

document.querySelector("#headerDate").textContent = `${date.getDay()}, ${date.getDay()} ${date.getMonth()} ${date.getFullYear()}`;

document.querySelector('#footerText').textContent = `© ${date.getFullYear()} Yakima Chamber | Jon Connell | WDD 230 Project | Last Modification: ${document.lastModified}`;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}