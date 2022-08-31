<template>

  <div class="bg-white dark:bg-gray-900 z-60 w-200 rounded-xl">
    <div class="flex justify-center rounded-xl p-12">
        <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://images.unsplash.com/photo-1612851206272-c5d0cf0d26b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80)">
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
                    <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Nuxt Ecommerce</h2>

                    <p class="mt-3 text-gray-500 dark:text-gray-300">Sign up to make your shopping easy</p>
                </div>

                <div class="mt-8">
                <h3 class="text-2xl font-bold text-gray-700 dark:text-white">Login details</h3>
                    <form>
                        <div  class="mt-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                            <input id="name" v-model="form.name" type="text" name="name" placeholder="John Doe" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div  class="mt-6">
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input id="email" v-model="form.email"  type="email" name="email" placeholder="john.doe@gmail.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                            </div>
                            <input id="password" v-model="form.password" type="password" name="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="password-confirm" class="text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                            </div>
                            <input id="password-confirm" v-model="form.passwordConfirmation" type="password" name="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <h3 class="mt-8 text-2xl font-bold text-gray-700 dark:text-white">Delivery details</h3>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="first-name" class="text-sm text-gray-600 dark:text-gray-200">First name</label>
                            </div>
                            <input id="first-name" v-model="form.firstName"  type="text" name="first-name" placeholder="John" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="surname" class="text-sm text-gray-600 dark:text-gray-200">Surname</label>
                            </div>
                            <input id="surname" v-model="form.surname" type="text" name="surname" placeholder="Doe" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="street" class="text-sm text-gray-600 dark:text-gray-200">Street and number</label>
                            </div>
                            <input id="street" v-model="form.street" type="text" name="street" placeholder="Captain Cook 34" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="city" class="text-sm text-gray-600 dark:text-gray-200">City</label>
                            </div>
                            <input id="city" v-model="form.city" type="text" name="city" placeholder="Barcelona" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="postal-code" class="text-sm text-gray-600 dark:text-gray-200">Postal code</label>
                            </div>
                            <input id="postal-code" v-model="form.postalCode" type="text" name="postal-code" placeholder="9332AN" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="phone" class="text-sm text-gray-600 dark:text-gray-200">Phone</label>
                            </div>
                            <input id="phone" v-model="form.phone"  type="text" name="phone" placeholder="+23 293432388" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
<!-- Billing Details-->
                        <div class="mt-8">

                          <h3 class="mt-6 text-2xl font-bold text-gray-700 dark:text-white">Billing details</h3>
                          <!-- Input Radio -->
                            <ul class="ml-0.5 mt-4 flex flex-row justify-start text-sm text-gray-600 dark:text-gray-200">

                              <li>
                                  <div class="mt-2 mx-2 flex flex-wrap justify-start lg:grid">
                                      <label class="inline-flex items-center mr-2 mb-3"
                                             @click="differentBilling = false">
                                        <input
                                                type="radio"
                                                class="form-radio h-6 w-6 cursor-pointer "
                                                name="billing">
                                        <span class="w-6 h-6 rounded-full cursor-pointer ring-1 ring-gray-500 ring-offset-2 ring-offset-gray-100"
                                          :class="[ differentBilling === false ? 'bg-lime-600' : '', 'focus:outline-none']">
                                          &nbsp;
                                        </span>
                                        <span class="mx-2 cursor-pointer whitespace-nowrap">
                                            Same as Delivery address
                                        </span>
                                      </label>
                                  </div>
                              </li>

                              <li>
                                  <div class="mt-2 mx-2 flex flex-wrap justify-start">
                                      <label class="inline-flex items-center mr-2 mb-3"
                                             @click="differentBilling = true">
                                        <input
                                                type="radio"
                                                class="form-radio h-6 w-6 cursor-pointer "
                                                name="billing">
                                        <span class="w-6 h-6 rounded-full cursor-pointer ring-1 ring-gray-500 ring-offset-2 ring-offset-gray-100"
                                          :class="[ differentBilling === true ? 'bg-lime-600' : '', 'focus:outline-none']">
                                          &nbsp;
                                        </span>
                                        <span class="mx-2 cursor-pointer whitespace-nowrap">
                                            Different
                                        </span>
                                      </label>
                                  </div>
                              </li>

                              </ul>
                          <!-- End Of Input Radio -->

                                <transition name="dropdown">
                                  <div v-if="differentBilling">
                                    <ul>
                                        <li key="1" class="mt-6">
                                            <div class="flex justify-between mb-2">
                                                <label for="billing-first-name" class="text-sm text-gray-600 dark:text-gray-200">First name</label>
                                            </div>
                                            <input id="billing-first-name" v-model="form.billingFirstName" type="text" name="billing-first-name" placeholder="John" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </li>

                                        <li key="2" class="mt-6">
                                            <div class="flex justify-between mb-2">
                                                <label for="billing-surname" class="text-sm text-gray-600 dark:text-gray-200">Surname</label>
                                            </div>
                                            <input id="billing-surname" v-model="form.billingSurname" type="text" name="billing-surname" placeholder="Doe" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </li>

                                        <li key="3" class="mt-6">
                                            <div class="flex justify-between mb-2">
                                                <label for="billing-street" class="text-sm text-gray-600 dark:text-gray-200">Street and number</label>
                                            </div>
                                            <input id="billing-street" v-model="form.billingStreet" type="text" name="billing-street" placeholder="Captain Cook 34" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </li>

                                        <li key="4" class="mt-6">
                                            <div class="flex justify-between mb-2">
                                                <label for="billing-city" class="text-sm text-gray-600 dark:text-gray-200">City</label>
                                            </div>
                                            <input id="billing-city" v-model="form.billingCity" type="text" name="billing-city" placeholder="Barcelona" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </li>

                                        <li key="5" class="mt-6">
                                            <div class="flex justify-between mb-2">
                                                <label for="billing-postal-code" class="text-sm text-gray-600 dark:text-gray-200">Postal code</label>
                                            </div>
                                            <input id="billing-postal-code" v-model="form.billingPostalCode" type="text" name="billing-postal-code" placeholder="9332AN" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </li>

                                        <li key="6" class="mt-6">
                                            <div class="flex justify-between mb-2">
                                                <label for="billling-phone" class="text-sm text-gray-600 dark:text-gray-200">Phone</label>
                                            </div>
                                            <input id="billling-phone" v-model="form.billingPhone" type="text" name="billling-phone" placeholder="+23 293432388" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </li>
                                    </ul>
                                  </div>
                                </transition>

                        </div>
<!-- End Of Billing Details -->
                        <div class="mt-6">
                          <button
                              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-600 rounded-md hover:bg-lime-500 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                              Sign up
                          </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Register",

  data: () => ({
    differentBilling: false,
    form: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      firstName: "",
      surname: "",
      street: "",
      city: "",
      postalCode: "",
      phone: "",
      billingFirstName: "",
      billingSurname: "",
      billingStreet: "",
      billingCity: "",
      billingPostalCode: "",
      billingPhone: ""
    }
  }),

  computed: {
    ...mapState({
      modal: state => state.modal.modal,
      loginPopup: state => state.auth.loginPopup
    })
  }
}
</script>

<style scoped>
.dropdown-enter,
.dropdown-leave-to {
  transform: scaleY(0.1);
  opacity: 0;
}
.dropdown-enter-to,
.dropdown-leave {
  opacity: 1;
  transform: scaleY(1);
}
.dropdown-enter-active,
.dropdown-leave-active,
.dropdown-leave-to {
  transition: all 0.35s ease-in-out;
  transform-origin: top center;
}
</style>
