const cartList = [];
const PPrice = [];
console.log(PPrice);

const addToCart = (name, qty, price) => {
  const indexItem = cartList.findIndex((data) => data.name === name);
  if (indexItem > -1) {
    cartList[indexItem].qty += 1;
    cartList[indexItem].price *= 2;
  } else {
    cartList.push({
      name,
      qty,
      price,
    });
  }
  sessionStorage.setItem("carts", JSON.stringify(cartList));
};

const removeFromCart = (name) => {
  const indexItem = cartList.findIndex((data) => data.name === name);
  if (indexItem > -1) {
    if (cartList[indexItem].qty > 1) {
      cartList[indexItem].qty -= 1;
      cartList[indexItem].price /= 2;
    }
  } else {
    cartList.splice(indexItem, 1);
  }
  sessionStorage.setItem("carts", JSON.stringify(cartList));
};
