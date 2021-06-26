const cardImg = document.querySelectorAll('.card-img-top')
const cardTitle = document.querySelectorAll('.card-title')
const price = document.querySelectorAll('.card-text')

const pageItem = document.querySelectorAll('.page-item')
const n = 6

const dress_list = [
    { name: '01_thien-le-j-gZsffPsf8-unsplash.jpg', title: '紅白方格洋裝', price: 'NT$ 490' },
    { name: '02_tamara-bellis-68csPWTnafo-unsplash.jpg', title: '優雅印花洋裝', price: 'NT$ 649' },
    { name: '03_tamara-bellis-0C2qrwkR1dI-unsplash.jpg', title: '典雅粉色綁帶洋裝', price: 'NT$ 699' },
    { name: '04_priscilla-whendy-p9Ekz8XckR0-unsplash.jpg', title: '細肩小碎花洋裝', price: 'NT$ 549' },
    { name: '05_taylor-brandon-3bmC6bUQ1Yg-unsplash.jpg', title: '青色 V 字洋裝', price: 'NT$ 599' },
    { name: '06_joshua-rondeau-noArI2in4y4-unsplash.jpg', title: '黃色碎花洋裝', price: 'NT$ 499' },
    { name: '07_oksana-taran-Ik4_KMF4YVQ-unsplash.jpg', title: '艷紅長洋裝', price: 'NT$ 799' },
    { name: '08_tamara-bellis-mNZ-GvOQUUY-unsplash.jpg', title: '粉色優雅洋裝', price: 'NT$ 539' },
    { name: '09_ronnie-george-JGGZZ_ZTvCo-unsplash.jpg', title: '黑色圓點洋裝', price: 'NT$ 449' },
    { name: '10_james-forbes-UQMtL0FYtCc-unsplash.jpg', title: '菱形圖騰洋裝', price: 'NT$ 559' },
    { name: '11_tamara-bellis-9p8UKueTork-unsplash.jpg', title: '白底花卉洋裝', price: 'NT$ 499' },
    { name: '12_visualsofdana-eHPYwhBgHtA-unsplash.jpg', title: '兩件式個性白洋裝', price: 'NT$ 529' },
    { name: '13_priscilla-du-preez-u3YSdcoQOPM-unsplash.jpg', title: '滾邊休閒長洋裝', price: 'NT$ 549' },
    { name: '14_baikang-yuan-3DIMYY2zdLI-unsplash.jpg', title: '磚紅色長洋裝', price: 'NT$ 649' },
    { name: '15_jason-yoder-587wFhMMvsY-unsplash.jpg', title: '白色五分袖洋裝', price: 'NT$ 499' },
    { name: '16_tien-vu-ngoc-TtnOjCavink-unsplash.jpg', title: '橘紅橫線洋裝', price: 'NT$ 479' },
    { name: '17_timur-romanov-ZLDtNDUEZ8s-unsplash.jpg', title: '淺藍優雅洋裝', price: 'NT$ 529' },
    { name: '18_vladimir-yelizarov-PfbItsR8Gqo-unsplash.jpg', title: '純白繞頸洋裝', price: 'NT$ 639' },
]


pageItem[0].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/dress/' + dress_list[i].name)
        cardTitle[i].textContent = dress_list[i].title
        price[i].textContent = dress_list[i].price
    }
})
pageItem[1].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/dress/' + dress_list[i].name)
        cardTitle[i].textContent = dress_list[i].title
        price[i].textContent = dress_list[i].price
    }
})
pageItem[2].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/dress/' + dress_list[i + n].name)
        cardTitle[i].textContent = dress_list[i + n].title
        price[i].textContent = dress_list[i + n].price
    }
})
pageItem[3].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/dress/' + dress_list[i + n * 2].name)
        cardTitle[i].textContent = dress_list[i + n * 2].title
        price[i].textContent = dress_list[i + n * 2].price
    }
})

pageItem[4].addEventListener('click', function () {
    for (i = 0; i < n; i++) {
        cardImg[i].setAttribute('src', '../img/product/dress/' + dress_list[i + n * 2].name)
        cardTitle[i].textContent = dress_list[i + n * 2].title
        price[i].textContent = dress_list[i + n * 2].price
    }
})