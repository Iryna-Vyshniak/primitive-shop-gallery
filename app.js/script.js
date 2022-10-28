// OOP
/*
const GoodsList = {
  products: [
    {
      title: 'Exercitation ex minim',
      image: './img/climbing-min.jpg',
      alt: 'Climbing',
      width: 400,
      id: 1,
      price: 200,
    },
    {
      title: 'Aliquip nulla consectetur',
      image: './img/sea-min.jpg',
      alt: 'Sea',
      width: 400,
      id: 2,
      price: 300,
    },
    {
      title: 'Laboris dolore proident',
      image: './img/photographer-min.jpg',
      alt: 'Photographer',
      width: 400,
      id: 3,
      price: 250,
    },
    {
      title: 'Officia eiusmod proident',
      image: './img/thin-min.jpg',
      alt: 'Thin',
      width: 400,
      id: 4,
      price: 150,
    },
    {
      title: 'Duis veniam esse voluptate',
      image: './img/alessio-min.jpg',
      alt: 'Alessio',
      width: 400,
      id: 5,
      price: 550,
    },
    {
      title: 'Deserunt consequat proident',
      image: './img/boat-min.jpg',
      alt: 'Boat',
      width: 400,
      id: 6,
      price: 250,
    },
    {
      title: 'Do sint ad sint nulla',
      image: './img/cuevas-min.jpg',
      alt: 'Cuevas',
      width: 400,
      id: 7,
      price: 350,
    },
    {
      title: 'Deserunt consequat proident',
      image: './img/friends-min.jpg',
      alt: 'Friends',
      width: 400,
      id: 8,
      price: 550,
    },
    {
      title: 'Do aliquip culpa',
      image: './img/girl-min.jpg',
      alt: 'Sea',
      width: 400,
      id: 9,
      price: 750,
    },
    {
      title: 'Dexercitationure occaecat',
      image: './img/ireland-min.jpg',
      alt: 'Island',
      width: 400,
      id: 10,
      price: 250,
    },
    {
      title: 'Nostrud eiusmod',
      image: './img/mount-min.jpg',
      alt: 'Mount',
      width: 400,
      id: 11,
      price: 550,
    },
    {
      title: 'Velit officia qui dolor',
      image: './img/street-min.jpg',
      alt: 'Street',
      width: 400,
      id: 12,
      price: 250,
    },
    {
      title: 'Duis veniam esse voluptate',
      image: './img/train-min.jpg',
      alt: 'Train',
      width: 400,
      id: 13,
      price: 150,
    },
    {
      title: 'Tempor magna ad consectetur',
      image: './img/water-house-min.jpg',
      alt: 'Water house',
      width: 400,
      id: 14,
      price: 250,
    },
    {
      title: 'Reprehenderit',
      image: './img/bridge-min.jpg',
      alt: 'Bridge',
      width: 400,
      id: 15,
      price: 650,
    },
    {
      title: 'Enim ipsum mollit',
      image: './img/hot-girl-min.jpg',
      alt: 'China',
      width: 400,
      id: 16,
      price: 750,
    },
  ],

  // show these products in html in #id gallery
  render() {
    //   <ul></ul>
    const parentSet = document.getElementById('gallery');

    for (const item of this.products) {
      //  <li>...</li>
      let element = document.createElement('li');

      element.id = 'good-' + item.id;
      element.className = 'gallery__item';

      let itemLink = document.createElement('a');
      itemLink.setAttribute('href', '#');
      itemLink.classList.add('gallery__item-link');

      let thumbImg = document.createElement('div');
      thumbImg.classList.add('gallery__item-thumb');

      let img = document.createElement('img');
      img.className = 'gallery__item-img';
      img.src = item.image;
      img.alt = item.alt;
      img.width = item.width;

      let elementBlock = document.createElement('div');
      elementBlock.classList.add('gallery__item-descr');

      let title = document.createElement('h2');
      title.textContent = item.title;
      title.className = 'gallery__item-title title';

      let price = document.createElement('p');
      price.textContent = item.price + '$';
      price.className = 'gallery__item-price';

      let button = document.createElement('button');
      button.textContent = 'Buy';
      button.className = 'buy-btn btn';

      //   li > img + div > title + price + btn
      thumbImg.appendChild(img);

      elementBlock.appendChild(title);
      elementBlock.appendChild(price);
      elementBlock.appendChild(button);

      itemLink.appendChild(thumbImg);
      itemLink.appendChild(elementBlock);
      element.appendChild(itemLink);

      // ul + li...
      parentSet.appendChild(element);
    }
  },
};

GoodsList.render();
*/

class Component {
  myFavouriteMovie = 'Exercitation ex minim';
  constructor(id) {
    this.parentElementId = id;
  }

  createRenderedElement(tag, className, attributes, content) {
    let element = document.createElement(tag);
    element.className = className;

    if (attributes) {
      for (const attribute of attributes) {
        element.setAttribute(attribute.name, attribute.value);
      }
    }
    if (content) element.innerHTML = content;
    return element;
  }
}

class GoodItem {
  // shopName = 'My Movie Shop';
  // category = 'Movies';

  id = '';
  title = 'default title';
  image = '';
  alt = '';
  width = 0;
  price = 0;

  constructor(id, title, img, alt, width, price) {
    this.id = id;
    this.title = title;
    this.image = img;
    this.alt = alt;
    this.width = width;
    this.price = price;
  }
}

class GoodList {
  // shopName = 'My Movie Shop';

