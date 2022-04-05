<template>
  <div class="overflow-x-hidden mr-auto ml-auto">
    <Navbar />
    <!-- <Modal /> -->
    <Nuxt />
    <Product />
  </div>
</template>

<script>
import Navbar from './Nav/Navbar.vue'
import Product from '../components/Product.vue'
// import Modal from './../components/Modal.vue'
export default {
  components: {
    Navbar,
    Product
    // Modal,
  }
}
</script>

<style>

</style>
