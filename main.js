const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ARRIVAL",
    price: 119,
    colors: [
      {
        code: "black",
        img: "wmen.jpeg",
      },
      {
        code: "darkblue",
        img: "wmen2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "NEW SEASONS",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "a1.webp",
      },
      {
        code: "green",
        img: "a2.webp",
      },
    ],
  },
  {
    id: 3,
    title: "HOT COLLECTIONS",
    price: 109,
    colors: [
      // {
      //   code: "lightgray",
      //   img: "a5.png",
      // },
      {
        code: "green",
        img: "a6.webp",
      },
    ],
  },
  {
    id: 4,
    title: "FASHIONHOLIC",
    price: 129,
    colors: [
      {
        code: "black",
        img: "a7.webp",
      },
      {
        code: "lightgray",
        img: "a11.webp",

      },
    ],
  },
  {
    id: 5,
    title: "WINTER",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "a8..webp",
      },
      {
        code: "black",
        img: "a12.webp",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
