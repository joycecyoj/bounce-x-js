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


  var closeHeader= document.createElement('div');
  overlayContent.appendChild(closeHeader)

  var closeBtn = document.createElement('span');
  closeHeader.appendChild(closeBtn);
  closeBtn.style = `
  cursor: pointer;
  margin: 20px 30px 20px 30px;
  float: right;
  color: #cbcbcb;
  font-size: 40px;`;
  closeBtn.innerHTML = `&times;`;

  var overlayHeader = document.createElement('div');
  overlayContent.appendChild(overlayHeader);
  overlayHeader.style = `
  padding-top: 45px;
  border-bottom: 1px solid #cbcbcb;
  margin: 30px 50px 30px 50px;
  font: 30px/1 ars_maquette_prolight,sans-serif;`;
  overlayHeader.innerHTML = `<h1 style="padding-bottom:30px">Don't forget to checkout!</h1>`;


var overlayBody = document.createElement('div');
var itemCount = document.getElementsByClassName('minicart-quantity')[0]
  .innerHTML;
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

var overlayBodyText = document.createElement('div');
overlayBodyText.style = `
  border-right: 1px solid #cbcbcb;
  height: 130px;
  padding-right: 15px;`;
overlayBody.appendChild(overlayBodyText);
overlayBodyText.innerHTML = `
    <div>
      <b>You have ${itemCount} items in your cart.</b>
    </div>
    <br>
    <div>
      <p>Estimated Total: ${cartTotal}</p>
    </div>`;


var itemImages = document.querySelectorAll('div.mini-cart-container img');
var moreText = document.createElement('div');
moreText.innerHTML = `
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
  padding-bottom: 20px;
  `;

var viewCartBtn = document.createElement('a');
viewCartBtn.style = 'margin:15px 15px';
viewCartBtn.setAttribute(
  'class',
  'primary-button',
  'minicart-link-checkout',
  'show-for-large'
);
viewCartBtn.setAttribute('href', 'https://www.marmot.com/cart/');
viewCartBtn.innerHTML = `Go To Cart`;
viewCartBtn.style = `
  background = red;
  border = 1px solid red
  color = white;
  margin: 15px 15px;
  `;

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
window.onscroll = function() {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight * 0.9) {
    if (itemCount > 0) {
      openOverlay();
    }
  }
};
