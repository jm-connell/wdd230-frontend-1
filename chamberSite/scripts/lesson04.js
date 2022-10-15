const date = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);

document.querySelector("#headerDate").textContent = `${fulldateUK}`;

document.querySelector('#footerText').textContent = `© ${date.getFullYear()} Yakima Chamber | Jon Connell | WDD 230 Project | Last Modification: ${document.lastModified}`;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}