import multirange from "./multirange";

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", multirange.init);
} else {
  multirange.init();
}
