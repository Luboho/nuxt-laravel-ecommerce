<template>

  <transition name="appear">
  <div v-if="modal && loginPopup" class="absolute -top-32 w-screen h-screen flex items-center justify-center">

    <div class="fixed bg-white dark:bg-gray-900 z-60 w-200 rounded-xl">
      <div class="flex justify-center rounded-xl p-12">
          <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://images.unsplash.com/photo-1561052967-61fc91e48d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)">
              <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                  <div>
                      <h2 class="text-4xl font-bold text-white">Brand</h2>

                      <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                  </div>
              </div>
          </div>

          <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
              <div class="flex-1">
                  <div class="text-center">
                      <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

                      <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                  </div>

                  <div class="mt-8">
                      <form>
                          <div>
                              <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                              <input id="email" type="email" name="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          </div>

                          <div class="mt-6">
                              <div class="flex justify-between mb-2">
                                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                  <a href="#" class="text-sm text-gray-400 focus:text-lime-800 hover:text-lime-800 hover:underline">Forgot password?</a>
                              </div>

                              <input id="password" type="password" name="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                          </div>

                          <div class="mt-6">
                              <button
                                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-600 rounded-md hover:bg-lime-500 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                  Sign in
                              </button>
                          </div>

                      </form>

                      <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet?
                        <nuxt-link class="text-lime-800 focus:outline-none focus:underline hover:underline" to="/auth/register"  @click.native="closePopup">Sign up</nuxt-link>
                      </p>

                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "Login",

  computed: {
    ...mapState({
      modal: state => state.modal.modal,
      loginPopup: state => state.auth.loginPopup
    })
  },

  methods: {
    ...mapActions({
         changeModal : 'modal/changeModal',
         changeLoginPopup: 'auth/changeLoginPopup'
     }),

    closePopup() {
      this.changeModal(false);
      this.changeLoginPopup(false);
    }
  },


}
</script>

<style>
.appear-enter-active {
  animation: appear-in .5s;
  z-index: 1000;
}
.appear-leave-active {
  animation: appear-in .5s reverse;
  z-index: 1000;
}
@keyframes appear-in {
  0% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
