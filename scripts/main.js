document.querySelector(".intro").classList.add("go");

let response = "";

const sendMail = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");

  const params = {
    name: name ? name : "Alguien",
    response: response,
  };

  await emailjs.send("service_za4zxg6", "template_wy67bpq", params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  window.location.href = `/WillYouBeMyGirlfriend/answer.html?response=${response}`;
};

const hearts = (sceneName) => {
  let scene = document.querySelector(sceneName);

  if (scene) {
    let heart = document.createElement("span");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * 100);

    heart.style.top = `${y}px`;
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
