document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const typingText = document.getElementById("typing-text");
    const text = "I'm an IT Professional | Software Developer | Java Specialist";
    let i = 0;
    function type() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust speed here
        }
    }
    type();
});