  products = [
    new GoodItem(1, 'Exercitation ex minim', './img/climbing-min.jpg', 'Climbing', 400, 200),
    new GoodItem(2, 'Aliquip nulla consectetur', './img/sea-min.jpg', 'Sea', 400, 300),
    new GoodItem(3, 'Laboris dolore proident', './img/photographer-min.jpg', 'Photographer', 400, 250),
    new GoodItem(4, 'Officia eiusmod proident', './img/thin-min.jpg', 'Thin', 400, 150),
    new GoodItem(5, 'Duis veniam esse voluptate', './img/alessio-min.jpg', 'Alessio', 400, 550),
    new GoodItem(6, 'Deserunt consequat proident', './img/boat-min.jpg', 'Boat', 400, 250),
    new GoodItem(7, 'Do sint ad sint nulla', './img/cuevas-min.jpg', 'Cuevas', 400, 350),
    new GoodItem(8, 'Deserunt consequat proident', './img/friends-min.jpg', 'Friends', 400, 550),
    new GoodItem(9, 'Do aliquip culpa', './img/girl-min.jpg', 'Sea', 400, 750),
    new GoodItem(10, 'Dexercitationure occaecat', './img/ireland-min.jpg', 'Island', 400, 250),
    new GoodItem(11, 'Nostrud eiusmod', './img/mount-min.jpg', 'Mount', 400, 550),
    new GoodItem(11, 'Velit officia qui dolor', './img/street-min.jpg', 'Street', 400, 250),
    new GoodItem(13, 'Duis veniam esse voluptate', './img/train-min.jpg', 'Train', 400, 150),
    new GoodItem(14, 'Tempor magna ad consectetur', './img/water-house-min.jpg', 'Water house', 400, 250),
    new GoodItem(15, 'Reprehenderit', './img/bridge-min.jpg', 'Bridge', 400, 650),
    new GoodItem(16, 'Enim ipsum mollit', './img/hot-girl-min.jpg', 'China', 400, 750),
  ];

  constructor() { }

  // show these products in html in #id gallery
  render() {
    const parentSet = document.getElementById('gallery'); //   <ul></ul>

    for (const item of this.products) {
      let renderedGood = new RenderedGood(
        item.id,
        item.a,
        item.thumb,
        item.image,
        item.alt,
        item.width,
        item.descr,
        item.title,
        item.price,
        item.btn
      );

      console.log(renderedGood);
      const renderedElement = renderedGood.render();

      parentSet.appendChild(renderedElement); // ul > li...
    }
  }
}

class RenderedGood extends Component {
  constructor(id, a, thumb, image, alt, width, descr, title, price, btn) {
    super('gallery');

    this.id = id;
    this.a = a;
    this.thumb = thumb;
    this.image = image;
    this.alt = alt;
    this.width = width;
    this.descr = descr;
    this.title = title;
    this.price = price;
    this.btn = btn;
  }
  render() {
    //  <li>...</li>
    let element = this.createRenderedElement('li', 'gallery__item', [
      { name: 'id', value: 'good-' + this.id },
    ]);
    let itemLink = this.createRenderedElement('a', 'gallery__item-link', [
      { name: 'href', value: '#' },
    ]);
    let thumbImg = this.createRenderedElement('div', 'gallery__item-thumb');
    let img = this.createRenderedElement('img', 'gallery__item-img', [
      { name: 'src', value: this.image },
      { name: 'alt', value: this.alt },
      { name: 'width', value: this.width },
    ]);
    let elementBlock = this.createRenderedElement('div', 'gallery__item-descr');
    let title = this.createRenderedElement('h2', 'gallery__item-title title', [], this.title);
    let price = this.createRenderedElement('p', 'gallery__item-price', [], this.price + '$');
    let button = this.createRenderedElement('button', 'buy-btn btn', [{ name: 'data-action', value: 'counter' }], 'Buy');
    button.addEventListener('click', this.addGoodToCart.bind(this));

    //   li > img + div > title + price + btn
    thumbImg.appendChild(img);

    elementBlock.appendChild(title);
    elementBlock.appendChild(price);
    elementBlock.appendChild(button);

    itemLink.appendChild(thumbImg);
    itemLink.appendChild(elementBlock);
    element.appendChild(itemLink);

    return element;
  }

  addGoodToCart() {
    Shop.cart.updateCart(this);
  }
}

class Cart {
  #personalInformation = '00001'; // # before => for doesn`t show to console, will be underfined
  constructor() {
    this.goodsInCart = [];
  }

  get totalPrice() {
    const sum = this.goodsInCart.reduce((prevValue, currentItem) => {
      return prevValue + currentItem.price;
    }, 0);
    return sum;
  }
  updateCart(good) {
    this.goodsInCart.push(good);

    let cartElement = document.getElementById('cart');

    cartElement.querySelector('.goods-in-cart span').innerHTML = this.goodsInCart.length;
    cartElement.querySelector('.total-price span').innerHTML = this.totalPrice;

    console.log(this);
  }
}

class Shop {
  static goodList;
  static cart;

  static init() {
    this.goodList = new GoodList();
    this.cart = new Cart();
    this.goodList.render();
  }
}

Shop.init();


// bell-notification cart 
const desiredTag = document.querySelector('.notification-bell-container');
desiredTag.setAttribute("current - count", 7);


let counterValue = 0;
// const valueRef = document.querySelector('current-count');
const counterBtn = document.querySelector('[data-action="counter"]')


const onClickCounterBtn = event => {
  counterValue += 1;
  desiredTag.textContent = counterValue;
}
counterBtn.addEventListener('click', onClickCounterBtn);

