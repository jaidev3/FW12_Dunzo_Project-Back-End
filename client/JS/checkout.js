function gotoMain() {
  window.location.href = `index.html`;
}

function geter() {
  console.log("hello world");
  let config = {
    method: "get",
    url: "https://dunzo-masai.herokuapp.com/cart",
  };
  const pr = axios(config);
  pr.then((res) => {
    const data = res.data;
    console.log(res.data);
    cartShow(data);
  });
}
geter();

//Display cart in Right Panel - START
let displayProdBox = document.getElementById(`p-r-t-b`);

function cartShow(data) {
  //Get cart details
  // let products = JSON.parse(localStorage.getItem(`dunzoCart`));
  displayProdBox.innerHTML = null;
  let showProductCount = document.getElementById(`count`);
  let productsCount = 0;
  let showTotalPrice = document.getElementById(`totalPrice`);
  let totalPrice = 0;
  let showTotalPriceFinal = document.getElementById(`totalPriceFinal`);

  data.forEach((el) => {
    let div = document.createElement(`div`);

    let name = document.createElement(`p`);
    name.setAttribute(`id`, `nameIndividual`);
    name.textContent = `◾ ` + el.item;

    let count = document.createElement(`p`);
    count.textContent = el.qty;
    productsCount += el.qty;

    let buttonRemove = document.createElement(`button`);
    buttonRemove.textContent = `-`;
    buttonRemove.onclick = () => {
      removeQuantityOfProduct(el);
    };

    let buttonAdd = document.createElement(`button`);
    buttonAdd.textContent = `+`;
    buttonAdd.onclick = () => {
      addQuantityOfProduct(el);
    };

    let addRemove = document.createElement(`div`);
    addRemove.setAttribute(`id`, `addRemove`);
    addRemove.append(buttonRemove, count, buttonAdd);

    let price = document.createElement(`p`);
    price.setAttribute(`id`, `priceIndividual`);
    // price.textContent = `₹ ` + el.price;
    let individualPrice = el.price;
    console.log(individualPrice);
    price.textContent = individualPrice;
    // totalPrice += +(el.price * el.qty);
    if (individualPrice !== undefined) {
      totalPrice += +individualPrice.substring(1);
    }
    console.log(totalPrice);

    div.append(name, addRemove, price);

    displayProdBox.append(div);
  });
  showProductCount.textContent = `( ${10} Items )`;
  showTotalPrice.textContent = `₹ ` + totalPrice;
  showTotalPriceFinal.textContent = `₹ ` + (totalPrice + 20 + 30);
}
// cartShow();
function addQuantityOfProduct(product) {
  let cart_products = JSON.parse(localStorage.getItem("dunzoCart"));

  cart_products.forEach((prod) => {
    if (prod.name === product.name) {
      prod.qty++;
      localStorage.setItem("dunzoCart", JSON.stringify(cart_products));
      cartShow();
      // return;
    }
  });
}
function removeQuantityOfProduct(product) {
  let cart_products = JSON.parse(localStorage.getItem("dunzoCart"));

  let indexOfProduct = -1;

  for (let i = 0; i < cart_products.length; i++) {
    if (cart_products[i].name == product.name) {
      indexOfProduct = i;
      break;
    }
  }

  if (cart_products[indexOfProduct].qty > 1) {
    cart_products[indexOfProduct].qty--;
  } else {
    cart_products.splice(indexOfProduct, 1);
  }

  localStorage.setItem("dunzoCart", JSON.stringify(cart_products));
  cartShow();
}
//Display cart in Right Panel ---- END

//Payment method -------- START
let pm1 = document.getElementById(`pm1`);
let pm2 = document.getElementById(`pm2`);
let pm3 = document.getElementById(`pm3`);
let pm4 = document.getElementById(`pm4`);

let pdimg = document.getElementById(`pdimg`);
let pd1 = document.getElementById(`pd1`);
let pd2 = document.getElementById(`pd2`);
let pd3 = document.getElementById(`pd3`);
let pd4 = document.getElementById(`pd4`);
let pd5 = document.getElementById(`pd5`);

