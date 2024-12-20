function createSnowflakes(canvas) {
    const ctx = canvas.getContext('2d');
    const snowflakes = [];

    function drawTree(x, y, size) {
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(x, y - size * 3);
        ctx.lineTo(x - size, y);
        ctx.lineTo(x + size, y);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y - size * 2);
        ctx.lineTo(x - size * 0.8, y + size);
        ctx.lineTo(x + size * 0.8, y + size);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size * 0.6, y + size * 2);
        ctx.lineTo(x + size * 0.6, y + size * 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'brown';
        ctx.fillRect(x - size * 0.2, y + size * 2, size * 0.4, size);
    }

    function createTrees() {
        const treeCount = 5; // Adjust the number of trees here
        for (let i = 0; i < treeCount; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 20 + 10;
            drawTree(x, y, size);
        }
    }

    function createSnowflake() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 4 + 1;
        const speed = Math.random() * 1 + 0.5;
        snowflakes.push({ x, y, radius, speed });
    }

    function drawSnowflakes() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        snowflakes.forEach(snowflake => {
            ctx.moveTo(snowflake.x, snowflake.y);
            ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        });
        ctx.fill();
    }

    function updateSnowflakes() {
        snowflakes.forEach(snowflake => {
            snowflake.y += snowflake.speed;
            if (snowflake.y > canvas.height) {
                snowflake.y = 0;
                snowflake.x = Math.random() * canvas.width;
            }
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSnowflakes();
        updateSnowflakes();
        requestAnimationFrame(animate);
    }

    createTrees(); // Draw trees once
    setInterval(createSnowflake, 50);
    animate();
}

const project1Canvas = document.getElementById('project1Canvas');
createSnowflakes(project1Canvas);