const createCells = () => {
    const cellCount = 20; // Number of cells
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        
        // Positioning the cells randomly along the width of the screen
        cell.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        cell.style.animationDelay = Math.random() * 3 + "s"; // Random delay for staggered effect
        
        document.body.appendChild(cell);
        
        // Remove the cell after animation ends
        cell.addEventListener("animationiteration", () => {
            cell.remove();
        });
    }
};

// Create cells at intervals
setInterval(createCells, 1000);
