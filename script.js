document.addEventListener("DOMContentLoaded", function () {
    const mouseTrail = document.querySelector(".mouse-trail");
    const trailElements = [];
    const maxTrailSize = 20;

    document.addEventListener("mousemove", function (event) {
        const trailElement = createTrailElement(event.pageX, event.pageY);
        trailElements.push(trailElement);

        if (trailElements.length > maxTrailSize) {
            const removedElement = trailElements.shift();
            removedElement.parentNode.removeChild(removedElement);
        }
    });

    function createTrailElement(x, y) {
        const span = document.createElement("span");
        const size = Math.random() * 10 + 5;

        span.style.width = size + "px";
        span.style.height = size + "px";
        span.style.top = y + "px";
        span.style.left = x + "px";

        mouseTrail.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 1000);

        return span;
    }
});
