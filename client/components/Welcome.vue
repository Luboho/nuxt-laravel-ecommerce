<template>
  <div  class="w-full">
    <div class="bg-white shadow-lg">
        <div class="md:flex items-center justify-between py-10 px-8 md:px-12">
            <div class="flex justify-between items-center">
               <div class="text-2xl font-bold text-gray-800 md:text-3xl">
                  <p>Nuxt Ecommerce</p>
               </div>
                <div class="md:hidden">
                    <button type="button" class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path class="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>
    <div class="flex bg-white" style="height:600px;">
      <transition name="slide-right">
        <div v-show="slide" class="z-50 flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">Enjoy shopping your <span class="text-indigo-600">Luxury</span> clothes </h2>
                <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus!</p>
                <div class="flex justify-center lg:justify-start mt-6">
                  <div @click="leaveWelcome">
                    <nuxt-link to="/"
                               class="clickAble px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                               >Go Shopping
                    </nuxt-link>
                  </div>
                  <div @click="leaveWelcome">
                    <nuxt-link to="/"
                               class="clickAble mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                               >More about our brand
                    </nuxt-link>
                  </div>
                </div>
            </div>
        </div>
      </transition>
      <transition name="slide-left">
        <div v-show="slide" class="z-40 hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <div class="h-full object-cover" style="background-image: url(https://images.unsplash.com/photo-1630750795130-56a1a055c38f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                <div class="h-full bg-black opacity-25"></div>
            </div>
        </div>
      </transition>
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Welcome",

  data: () => ({
    slide: false,
  }),

  mounted() {
    this.slide = true;
  },
  methods: {
    ...mapActions({
      getFirstVisit: 'firstEnter/getFirstVisit'
    }),
    leaveWelcome() {
      this.slide = false;
      // Set off Welcome Page until Visitor will not leave the app.
        this.$store.dispatch('firstEnter/getFirstVisit', false);
    }
  }

}
</script>

<style>
.slide-left-leave-active,
.slide-left-enter-active {
  transition: 1.5s;
}
.slide-left-enter {
  transform: translate(0, 100%);
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: 1.5s;
}
.slide-right-enter {
  transform: translate(100%, 0);
}
.slide-right-leave-to {
  transform: translate(100%);
}
</style>
