<template>
    <div>
      <div class="z-50 transform top-0 right-0 fixed w-full sm:w-8/12 lg:w-6/12 xl:w-4/12 h-screen overflow-x-hidden ease-in-out transition-all duration-300"
             :class="cartPreview ? 'translate-x-0' : 'translate-x-full'">
        <div class="pointer-events-none w-full fixed inset-y-0 right-0 flex pl-10">

            <div class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">

                  <div class="mt-8">
                    <div class="flow-root">

                      <transition-group tag="ul" name="list" role="list" class="-my-6 divide-y divide-gray-200">
                        <li v-for="item in list" :key="item.id" class="flex py-6">
                          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img :src="item.imageSrc" :alt="item.imageAlt" class="h-full w-full object-cover object-center" />
                          </div>

                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a :href="item.href"> {{ item.name }} </a>
                                </h3>
                                <p class="ml-4">{{ sumToPrice(item.price) }}</p>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">{{ item.color }}</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <!-- item Counter -->
                                <div class="flex flex-row place-items-end">
                                  <p>Qty</p>
                                  <div class="bg-gray-100 flex flex-row justify-start ml-2 px-2 py-1 rounded-lg">
                                    <p class="font-xl ml-1 cursor-pointer"
                                       @click="decrease(item.id, item.quantity)">-</p>
                                    <p class="bg-gray-50 text-gray-500 px-1 rounded-lg mx-1">
                                      {{ item.quantity }}
                                    </p>
                                    <p class="font-xl mr-1"
                                       :class="[item.quantity === currentProductQty(item.id) ? 'cursor-text text-gray-300' : 'cursor-pointer']"
                                       @click="increase(item.id, item.quantity)">+</p>
                                  </div>
                                </div>

                              <!-- End Of Product Counter -->
                              <div class="flex">
                                <button type="button" class="font-thin text-gray-600 hover:text-gray-500" @click="removeItem(item.id)">Remove</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </transition-group>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{{ sumToPrice(subtotal) }}</p>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div class="mt-6">
                    <nuxt-link to="" class="flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-lime-700">Checkout</nuxt-link>
                  </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="cartOpen">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import { sumToPrice } from '../helpers.js'
// import InputCounter from './InputCounter.vue'

export default {
  name: "ShoppingCart",
  components: {
    // InputCounter
  },
  props: {
    cartPreview: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    newQty: null,
  }),

  computed: {
    subtotal() {
        const subtotal = this.list.reduce((sum,item) => sum + parseInt(item.price) * item.quantity, 0);
        return subtotal;
    },
    ...mapState({
      list: state => state.shoppingCart.list,
      products: state => state.data.products,
    }),


  },
  methods: {
    ...mapActions({
      changeQty: 'shoppingCart/changeQty'
    }),
    cartOpen(event) {
      this.$emit('cartOpen', false)
    },
    sumToPrice, // Helpers.js
    increase(id,qty) {

        const increaseQty = qty + 1;
        const payload = {'id': id, 'qty': increaseQty}

        this.changeQty({payload});
    },
    decrease(id,qty) {
        const decreaseQty = qty - 1;
        const payload = {'id': id, 'qty': decreaseQty}

        this.changeQty({payload});
    },
    removeItem(id) {
      const payload = {'id': id, 'qty': 0}

      this.changeQty({payload})
    },

    currentProductQty(id) {
      const currProd = this.products.filter(product => product.id === id);
      return currProd[0].quantity;
    }
  },

}
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

</style>
