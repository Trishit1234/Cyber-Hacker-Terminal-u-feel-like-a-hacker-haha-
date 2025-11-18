const startBtn = document.getElementById("startBtn");
const screen = document.getElementById("screen");

const commands = [
    "Initializing hack sequence...",
    "Bypassing firewall...",
    "Accessing secure server...",
    "Decrypting passwords...",
    "Stealing cookies...",
    "Injecting malware...",
    "Reading confidential files...",
    "Uploading payload...",
    "Access granted ✔",
    "HACK COMPLETED SUCCESSFULLY!"
];

function typeLine(text) {
    return new Promise((resolve) => {
        let i = 0;
        let interval = setInterval(() => {
            screen.innerHTML += text[i];
            i++;
            if (i === text.length) {
                clearInterval(interval);
                screen.innerHTML += "<br>";
                screen.scrollTop = screen.scrollHeight;
                resolve();
            }
        }, 40);
    });
}

async function startHack() {
    screen.innerHTML = ""; // Clear screen first
    
    for (let cmd of commands) {
        await typeLine(cmd);
        await new Promise(res => setTimeout(res, 400));
    }
}

startBtn.addEventListener("click", startHack);
