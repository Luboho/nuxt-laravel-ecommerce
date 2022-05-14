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

  viewedProduct: {
    id: 1,
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
        color: 'black'
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
        color: 'white'
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
        color: 'gray'
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
        color: 'red'
      },
      {
        src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        alt: 'Model wearing plain white basic tee.',
        color: 'black'
      },
      {
        src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
        alt: 'Model wearing plain white basic tee.',
        color: 'gray'
      },
      {
        src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        alt: 'Model wearing plain white basic tee.',
        color: 'white'
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

  reviews: { href: '#', average: 4, totalCount: 117 },

  products :
    [
       {
        id: 1,
        name: 'Basic Tee 6-Pack',
        price: '$192',
        quantity: 10,
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            color: 'black'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            color: 'white'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            color: 'gray'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
            color: 'red'
          },
          {
            src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'black'
          },
          {
            src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'gray'
          },
          {
            src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
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
      {
        id: 2,
        name: 'Basic Tee 6-Pack',
        price: '$192',
        quantity: 6,
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            color: 'black'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            color: 'white'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            color: 'gray'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
            color: 'red'
          },
          {
            src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'black'
          },
          {
            src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'gray'
          },
          {
            src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
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
      {
        id: 3,
        name: 'Basic Tee 6-Pack',
        price: '$192',
        quantity: 16,
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            color: 'black'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            color: 'white'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            color: 'gray'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
            color: 'red'
          },
          {
            src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'black'
          },
          {
            src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'gray'
          },
          {
            src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
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
      {
        id: 4,
        name: 'Basic Tee 6-Pack',
        price: '$192',
        quantity: 22,
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            color: 'black'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            color: 'white'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            color: 'gray'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
            color: 'red'
          },
          {
            src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'black'
          },
          {
            src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'gray'
          },
          {
            src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
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
      {
        id: 5,
        name: 'Basic Tee 6-Pack',
        price: '$192',
        quantity: 9,
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            color: 'black'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            color: 'white'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            color: 'gray'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
            color: 'red'
          },
          {
            src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'black'
          },
          {
            src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'gray'
          },
          {
            src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
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
      {
        id: 6,
        name: 'Basic Tee 6-Pack',
        price: '$192',
        quantity: 10,
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            color: 'white'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            color: 'gray'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            color: 'black'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
            color: 'red'
          },
          {
            src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'black'
          },
          {
            src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'gray'
          },
          {
            src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
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
      {
        id: 7,
        name: 'Basic Tee 6-Pack',
        price: '$192',
        quantity: 4,
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            color: 'green'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            color: 'white'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            color: 'black'
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
            color: 'green'
          },
          {
            src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'black'
          },
          {
            src: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
          },
          {
            src: 'https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            alt: 'Model wearing plain white basic tee.',
            color: 'white'
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
    ],

})

export const getters = () => ({
  namespaced: true,

  getProducts(state) {
    return state.products;
  }
})


