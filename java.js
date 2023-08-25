const a = document.getElementById("a");

document.addEventListener('click', function(event) {
    const x = event.pageX;
    const y = event.pageY;
    console.log(x, y);
    a.style.left = `${x}px`;
    a.style.top = `${y}px`;
});
