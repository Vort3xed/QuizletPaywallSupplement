// content.js
const divClassToRemove = "ReactModalPortal";

function removeStringFromClassDefinitions(targetString) {

  let hasDivsWithString = true;

  while (hasDivsWithString) {
    const divElements = document.querySelectorAll("div");

    hasDivsWithString = false;

    for (const div of divElements) {
      if (div.classList.contains(targetString)) {
        div.classList.remove(targetString);
        hasDivsWithString = true;
      }
    }
  }
}


function removeDivByClass(className) {
  const divToRemove = document.querySelector(`.${className}`);
  if (divToRemove) {
    divToRemove.remove();
  }
}

function clickButtonByClass(className) {
  const button = document.querySelector(`.${className}`);
  if (button) {
    button.click();
  }
}

function clickButtonByAriaLabel(ariaLabel) {
  const button = document.querySelector(`[aria-label="${ariaLabel}"]`);
  if (button) {
    button.click();
  }
}
function startScroll() {
  let scrollDistance = 0;
  const scrollInterval = setInterval(() => {
    window.scrollBy(0, 10);
    scrollDistance += 10;

    if (scrollDistance >= 200) {
      clearInterval(scrollInterval);
    }
  }, 100);
}


function startScrollDown() {
  console.log("scrolldown has been called");
  let scrollDistance = 0;
  const scrollInterval = setInterval(() => {
    window.scrollBy(0, 10);
    scrollDistance += 10;
    if (scrollDistance >= 200) {
      clearInterval(scrollInterval);
    }
  }, 100);
}


function startScrollUp() {
  console.log("scrollup has been called");
  let scrollDistance = 0;
  const scrollInterval = setInterval(() => {
    window.scrollBy(0, -10);
    scrollDistance += 10;

    if (scrollDistance >= 200) {
      clearInterval(scrollInterval);
    }
  }, 100);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "removeDiv") {
    removeDivByClass("ReactModalPortal");
    clickButtonByAriaLabel("Show all steps");
  } else if (message.action === "startScrollDown") {
    startScrollDown();
  } else if (message.action === "startScrollUp") {
    startScrollUp();
  } else if (message.action === "removeStringFromClass") {
    removeStringFromClassDefinitions("b1sa2ccx");
  }
});
