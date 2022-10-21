// OOP

const GoodsList = {
  products: [
    {
      title: 'Exercitation ex minim',
      image: '../img/climbing-min.jpg',
      alt: 'Climbing',
      width: 400,
      id: 1,
      price: 200,
    },
    {
      title: 'Aliquip nulla consectetur',
      image: '../img/sea-min.jpg',
      alt: 'Sea',
      width: 400,
      id: 2,
      price: 300,
    },
    {
      title: 'Laboris dolore proident.',
      image: '../img/photographer-min.jpg',
      alt: 'Photographer',
      width: 400,
      id: 3,
      price: 250,
    },
    {
      title: 'Officia eiusmod proident',
      image: '../img/thin-min.jpg',
      alt: 'Thin',
      width: 400,
      id: 4,
      price: 150,
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
