<template>
  <div>
    <Product />

    <ProductList />

  </div>
</template>

<script>
import Product from '../components/Product.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'IndexPage',
  components: {
    Product,
    ProductList,
  }
}
</script>
