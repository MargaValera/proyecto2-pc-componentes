import './src/component/link/header'
import './style.css'

const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1065/10658122/1779-msi-vector-gp77-13vf-022xes-intel-core-i7-13700h-32gb-1tb-ssd-rtx-4060-173.jpg'
  },
  {
    name: 'ASUS VivoBook 15 12gb SSD',
    price: 649,
    stars: 4,
    reviews: 25,
    seller: 'Amazon',
    image:
      'https://img.pccomponentes.com/articles/1072/10727018/180-asus-vivobook-15-m1502ya-nj153w-amd-ryzen-7-7730u-16gb-512gb-ssd-156-4142a3f1-d938-4452-b0e5-f9c5d4a91915.jpg'
  },
  {
    name: 'ASUS ROG Strix G16 G614JI',
    price: 1579,
    stars: 4.5,
    reviews: 189,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1072/10720423/3633-asus-rog-strix-g16-g614ji-n3163-intel-core-i7-13650hx-32gb-1tb-ssd-rtx-4070-16-mejor-precio.jpg'
  },
  {
    name: 'ASUS TUF Gaming A15 2023',
    price: 599,
    stars: 4.8,
    reviews: 162,
    seller: 'Amazon',
    image:
      'https://img.pccomponentes.com/articles/1073/10733266/1752-hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'MSI Vector GP77 13VF-022XES',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1072/10726871/1155-asus-vivobook-15-f1502za-ej650w-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'HP Victus 15-fa0012ns Intel Core i5',
    price: 749,
    stars: 4.3,
    reviews: 68,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1057/10579901/1975-hp-victus-15-fa0012ns-intel-core-i5-12500h-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: 'Dell Vostro 3520',
    price: 1299,
    stars: 5,
    reviews: 88,
    seller: 'AppleStore',
    image:
      'https://img.pccomponentes.com/articles/1072/10720412/1198-asus-tuf-gaming-a15-2023-fa507xi-lp024-amd-ryzen-9-7940hs-32gb-512gb-ssd-rtx-4070-156.jpg'
  },
  {
    name: 'MSI Modern 15 B7M',
    price: 589,
    stars: 4.9,
    reviews: 134,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1074/10741661/1707-msi-modern-15-b7m-243xes-amd-ryzen-7-7730u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: 'Apple Macbook Air Apple M2',
    price: 1169,
    stars: 5,
    reviews: 36,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1039/10392472/1204-apple-macbook-air-apple-m2-8gb-256gb-ssd-gpu-octa-core-136-midnight.jpg'
  },
  {
    name: 'Lenovo IdeaPad Slim 3',
    price: 469,
    stars: 4.5,
    reviews: 237,
    seller: 'PcComponentes',
    image:
      'https://img.pccomponentes.com/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg'
  }
]

let sellers = []

//! filtro de limpieza
const cleanFilter = document.createElement('button')
cleanFilter.textContent = 'limpiar Filtros'
cleanFilter.className = 'clean'
document.getElementById('filtros').appendChild(cleanFilter)

cleanFilter.addEventListener('click', (event) => {
  numeric.value = 0
  sellers = ''
  console.log(products)
  printPc(products)
})

//! Filtro numérico
const PriceDiv = document.createElement('div')
const numeric = document.createElement('input')
numeric.setAttribute('type', 'number')
numeric.placeholder = 'Inserta un precio'

const buttonSearch = document.createElement('button')
buttonSearch.textContent = 'search'
PriceDiv.appendChild(numeric)
PriceDiv.appendChild(buttonSearch)
document.getElementById('filtros').appendChild(PriceDiv)

const filterProductsByPrice = (price) => {
  return products.filter((product) => product.price <= price)
}

buttonSearch.addEventListener('click', (event) => {
  printPc(filterProductsByPrice(numeric.value))
})

//! filtro de vendedores
const getSellersList = (products) => {
  const sellersSet = new Set()
  products.forEach((product) => {
    sellersSet.add(product.seller)
  })
  return sellersSet
}

const createSellerOptions = (sellers) => {
  const select = document.createElement('select')
  select.placeholder = 'Buscar vendedor'

  sellers.forEach((seller) => {
    const option = document.createElement('option')
    option.value = seller
    option.textContent = seller
    select.appendChild(option)
  })

  return select
}

const filterProductsBySeller = (seller) => {
  return products.filter((product) => product.seller === seller)
}

const displayFilteredProducts = (filteredProducts, selectedSeller) => {
  const resultProductSelected = []
  const actualProducts = document.querySelector('#app')
  actualProducts.innerHTML = ''
  for (const product of filteredProducts) {
    if (product.seller === selectedSeller) {
      resultProductSelected.push(product)
    }
  }

  printPc(resultProductSelected)
}

const initSellerSelect = () => {
  sellers = getSellersList(products)
  const sellerSelect = createSellerOptions(sellers)
  sellerSelect.addEventListener('change', (event) => {
    const selectedSeller = event.target.value
    const filteredProducts = filterProductsBySeller(selectedSeller)
    displayFilteredProducts(filteredProducts, selectedSeller)
  })
  document.getElementById('filtros').appendChild(sellerSelect)
}

initSellerSelect()

const printPc = (pcs) => {
  const pcContainer = document.querySelector('#app')
  pcContainer.innerHTML = ''

  for (const pc of pcs) {
    const divpc = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const price = document.createElement('p')
    const review = document.createElement('p')
    const seller = document.createElement('span')
    const divStars = document.createElement('div')

    for (let i = 1; i <= 6; i++) {
      const star = document.createElement('div')
      star.className = 'estrella'
      if (i <= pc.stars) {
        star.classList.add('rellena')
      }
      divStars.appendChild(star)
    }

    img.src = pc.image
    name.textContent = pc.name
    price.textContent = pc.price
    review.textContent = pc.reviews
    seller.textContent = pc.seller

    divpc.className = 'flex-container'
    divImg.className = 'img-container'
    divStars.classList.add('estrella', 'flex-container')

    pcContainer.appendChild(divpc)
    divpc.appendChild(divImg)
    divpc.appendChild(divStars)
    divImg.appendChild(img)
    divpc.appendChild(name)
    divpc.appendChild(price)
    divpc.appendChild(review)
    divpc.appendChild(seller)
  }
}
printPc(products)

const linesContainer = document.createElement('div')
linesContainer.className = 'lines'

for (let i = 0; i < 6; i++) {
  const line = document.createElement('div')
  line.className = 'line'
  linesContainer.appendChild(line)
}
document.body.appendChild(linesContainer)
console.log('hola')
