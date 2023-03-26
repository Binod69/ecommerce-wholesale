import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'binod',
      email: 'binod@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'ram',
      email: 'ram@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Macbook Air',
      slug: 'macbook air',
      category: 'Macbook',
      image: '/images/macbook air.jpg',
      price: 120000,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description:
        '2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold',
    },

    {
      name: 'Macbook Pro',
      slug: 'macbook pro',
      category: 'Laptop',
      image: '/images/macbook pro.jpg',
      price: 180000,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 7,
      countInStock: 13,
      description:
        '2021 Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Grey',
    },

    {
      name: 'IPhone 13',
      slug: 'iphone 13',
      category: 'Mobile',
      image: '/images/iphone13.jpg',
      price: 110000,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 7,
      countInStock: 20,
      description: 'Apple iPhone 13 (128GB) - Green',
    },

    {
      name: 'IPhone 13 Pro Max',
      slug: 'iphone 13 pro max',
      category: 'Mobile',
      image: '/images/iphone13promax.jpg',
      price: 170000,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 7,
      countInStock: 10,
      description: 'Apple iPhone 13 Pro Max (128GB) - Sierra Blue',
    },

    {
      name: 'Airpod Pro 3rd Gen',
      slug: 'airpod pro 3rd gen',
      category: 'Headphone',
      image: '/images/airpod.jpeg',
      price: 30000,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 7,
      countInStock: 10,
      description: 'New Apple AirPods (3rd Generation)',
    },

    {
      name: 'Apple Watch',
      slug: 'apple watch',
      category: 'Watch',
      image: '/images/applewatch.jpg',
      price: 50000,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 7,
      countInStock: 10,
      description:
        'Apple Watch Series 7 (GPS, 41mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular',
    },

    {
      name: 'Sony Bravia',
      slug: 'sony bravia',
      category: 'TV',
      image: '/images/sony.jpg',
      price: 100000,
      brand: 'Sony',
      rating: 4.5,
      numReviews: 7,
      countInStock: 10,
      description:
        '164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black) (2022 Model) | with Alexa Compatibility',
    },
  ],
};

export default data;
