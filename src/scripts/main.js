function switchTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const theme = document.body.classList[0];
  const music =
    theme === "light-theme"
      ? "src/musics/normal-world.mpeg"
      : "src/musics/inverted-world.mpeg";

  const audio = document.getElementById("music");
  audio.src = music;
  audio.play();
}
