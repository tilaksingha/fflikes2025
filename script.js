<audio id="clickSound" src="click.wav"></audio>
<audio id="introSound" src="XtremerLiveFF.wav"></audio>
<audio id="applySound" src="XApplying.wav"></audio>

<script>
  let soundPlayed = false;
  window.addEventListener("click", () => {
    if (soundPlayed) return;
    soundPlayed = true;
    document.getElementById("clickSound").play();
    setTimeout(() => {
      document.getElementById("introSound").play();
    }, 5000);
  });

  function playApplySound() {
    document.getElementById("applySound").play();
  }
</script>
