const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set triangle dimensions and color
const base = 100;
const height = 200;
ctx.strokeStyle = 'red';

// Draw triangle using lines
ctx.beginPath();
ctx.moveTo(0, height); // Top left corner
ctx.lineTo(base, height); // Bottom right corner
ctx.lineTo(base, 0); // Bottom left corner
ctx.closePath(); // Close the path

ctx.fillStyle = "#ff0000";
ctx.fill();
