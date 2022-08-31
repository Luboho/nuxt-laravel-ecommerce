<template>
  <div>
    <transition name="fade">

    <!-- If First time visit -->
        <div v-if="firstEnter === true" :key="1">
          <Welcome />
        </div>
        <!-- Second time Visit -->
        <div v-else :key="2">
          <!-- Product will get own page -->
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure sapiente minus, facere hic, vel exercitationem nostrum, sint veritatis quisquam deserunt! Necessitatibus, maxime rerum. Ratione molestias voluptatem doloribus eaque fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure sapiente minus, facere hic, vel exercitationem nostrum, sint veritatis quisquam deserunt! Necessitatibus, maxime rerum. Ratione molestias voluptatem doloribus eaque fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure sapiente minus, facere hic, vel exercitationem nostrum, sint veritatis quisquam deserunt! Necessitatibus, maxime rerum. Ratione molestias voluptatem doloribus eaque fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure sapiente minus, facere hic, vel exercitationem nostrum, sint veritatis quisquam deserunt! Necessitatibus, maxime rerum. Ratione molestias voluptatem doloribus eaque fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure sapiente minus, facere hic, vel exercitationem nostrum, sint veritatis quisquam deserunt! Necessitatibus, maxime rerum. Ratione molestias voluptatem doloribus eaque fugit.</p>
          <Product />

          <ProductList />
        </div>

    </transition>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import Product from '../components/Product.vue'
import ProductList from '../components/ProductList.vue'
import Welcome from '../components/Welcome.vue'

export default {
  name: 'IndexPage',
  components: {
    Welcome,
    Product,
    ProductList,
  },

  computed: {
    ...mapState({
      firstEnter: state => state.firstEnter.firstEnter
    })
    // firstEnter() {
    //   const firstEnter = this.$cookies.get('firstEnter');

    //   return firstEnter;
    // }
  },

  //  watch: {
  //   $route(to, from) {
  //     console.log('route change to', to)
  //     console.log('route change from', from)
  //   }
  // },

  // async beforeMount() {

  //   const firstEnter = this.$cookies.get('firstEnter');

  //   if(firstEnter === undefined) {
  //     // Open Welcome Page
  //     await this.$store.dispatch('firstEnter/getFirstVisit', true);

  //     // Send Request to write a Cookie
  //     try {
  //       await this.$axios.$get('sanctum/csrf-cookie');
  //       await this.$axios.$get(`/api/enter`)
  //     } catch (e) {
  //       // 404 not found
  //       console.log(e.response);
  //     }
  //   }
  //   //  else {
  //   //   // Customer Cookie Exist, Set Store to false
  //   //   await this.$store.dispatch('firstEnter/getFirstVisit', false);

  //   //   this.$router.replace({path: '/'});
  //   // }
  // },


}
</script>
<style scoped>
@keyframes showModal {
     0% { opacity: 0; }
    100% { opacity: 1; }
}
.fade-enter-active {
    animation: showModal 2s;
}
.fade-leave-active {
    animation: showModal 2s reverse;
}
</style>
