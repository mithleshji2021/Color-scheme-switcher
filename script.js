const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    // console.log(buttons);
    button.addEventListener("click", (event) => {
        // console.log(event)
        if (event.srcElement.attributes.id.nodeValue === "white") {
            body.style.backgroundColor = "white"
        }
        if (event.srcElement.attributes.id.nodeValue === "yellow") {
            body.style.backgroundColor = "yellow"
        }
        if (event.srcElement.attributes.id.nodeValue === "blue") {
            body.style.backgroundColor = "blue"
        }
        if (event.srcElement.attributes.id.nodeValue === "grey") {
            body.style.backgroundColor = "gray"
        }

        // const color = event.srcElement.attributes.id.nodeValue
        // console.log(color)
        // switch (color) {
        //     case white:
        //         body.style.backgroundColor = "white"
        //         break;

        //     case grey:
        //         body.style.backgroundColor = "grey"
        //         break;

        //     case yellow:
        //         body.style.backgroundColor = "yellow"
        //         break;

        //     case blue:
        //         body.style.backgroundColor = "blue"
        //         break;


    }
    )
})