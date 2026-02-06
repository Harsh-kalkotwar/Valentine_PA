const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("cute-msg");

const messages = [
  "Hey… don’t you like me? 🥺",
  "Are you sureeee? 💔",
  "That kinda hurts 😢",
  "I thought we had something 💕",
  "Okay but… what if YES? 😳",
  "Pleaseeeeee 🥹💖"
];

let yesScale = 1;
let msgIndex = 0;

// NO button runs away
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Change message
  msg.textContent = messages[msgIndex % messages.length];
  msgIndex++;

  // YES button grows
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// YES button wins
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:linear-gradient(135deg,#ffccd5,#ffe6eb);
      font-family:'Satisfy',cursive;
      color:#d6336c;
      font-size:42px;
      text-align:left;
    ">
      YAYYY!!! 💖💖💖<br>
      So now Mission Valentine:<br>
Step 1: Get ready ✨<br>
Step 2: I’m taking you out on a cute date 💖<br>
Step 3: Food + photos + us = perfect day
    </div>
  `;
});
