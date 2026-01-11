document.addEventListener("DOMContentLoaded", () => {

  /* ---------- ELEMENTS ---------- */
  const modal = document.getElementById("earlyAccessModal");
  const openBtns = document.querySelectorAll(".open-modal");
  const closeBtn = document.querySelector(".close-modal");
  const backdrop = document.querySelector(".modal-backdrop");

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  /* ---------- MOBILE MENU HELPERS ---------- */
  function openMobileMenu() {
    mobileMenu.style.display = "block";
  }

  function closeMobileMenu() {
    mobileMenu.style.display = "none";
  }

  /* ---------- MODAL ---------- */
  function openModal() {
    closeMobileMenu();                // 🔑 ALWAYS close menu
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  /* ---------- WATCH DEMO ---------- */
  const demoBtn = document.querySelector(".watch-demo");
  const demoSection = document.getElementById("demo");

  if (demoBtn && demoSection) {
    demoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeMobileMenu();               // 🔑 close menu
      demoSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------- MOBILE MENU TOGGLE ---------- */
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
    });
  }

  /* ---------- CLOSE MENU ON ANY LINK CLICK ---------- */
  mobileMenu.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", () => {
      closeMobileMenu();               // 🔑 CLOSE ON ANY CLICK
    });
  });

  /* ---------- CLOSE MENU WHEN CLICKING OUTSIDE ---------- */
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.style.display === "block" &&
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

});

/* ---------- DEMO VIDEO PLAY ---------- */
const demoVideo = document.getElementById("demoVideo");
const playBtn = document.getElementById("playVideoBtn");
const videoWrapper = document.querySelector(".video-wrapper");

if (demoVideo && playBtn) {
  playBtn.addEventListener("click", () => {
    demoVideo.play();
    demoVideo.setAttribute("controls", "controls");
    videoWrapper.classList.add("playing");
  });

  demoVideo.addEventListener("pause", () => {
    videoWrapper.classList.remove("playing");
  });
}
