// OOP

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
      image: '../img/alessio-min.jpg',
      alt: 'Alessio',
      width: 400,
      id: 5,
      price: 550,
    },
    {
      title: 'Deserunt consequat proident',
      image: '../img/boat-min.jpg',
      alt: 'Boat',
      width: 400,
      id: 6,
      price: 250,
    },
    {
      title: 'Do sint ad sint nulla',
      image: '../img/cuevas-min.jpg',
      alt: 'Cuevas',
      width: 400,
      id: 7,
      price: 350,
    },
    {
      title: 'Deserunt consequat proident',
      image: '../img/friends-min.jpg',
      alt: 'Friends',
      width: 400,
      id: 8,
      price: 550,
    },
    {
      title: 'Do aliquip culpa',
      image: '../img/girl-min.jpg',
      alt: 'Sea',
      width: 400,
      id: 9,
      price: 750,
    },
    {
      title: 'Dexercitationure occaecat',
      image: '../img/ireland-min.jpg',
      alt: 'Island',
      width: 400,
      id: 10,
      price: 250,
    },
    {
      title: 'Nostrud eiusmod',
      image: '../img/mount-min.jpg',
      alt: 'Mount',
      width: 400,
      id: 11,
      price: 550,
    },
    {
      title: 'Velit officia qui dolor',
      image: '../img/street-min.jpg',
      alt: 'Street',
      width: 400,
      id: 12,
      price: 250,
    },
    {
      title: 'Duis veniam esse voluptate',
      image: '../img/train-min.jpg',
      alt: 'Train',
      width: 400,
      id: 13,
      price: 150,
    },
    {
      title: 'Tempor magna ad consectetur',
      image: '../img/water-house-min.jpg',
      alt: 'Water house',
      width: 400,
      id: 14,
      price: 250,
    },
    {
      title: 'Reprehenderit',
      image: '../img/bridge-min.jpg',
      alt: 'Bridge',
      width: 400,
      id: 15,
      price: 650,
    },
    {
      title: 'Enim ipsum mollit',
      image: '../img/hot-girl-min.jpg',
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
      price.textContent = item.price + 'ua';
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

/*
class GoodItem {
  id = '';
  title = 'default title';
  image = '';
  alt = '';
  width = 0;
  price = 0;
}

const good = new GoodItem();

console.log(good);
*/
