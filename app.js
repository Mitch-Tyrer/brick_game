var canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
    x = canvas.width / 2,
    y = canvas.height - 30,
    dx = -6,
    dy = -5;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // drawing code
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw, 15);