<template>
  <div>
    <Product />

    <ProductList />

    <ShoppingCart />

  </div>
</template>

<script>
import Product from '../components/Product.vue'
import ProductList from '../components/ProductList.vue'
import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  name: 'IndexPage',
  components: {
    Product,
    ProductList,
    ShoppingCart
  }
}
</script>
