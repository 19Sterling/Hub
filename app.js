const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products =[
    {
        id: 1,
        title: "AIR FORCE",
        price: 200,
        colors: [
            {
                code: "black",
                img: "./img/Nike-Air-Force-One.png",
            },
            {
                code: "white",
                img: "./img/Air-Force-One-White-Nike-Shoes-.png",
            },
        ],
    },
    {
        id: 2,
        title: "JORDAN",
        price: 250,
        colors: [
            {
                code: "grey",
                img: "./img/kisspng-air-jordan-4-retro-kaws-93-155-3-nike-sports-sho-5b9ab7bc277a33.3884514115368662361617.png",
            },
            {
                code: "white",
                img: "./img/retro.png",
            },
        ],
    },
    {
        id: 3,
        title: "NIKE",
        price: 180,
        colors: [
            {
                code: "blue",
                img: "./img/pngwing.com.png",
            },
            {
                code: "grey",
                img: "./img/pngwing.png",
            },
        ],
    },
    {
        id: 4,
        title: "ADIDAS",
        price: 200,
        colors: [
            {
                code: "black",
                img: "./img/kisspng-nike-free-adidas-shoe-sneakers-hello-sports-5a88aede4ce563.937294001518907102315.png",
            },
            {
                code: "white",
                img: "./img/kisspng-adidas-originals-shoe-white-sneakers-adidas-running-shoes-products-in-kind-5a74dbc75d24f8.2541154815176078793815.png",
            },
        ],
    },
    {
        id: 5,
        title: "CASUAL",
        price: 150,
        colors: [
            {
                code: "white",
                img: "./img/vans-slip-on-shoe-sneakers-clothing-vans-shoes-e5b3accfd5309bc11a8f7ac3b4e4437d.png",
            },
            {
                code: "black",
                img: "./img/nike-air-max-vans-old-skool-sneakers-shoe-vans-old-skool-a6179cfe04d136953a5238ee70271452.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX( ${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change text of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white"
            size.style.color= "black"  
        });
        size.style.backgroundColor= "black"
        size.style.color= "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})
