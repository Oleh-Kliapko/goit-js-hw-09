!function(){var t={bodyEl:document.querySelector("body"),startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")},o=null;t.startButton.addEventListener("click",(function(e){t.startButton.setAttribute("disabled","disabled"),o=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopButton.addEventListener("click",(function(e){t.startButton.removeAttribute("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.5ea08859.js.map
