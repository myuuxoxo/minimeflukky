let noClickCount = 0;

// preload เสียง
const loveSound = new Audio('love.mp3');
const noSound = new Audio('no.mp3');

function changeImage(newSrc) {
  document.getElementById("mainImage").src = newSrc;
}

function resetImage() {
  document.getElementById("mainImage").src = "doyou.png";
}

function handleNoClick() {
  noClickCount++;
  noSound.play();

  const noButton = document.getElementById("noButton");

  // เปลี่ยนข้อความตามจำนวนครั้ง
  if (noClickCount === 3) {
    noButton.innerText = "จริงๆ ก็รักใช่ไหม~?";
  } else if (noClickCount === 5) {
    noButton.innerText = "เขินใช่ม้าาา 😳";
  } else if (noClickCount === 7) {
    noButton.innerText = "รักแล้วว 💖";
    noButton.onclick = function () {
      showPage("lovePage");
    };
    return;
  }

  if (noClickCount < 10) {
    shrinkNoButton();
    moveNoButtonToTop();
  } else {
    showPage("noPage");
  }
}

function shrinkNoButton() {
  const noButton = document.getElementById("noButton");
  const currentPadding = parseFloat(getComputedStyle(noButton).padding);
  const currentFontSize = parseFloat(getComputedStyle(noButton).fontSize);

  const minPadding = 10;
  const minFontSize = 14;

  noButton.style.padding = `${Math.max(currentPadding * 0.9, minPadding)}px`;
  noButton.style.fontSize = `${Math.max(currentFontSize * 0.9, minFontSize)}px`;
}

function moveNoButtonToTop() {
  const noButton = document.getElementById("noButton");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // จำกัดเฉพาะครึ่งบนของหน้าจอ
  const maxTop = windowHeight * 0.2 - buttonHeight;
  const maxLeft = windowWidth - buttonWidth;

  const randomLeft = Math.random() * maxLeft;
  const randomTop = Math.random() * maxTop;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomLeft}px`;
  noButton.style.top = `${randomTop}px`;
}

function showPage(pageId) {
  if (pageId === "lovePage") {
    loveSound.play();
  }

  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("lovePage").classList.add("hidden");
  document.getElementById("noPage").classList.add("hidden");
  document.getElementById(pageId).classList.remove("hidden");
}
