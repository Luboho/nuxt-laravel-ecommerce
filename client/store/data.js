export const state = () => ({
  categories: [
    {
      id: 1,
      name: "Men",
      slug: "men",
      parentCat: null,
    },
    {
      id: 2,
      name: "Women",
      slug: "women",
      parentCat: null,
    },
    {
      id: 3,
      name: "Children",
      slug: "children",
      parentCat: null,
    },
    {
      id: 4,
      name: "Unisex",
      slug: "unisex",
      parentCat: null,
    },
    {
      id: 5,
      name: "Discounts",
      slug: "disccounts",
      parentCat: null,
    },
    {
      id: 6,
      name: "Brands",
      slug: "brands",
      parentCat: null,
    },

  ],

  subCategories: [
    {
      id: 1,
      name: "Shoes",
      slug: "shoes",
      parentId: 1,
    },
    {
      id: 2,
      name: "T-shirts",
      slug: "t_shirts",
      parentId: 1,
    },
    {
      id: 3,
      name: "Underwear",
      slug: "underwear",
      parentId: 1,
    },
    {
      id: 4,
      name: "Brass",
      slug: "brass",
      parentId: 2,
    },
    {
      id: 5,
      name: "Socks",
      slug: "socks",
      parentId: 2,
    },
    {
      id: 6,
      name: "Jackets",
      slug: "jackets",
      parentId: 2,
    },
    {
      id: 7,
      name: "Pants",
      slug: "pants",
      parentId: 3,
    },
    {
      id: 8,
      name: "Gloves",
      slug: "gloves",
      parentId: 3,
    },
    {
      id: 9,
      name: "Scarfs",
      slug: "scarfs",
      parentId: 3,
    },
    {
      id: 10,
      name: "Hats",
      slug: "hats",
      parentId: 4,
    },

  ],

  product: {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'border-gray-200 text-white', inStock: true},
      { name: 'Gray', class: 'bg-gray-200 text-gray-200', inStock: false},
      { name: 'Black', class: 'bg-gray-900 text-gray-900', inStock: true},
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: false },
      { name: 'M', inStock: true },
      { name: 'L', inStock: false },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },

    reviews: { href: '#', average: 4, totalCount: 117 }
  })
