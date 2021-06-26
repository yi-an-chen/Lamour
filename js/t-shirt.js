const cardImg = document.querySelectorAll('.card-img-top')
const cardTitle = document.querySelectorAll('.card-title')
const price = document.querySelectorAll('.card-text')

const pageItem = document.querySelectorAll('.page-item')
const n = 6

const tshirt_list = [
    { name: '01_ian-dooley-TT-ROxWj9nA-unsplash.jpg', title: '手指骨骼黑色 T 恤', price: 'NT$ 390' },
    { name: '02_marco-xu-H1hdzdv7Jnw-unsplash.jpg', title: '橘邊米色印花 T 恤', price: 'NT$ 590' },
    { name: '03_anton-kraev-dqFhRa6tXoI-unsplash.jpg', title: '白色印花 T 恤', price: 'NT$ 329' },
    { name: '04_iam_os-n62QWPd76P4-unsplash.jpg', title: '白色黑圖騰 T 恤', price: 'NT$ 299' },
    { name: '05_lili-betelgeuze-Dc4075Ibsk0-unsplash.jpg', title: '黑色圖騰 T 恤', price: 'NT$ 369' },
    { name: '06_klara-kulikova-wox5RCCSUVs-unsplash.jpg', title: '淺灰印花 T 恤', price: 'NT$ 490' },
    { name: '07_faizfajer-V9AUvQ1hb5s-unsplash.jpg', title: '橘邊白色印花 T 恤', price: 'NT$ 459' },
    { name: '08_valerie-sigamani-iAEJd6mTlj0-unsplash.jpg', title: '黑色人物印花 T 恤', price: 'NT$ 499' },
    { name: '09_marco-xu-frpCC-A8mp0-unsplash.jpg', title: '純白 T 恤', price: 'NT$ 349' },
    { name: '10_stephen-leonardi-b24__yFsHcM-unsplash.jpg', title: '黑色印花 T 恤', price: 'NT$ 289' },
    { name: '11_joshua-rawson-harris-fqUyNxdCx54-unsplash.jpg', title: '白色綁帶 T 恤', price: 'NT$ 599' },
    { name: '12_my-networking-apparel-XgBJkn4Y0pM-unsplash.jpg', title: '黑色字母印花 T 恤', price: 'NT$ 309' }
]


pageItem[0].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/t-shirt/' + tshirt_list[i].name)
        cardTitle[i].textContent = tshirt_list[i].title
        price[i].textContent = tshirt_list[i].price
    }
})
pageItem[1].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/t-shirt/' + tshirt_list[i].name)
        cardTitle[i].textContent = tshirt_list[i].title
        price[i].textContent = tshirt_list[i].price
    }
})
pageItem[2].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/t-shirt/' + tshirt_list[i + n].name)
        cardTitle[i].textContent = tshirt_list[i + n].title
        price[i].textContent = tshirt_list[i + n].price
    }
})
pageItem[3].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/t-shirt/' + tshirt_list[i + n].name)
        cardTitle[i].textContent = tshirt_list[i + n].title
        price[i].textContent = tshirt_list[i + n].price
    }
})