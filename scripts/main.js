document.querySelector(".intro").classList.add("go");

let response = "";

const sendMail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");

  window.location.href = `/WillYouBeMyGirlfriend/answer.html?response=${response}&name=${name ? name : "Alguien"}`;
};

const hearts = (sceneName) => {
  let scene = document.querySelector(sceneName);

  if (scene) {
    let heart = document.createElement("span");
    let x = Math.floor(Math.random() * window.innerWidth);
    
    heart.style.left = `${x}px`;
    heart.classList.add("heart");

    scene.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
};

const yes = () => {
  response = "SI";
  sendMail();
};

const no = () => {
  response = "NO";
  sendMail();
};

const exit = () => {
  window.top.close();
};

const flipCard = () => {
  document.querySelector(".flip-card").classList.toggle("active");
};

setInterval(() => {
  hearts(".hearts");
  hearts(".si .hearts");
}, 100);

setInterval(() => {
  hearts(".front .hearts");
  hearts(".back .hearts");
  hearts(".hearts-broken");
}, 500);
