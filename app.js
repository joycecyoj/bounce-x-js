// Write a JavaScript snippet that can be run in the console of the browser that does the following:

// Extracts the number of items in the cart, the cart total, and the item images from the page. Store them in variables.

inputQtyArr = document.querySelectorAll('input.input-text.input-change-value');
itemCount = qtyTotal(inputQtyArr);

function qtyTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i].value);
  }
  return sum;
}

cartTotal = document.getElementsByClassName('order-value')[1].innerText;

itemImages = document.querySelectorAll('div.mini-cart-container img');

// Create a trigger that activates when the user scrolls into the bottom 10% of the page.

// The trigger should show a centered overlay on top of the site that displays the information gathered above and two buttons. One button should close the overlay and the other should take the user to the cart page. It should have a style consistent with the website. Design matters.

// Behind the overlay add a semi­transparent black background that obscures the site. The overlay should be able to trigger multiple times if dismissed.

window.onscroll = function() {
  if (window.innerHeight + window.scrollY >= (document.body.scrollHeight) * .9) {
    openOverlay();
    console.log('At the bottom of the page');
  }
};

var overlay = document.createElement('div');
document.body.appendChild(overlay);
overlay.style = `display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);`;

var overlayContent = document.createElement('div');
document.body.appendChild(overlay);
overlayContent.style = `
  background-color: #f4f4f4;
  margin: 23% auto;
  padding: 20px;
  width: 70%;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);`;

var overlayHeader = document.createElement('div');
overlayContent.appendChild(overlayHeader)


var overlayBody = document.createElement('div');



var overlayFooter = document.createElement('div')




closeBtn.addEventListener('click', closeOverlay)
window.addEventListener('click', clickOutside)

function openOverlay() {
  overlay.style.display = 'block';
}

function closeOverlay() {
  overlay.style.display = 'none';
}

function clickOutside(evt) {
  if (evt.target === overlay) {
    overlay.style.display = 'none';
  }
}



// .closeBtn{
//   color: #ccc;
//   float: right;
//   font-size: 30px;
// }