let pdBox1 = document.getElementById(`payDisplay`);
let pdBox2 = document.getElementById(`payDisplay2`);

// 1
pm1.onclick = function () {
  pm1.style.backgroundColor = `white`;
  pm2.style.backgroundColor = `#f3f3f5`;
  pm3.style.backgroundColor = `#f3f3f5`;
  pm4.style.backgroundColor = `#f3f3f5`;

  pdimg.src = `https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/Simpl.png`;
  pd1.textContent = `Simpl`;
  pd2.textContent = `30% cashback upto Rs 60. No minimum order`;
  pd3.textContent = `Your Simpl account is not linked. Please Link your Account.`;
  pd4.style.display = `none`;
  pd5.textContent = `Link Account`;

  pdBox1.style.display = `block`;
  pdBox2.style.display = `none`;
};

// 2
pm2.onclick = function () {
  pm2.style.backgroundColor = `white`;
  pm1.style.backgroundColor = `#f3f3f5`;
  pm3.style.backgroundColor = `#f3f3f5`;
  pm4.style.backgroundColor = `#f3f3f5`;

  pdimg.src = `https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/PayTM.png`;
  pd1.textContent = `Paytm`;
  pd2.textContent = `Upto 100 cashback, Order above 99`;
  pd3.textContent = `Your Paytm account is not linked. Please Link your Account.`;
  pd4.style.display = `none`;
  pd5.textContent = `Link Account`;

  pdBox1.style.display = `block`;
  pdBox2.style.display = `none`;
};

// 3
pm3.onclick = function () {
  pm3.style.backgroundColor = `white`;
  pm1.style.backgroundColor = `#f3f3f5`;
  pm2.style.backgroundColor = `#f3f3f5`;
  pm4.style.backgroundColor = `#f3f3f5`;

  pdBox1.style.display = `none`;
  pdBox2.style.display = `block`;
};

// 4
pm4.onclick = function () {
  pm4.style.backgroundColor = `white`;
  pm1.style.backgroundColor = `#f3f3f5`;
  pm2.style.backgroundColor = `#f3f3f5`;
  pm3.style.backgroundColor = `#f3f3f5`;

  pdimg.src = `https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/UPI.png`;
  pd1.textContent = `Add New UPI ID`;
  pd2.textContent = null;
  pd3.textContent = `* Enter UPI ID`;
  pd4.style.display = `block`;
  pd5.textContent = `Verify & Pay`;

  pdBox1.style.display = `block`;
  pdBox2.style.display = `none`;
};
//Payment method -------- END

//Credit card Modal --------- START
let payModal = document.getElementById(`payModal`);
let payModalBtn = document.getElementById(`payDisplay2`);
var span = document.getElementById(`close`);
payModalBtn.onclick = function () {
  payModal.style.display = `block`;
};
span.onclick = function () {
  payModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == payModal) {
    payModal.style.display = "none";
  }
};
//Credit card Modal --------- END

//Credit Card Validations -------- START
let form_details = document.getElementById(`payForm`);
let warning = document.getElementById(`warning`);
let finishBtn = document.getElementById(`finishBtn`);

finishBtn.addEventListener(`click`, function (e) {
  e.preventDefault();
  var validation_emptyFields = 0;
  var validation_Number = 0;
  var validation_CVV = 0;
  for (let i = 0; i < form_details.length - 1; i++) {
    if (form_details[i].value == `` || form_details[i].value == null) {
      validation_emptyFields++;
    }
  }
  if (form_details[0].value.length != 16) {
    validation_Number++;
  }
  if (form_details[2].value.length != 3) {
    validation_CVV++;
  }

  if (validation_emptyFields > 0) {
    warning.textContent = `* One or more fields are empty`;
  } else if (validation_Number > 0) {
    warning.textContent = `* Enter a valid 16-digit card number`;
  } else if (validation_CVV > 0) {
    warning.textContent = `* CVV is the unique 3 dight number at the back of your card`;
  } else {
    window.location.href = `thankYou.html`;
  }
});
//Credit Card Validations -------- END
