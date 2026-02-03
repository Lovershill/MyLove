// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const title2 = document.getElementById("letter-title2");
const catImg = document.getElementById("letter-cat");
const dogImg= document.getElementById("letter-dog");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const datchdog = document.getElementById("datch-dog");
const bgMusic = document.getElementById("bg-music");

const memoriesBtn = document.getElementById("memoriesBtn");
const memoriesModal = document.getElementById("memoriesModal");
const closeModal = document.getElementById("closeModal");

memoriesBtn.addEventListener("click", () => {
    memoriesModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    memoriesModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === memoriesModal) {
        memoriesModal.style.display = "none";
    }
});

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

     bgMusic.volume = 0.4;   // romantic, not loud
    bgMusic.play();
    
    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
  

    title.textContent = "Yaaaaaaaaaaaaaaayy!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
    dogImg.style.display = "none";
    title2.style.display = "none";
    datchdog.style.display = "block";
    memoriesBtn.style.display = "inline-block";

});


