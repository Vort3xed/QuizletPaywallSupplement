// content.js
// const divClassToRemove = "ReactModal__Overlay ReactModal__Overlay--after-open oz4nps6 openAnimation";
const divClassToRemove = "ReactModalPortal";

// function clickButtonByClass(className) {
//     const button = document.querySelector(`.${className}`);
//     if (button) {
//       button.click();
//     }
// }

// function removeDiv() {
//   const divToRemove = document.querySelector(`div.${divClassToRemove}`);
//   if (divToRemove) {
//     divToRemove.remove();
//     clickButtonByClass("AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding AssemblyButtonBase--fullWidth");
//   }
// }

// // Listen for messages from the popup
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "removeDiv") {
//     removeDiv();
//   }
// });



function removeDivByClass(className) {
    const divToRemove = document.querySelector(`.${className}`);
    if (divToRemove) {
      divToRemove.remove();
    }
  }
  
  // Function to click the button with the specified class
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
    // Set an interval to scroll down gradually
    let scrollDistance = 0;
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, 10); // Scroll down by 10 pixels
      scrollDistance += 10;
      
      // Adjust the scrolling duration as needed
      if (scrollDistance >= 200) {
        clearInterval(scrollInterval); // Stop scrolling after reaching a certain distance
      }
    }, 100); // Scroll every 100 milliseconds
  }


  function startScrollDown() {
    // Set an interval to scroll down gradually
    let scrollDistance = 0;
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, 10); // Scroll down by 10 pixels
      scrollDistance += 10;
      
      // Adjust the scrolling duration as needed
      if (scrollDistance >= 200) {
        clearInterval(scrollInterval); // Stop scrolling after reaching a certain distance
      }
    }, 100); // Scroll every 100 milliseconds
  }
  
  // Function to start scrolling up
  function startScrollUp() {
    // Set an interval to scroll up gradually
    let scrollDistance = 0;
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, -10); // Scroll up by 10 pixels
      scrollDistance += 10;
      
      // Adjust the scrolling duration as needed
      if (scrollDistance >= 200) {
        clearInterval(scrollInterval); // Stop scrolling after reaching a certain distance
      }
    }, 100); // Scroll every 100 milliseconds
  }
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "removeDiv") {
      removeDivByClass("ReactModalPortal");
      clickButtonByAriaLabel("Show all steps");
    //   startScroll();
    }else if (message.action === "startScrollDown") {
        startScrollDown();
      } else if (message.action === "startScrollUp") {
        startScrollUp();
      }
  });
