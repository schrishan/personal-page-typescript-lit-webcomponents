export const audioOnClick = () => {
  if (!document.body.classList.contains("audio-muted")) {
    const audio = new Audio("./assets/audio/click.mp3");
    audio.play();
  }
};

export const scrollTo = (id: any) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
}