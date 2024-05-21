const inputs = document.querySelectorAll(".controls input");

const handleUpdate = (event) => {
  const val = event.target;
  const suffix = val.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${val.name}`,
    val.value + suffix
  );
};

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
});
inputs.forEach((input) => {
  input.addEventListener("mousemove", handleUpdate);
});
