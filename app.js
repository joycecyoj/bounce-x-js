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
  background-color: rgba(0,0,0,0.7);`;

var overlayContent = document.createElement('div');
overlay.appendChild(overlayContent);
overlayContent.style = `
  background-color: white;
  margin: 20% auto;
  width: 50%;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);`;

var closeBtn = document.createElement('span');
closeBtn.style = `
  float: right;
  color: black;
  font-size: 25px;`;
closeBtn.innerHTML = `&times;`;
// overlayHeader.appendChild(closeBtn);

var overlayHeader = document.createElement('div');
overlayHeader.appendChild(closeBtn);
overlayContent.appendChild(overlayHeader);
overlayHeader.style = `
  padding: 30px;
  background: white;
  color: black;
  margin: 30px;
  font: 30px/1 ars_maquette_prolight,sans-serif;`;
overlayHeader.innerHTML = `<h1>Don't forget to checkout!</h1><hr>`;

var overlayBody = document.createElement('div');
var itemCount = document.getElementsByClassName('minicart-quantity')[0].innerHTML;
var cartTotal = document.querySelectorAll('.order-value')[0].innerHTML;
overlayContent.appendChild(overlayBody);
overlayBody.style = `
  padding: 0px 30px 0px;
    margin-left: 30px;
    margin-right: 30px;
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
var moreText = document.createElement('div')
moreText.innerHTML =`
  <div>
    <p>...and more</p>
  </div>`;
for (let i = 0; i < itemImages.length; i++) {
  if (itemImages.length > 3) {
    for (let j = 0; j < 3; j++) {
      overlayBody.appendChild(itemImages[j]);
    }
      overlayBody.appendChild(moreText);
  } else {
      overlayBody.appendChild(itemImages[i]);
  }
}


var overlayFooter = document.createElement('div');
overlayContent.appendChild(overlayFooter);
overlayFooter.style = `
  font: 24px/1 ars_maquette_prolight,sans-serif;
  display: flex;
  justify-content: center;
  background: white;
  padding: 10px;
  `;



var viewCartBtn = document.createElement('a');
viewCartBtn.style = 'margin:15px 15px;';
viewCartBtn.setAttribute('class', 'primary-button', 'minicart-link-checkout', 'show-for-large');
viewCartBtn.setAttribute('href', 'https://www.marmot.com/cart/');
viewCartBtn.innerHTML = `Go To Cart`;
viewCartBtn.style = `
  background = red;
  border = 1px solid red
  color = white;
  margin: 15px 15px;
  `;

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
overlayFooter.appendChild(viewCartBtn);


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
