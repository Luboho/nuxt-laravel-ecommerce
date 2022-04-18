<template>
  <div class="overflow-x-hidden mr-auto ml-auto">
    <Navbar />
    <!-- <Modal /> -->
    <Nuxt />
  </div>
</template>

<script>
import Navbar from './Nav/Navbar.vue'
// import Modal from './../components/Modal.vue'
export default {
  components: {
    Navbar,
    // Modal,
  }
}
</script>

<style>

</style>
