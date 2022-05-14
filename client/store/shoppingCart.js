export const state = () => ({
  namespaced: true,
  shoppingCartPreview: false,
  list: [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '9022',
      quantity: 2,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '3204',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
  ]
})



export const mutations = {
  setShoppingCartPreview(state, value) {
    state.shoppingCartPreview = value
  },
  productToCart(state, value){
    state.list = value;
  },
  setProductQty(state, {payload, inStock}) {
    const itemIndex = state.list.findIndex(x => x.id === payload.id);

    if(payload.qty === 0) {
      // Remove from list if Decreased under 1.
      state.list.splice(itemIndex, 1);
    } else if(payload.qty > inStock){
      alert('No more items on the stock.')
    } else {
      // Increase || Decrease Quantity
      state.list[itemIndex].quantity = payload.qty;
    }
  }
}

export const actions = {

  async showPreview({commit}, boolean) {
    await commit('setShoppingCartPreview', boolean)
  },
  async addProductToCart({commit}, {value}) {
    await commit('productToCart', value)
  },
  async changeQty({commit, rootState}, {payload} ) {

    // Item Exists in Stock
    // Return Item's Quantity on Stock. If No Products return empty[].
    const inStock = (rootState.data.products.length !== 0) ? rootState.data.products.filter(product => product.id === payload.id)[0].quantity : [];

    await commit('setProductQty', {payload, inStock} )
  }
}

