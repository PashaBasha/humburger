

let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function (e) {

        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: 'smooth' })

    }
}



let buttons = document.querySelectorAll(".product-button");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {

        document.getElementById("order").scrollIntoView({ behavior: 'smooth' })

    }
}