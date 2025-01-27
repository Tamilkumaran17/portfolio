const typingElement = document.getElementById("typing");
        const text = typingElement.getAttribute("data-text"); // Get text from the data-text attribute
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text[index];
                index++;
                setTimeout(typeText, 100); // Adjust typing speed here (in ms)
            } else {
                setTimeout(() => {
                    index = 0; // Reset index
                    typingElement.textContent = ""; // Clear text
                    typeText(); // Restart typing
                }, 3000); // Delay before restarting (in ms)
            }
        }

        // Start the typing effect
        typeText();