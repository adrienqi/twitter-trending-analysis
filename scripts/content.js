const badge = document.createElement("p");
badge.classList.add("color-secondary-text", "type--caption");
badge.textContent = "testing";

const timer = setInterval(() => {
    const elements = document.querySelectorAll(".css-901oao.r-1nao33i.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-1bymd8e.r-bcqeeo.r-qvutc0");
    if (elements) {
        clearTimeout(timer);
        console.log(elements);
        elements.forEach(element => {
            console.log(element.textContent)
            console.log(element.insertAdjacentElement("beforeEnd", badge))
            
        })
    }
}, 1000);