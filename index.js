let imageCard = document.querySelector(".carousal-card");
let arr = [];
let imageCardChild = document.querySelector(".carousal-card-child");
let imageCardChild2 = document.querySelector(".carousal-card-child-2");
let imageCardChild3 = document.querySelector(".carousal-card-child-3");

let left_Arrow = document.querySelector(".arrow-left")
let left_Arrow_1 = document.querySelector(".arrow-left-1")
let left_Arrow_2 = document.querySelector(".arrow-left-2")
let left_Arrow_3 = document.querySelector(".arrow-left-3")
let right_Arrow = document.querySelector(".arrow-right")
let right_Arrow_1 = document.querySelector(".arrow-right-1")
let right_Arrow_2 = document.querySelector(".arrow-right-2")
let right_Arrow_3 = document.querySelector(".arrow-right-3")

let scrollPerClick = 0;
let scrollAmount = 0;


const leftCrack = (classParameter) => {
               classParameter.scrollLeft -= 180;

               if (scrollAmount < 0) {
                              scrollAmount = 0;
               }
               console.log('fsdfd')
}


const rightCrack = (classParameter) => {
               if (scrollAmount <= imageCard.scrollWidth - imageCard.clientWidth) {
                              classParameter.scrollLeft += 180;
               }
               console.log('fsdfd')

}


left_Arrow.addEventListener('click', () => {
               leftCrack(imageCard)
})

left_Arrow_1.addEventListener('click', () => {
               leftCrack(imageCardChild)
})

left_Arrow_2.addEventListener('click', () => {
               leftCrack(imageCardChild2)
})

left_Arrow_3.addEventListener('click', () => {
               leftCrack(imageCardChild3)
})


right_Arrow.addEventListener('click', () => {
               rightCrack(imageCard)
})

right_Arrow_1.addEventListener('click', () => {
               rightCrack(imageCardChild)
})

right_Arrow_2.addEventListener('click', () => {
               rightCrack(imageCardChild2)
})

right_Arrow_3.addEventListener('click', () => {
               rightCrack(imageCardChild3)
})


const amaze = async (classParameter) => {


               const data = await fetch(`./content.json`);
               const resData = await data.json();

               // console.log(i);
               // console.log(resData.image_url);

               // console.log(arr)


               resData.map((i) => {
                              console.log(i.id, 'dddddddddd=');

                              return (
                                             classParameter.insertAdjacentHTML("beforeend",
                                                            `<img id= class="img-${i.id}" src=${i.imgs} height="300px" width="300px" />`
                                             )
                              )

               })







}

amaze(imageCard);
amaze(imageCardChild);
amaze(imageCardChild2);
amaze(imageCardChild3);