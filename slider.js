let time = 5000,
    currentImageIndex = 0,
    images = document
    .querySelectorAll(".slider li img")
max = images.length;

function click(id) {

    var element = document.getElementById(id);
    if (element.click)
        element.click();
    else if (document.createEvent) {
        var eventObj = document.createEvent('MouseEvents');
        eventObj.initEvent('click', true, true);
        element.dispatchEvent(eventObj);
    }

}

function start() {
    setInterval(() => {


        click('slide1')
        click('slide2')
        click('slide3')

    }, time)
}

window.addEventListener("load", start)