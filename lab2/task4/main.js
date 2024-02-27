function drawLine() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var x = 0;
    var y = 0;
    var dx = 1;
    var dy = 1;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.stroke();

        x += dx;
        y += dy;

        if (x >= canvas.width || y >= canvas.height) {
            x = 0;
            y = 0;
            alert("The line has reached the edge of the canvas");
        }
        requestAnimationFrame(animate);
    }

    animate();
}

drawLine();
