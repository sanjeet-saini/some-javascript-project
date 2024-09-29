const output = document.querySelector("#output");
const htmlInput = document.querySelector("#html");
const cssInput = document.querySelector("#css");
const jsInput = document.querySelector("#js");

function updateOutput() {
  const htmlCode = htmlInput.value;
  const cssCode = `<style>${cssInput.value}</style>`;
  const jsCode = `<script>${jsInput.value}<\/script>`;
  output.contentDocument.body.innerHTML = htmlCode;
  output.contentDocument.head.innerHTML = cssCode;
  output.contentWindow.eval(jsInput.value);
}

document.querySelectorAll(".left textarea").forEach((textarea) => {
  textarea.addEventListener("keyup", updateOutput);
});

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).value;
  navigator.clipboard.writeText(text).then(() => {
    alert(`${elementId.toUpperCase()} code copied to clipboard!`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}