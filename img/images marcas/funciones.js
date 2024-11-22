<script>
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const brandsContainer = document.querySelector(".brands-container");

  // Evento para desplazar hacia la izquierda
  leftBtn.addEventListener("click", () => {
    brandsContainer.scrollBy({
      left: -300, // Desplaza 300px hacia la izquierda
      behavior: "smooth",
    });
  });

  // Evento para desplazar hacia la derecha
  rightBtn.addEventListener("click", () => {
    brandsContainer.scrollBy({
      left: 300, // Desplaza 300px hacia la derecha
      behavior: "smooth",
    });
  });
</script>
