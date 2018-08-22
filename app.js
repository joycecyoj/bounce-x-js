// Write a JavaScript snippet that can be run in the console of the browser that does the following:

// Extracts the number of items in the cart, the cart total, and the item images from the page. Store them in variables.

// inputQtyArr = document.querySelectorAll('input.input-text.input-change-value');
// itemCount = qtyTotal(inputQtyArr);

// function qtyTotal(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i].value);
//   }
//   return sum;
// }

// cartTotal = document.getElementsByClassName('order-value')[1].innerText;

// itemImages = document.querySelectorAll('div.mini-cart-container img');

// Create a trigger that activates when the user scrolls into the bottom 10% of the page.

// The trigger should show a centered overlay on top of the site that displays the information gathered above and two buttons. One button should close the overlay and the other should take the user to the cart page. It should have a style consistent with the website. Design matters.

// Behind the overlay add a semi­transparent black background that obscures the site. The overlay should be able to trigger multiple times if dismissed.

window.onscroll = function() {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight * 0.9) {
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
overlay.appendChild(overlayContent);
overlayContent.style = `
  background-color: white;
  margin: 20% auto;
  width: 70%;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);`;

var overlayHeader = document.createElement('div');
overlayContent.appendChild(overlayHeader);
overlayHeader.style = `
  padding: 15px;
  background: black;
  color: #fff;
  margin: 0;`;
overlayHeader.innerHTML = `<h1 style="font-size":large>Don't forget to checkout!</h1>`;

var overlayBody = document.createElement('div');
var inputQtyArr = document.querySelectorAll(
  'input.input-text.input-change-value'
);
var itemCount = qtyTotal(inputQtyArr);
var cartTotal = document.getElementsByClassName('order-value')[1].innerText;
overlayContent.appendChild(overlayBody);
overlayBody.style = `
  padding: 10px 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row-wrap;`;
overlayBody.innerHTML = `
  <div>
    <div>
      <b>You have ${itemCount} items in your cart.</b>
    </div>
    <br>
    <div>
      <p>Estimated Total: ${cartTotal}</p>
    </div>
  </div>`;


var itemImages = document.querySelectorAll('div.mini-cart-container img');
if (itemImages > 2) {
  itemImages = itemImages.slice(0,2);
}
for (let i = 0; i < itemImages.length; i++) {
  overlayBody.appendChild(itemImages[i]);
}

var overlayFooter = document.createElement('div');

var closeBtn = document.createElement('span');
overlayHeader.appendChild(closeBtn);
closeBtn.style = `
  float: right;
  color: white;
  font-size: 25px;`;
closeBtn.innerHTML = `&times;`;

closeBtn.addEventListener('click', closeOverlay);
window.addEventListener('click', clickOutside);

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

function qtyTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i].value);
  }
  return sum;
}
