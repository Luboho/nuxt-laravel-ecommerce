<template>
  <div>
    <nav class="bg-image px-2 sm:px-4 py-1">
      <div class="flex justify-between bg-white px-4 rounded-xl w-full bg-opacity-25">
        <a href="#" class="flex items-center ml-4 text-gray-200 ">
            <!-- <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" /> -->
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Nuxt Ecommerce</span>
        </a>
        <div class="flex flex-row md:order-3 inset-y-0 right-0 md:flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- SHOPPING CART-->
          <button type="button" class="flex flex-col bg-opacity-80 text-white hover:text-gray-600 align-middle p-2 rounded-full clickAble"
                   @click="cartOpen">
            <div class="text-xs font-bold text-red-600 place-self-end -mb-2">
              2
            </div>
            <span class="sr-only">View notifications</span>
            <img src="@/assets/default-imgs/shopping-cart.png" class="w-7 h-7 clickAble" />
          </button>
          <!-- END SHOPPING CART-->

          <!-- USER PROFILE MENU -->
          <div class="m-3 mr-4 relative">
            <div>
              <button class="clickAble flex flex-col items-center rounded-full text-gray-800" @click="loginPopupOpen" >
                <i class="material-icons -mb-0.5 text-3xl">account_circle</i>
                <p class="font-light -mt-0.5 text-xs" >Login</p>
                <!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->
              </button>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <!-- <ul v-if="userProfileMenu" class="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <li>
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700']"
                     @click="profileMenuOpen">Your Profile
                  </a>
                </li>
                <li>
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700']">Settings</a>
                </li>
                <li>
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700']">Sign out</a>
                </li>
              </ul> -->
            </transition>
          </div>
          <!-- END OF USER PROFILE MENU -->
        </div>
      </div>

      <div class="container mt-9 flex flex-wrap justify-between items-center mx-auto">
        <div>&nbsp;</div>
        <!-- ASIDE PANNEL OF NAVBAR -->
        <aside class="z-50 p-5 not-sr-only md:sr-only transform top-0 left-0 w-64 bg-lime-600 fixed h-screen overflow-auto ease-in-out transition-all duration-300"
             :class="asideMenu ? 'translate-x-0' : '-translate-x-full'">

        <div class="close">
          <!-- CLOSE ASIDE BUTTON -->
          <button class="absolute top-3 right-3 transition ease-in-out transform active:scale-75 hover:rotate-90"
                  @click="asideOpen">
            <svg
              class="w-6 h-6 text-gray-100 hover:text-gray-300"
              fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <!-- END OF CLOSE ASIDE BUTTON -->
        </div>
        <ul class="text-gray-100">
          <li class="border border-b-0.5 border-gray-300">
            <a href="#"
               class="my-4 inline-block hover:text-gray-300 hover:font-bolder clickAble"
               :class="{'font-bold text-gray-200' : active}"
               @click="asideMenu" >
              Latest Discounts
            </a>
          </li>
          <li class="border border-b-0.5 border-gray-300">
            <a href="#" class="my-4 inline-block hover:text-gray-300 hover:font-bold
                              clickAble"
              @click="asideMenu = false" >Promotions
            </a>
          </li>
          <li class="border border-b-0.5 border-gray-300">
            <!-- <nuxt-link to="/home-design" class="my-4 inline-block hover:text-gray-300 hover:font-bold
                                clickAble"
                       :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/home-design' }"
                       >Delivery
            </nuxt-link> -->
            <a href="#" class="my-4 inline-block hover:text-gray-300 hover:font-bold
                              clickAble"
              @click="asideMenu = false" >Delivery
            </a>
          </li>
          <li class="border border-b-0.5 border-gray-300">
            <!-- <nuxt-link to="/contact" class="my-4 inline-block hover:text-gray-300 hover:font-bold
                                clickAble"
                       :class="{ 'border-b border-alicePink text-alicePink': currentPath == '/contact' }"
                       >Contact
            </nuxt-link> -->
            <a href="#" class="my-4 inline-block hover:text-gray-300 hover:font-bold
                              clickAble"
              @click="asideMenu = false" >Contact
            </a>
          </li>
        </ul>

        <!-- Nav logo -->
        <!-- <img class="w-36 mt-24px h-auto container mx-auto"  src="/logo.png" alt="Flowers by Alice"> -->
        </aside>
        <!-- END OF ASIDE PANNEL OF NAVBAR -->

        <div class="flex md:order-2 mt-10 items-center">
            <!-- SEARCH -->
            <div class="relative mr-3 md:mr-0 md:block">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>

              <input id="email-adress-icon" type="text"
                     class="block p-2 pl-10 w-full text-gray-800 focus:ring-0 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:bg-gray-200 focus:border-gray-400"
                     placeholder="Search...">

            </div>
            <!-- END OF SEARCH -->

            <!-- Open Aside Button Burger  -->
            <button data-collapse-toggle="aside" type="button" class=" inline-flex items-center p-2 ml-3 text-xs text-gray-100 rounded-lg md:hidden hover:bg-opacity-25 clickAble"
                    aria-controls="mobile-menu-3" aria-expanded="false" @click="asideOpen">
            <span class="sr-only">Open main menu</span>
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <!-- Close Aside Button -->
        </div>
      </div>

      <!--SM SCREEN CATEGORIES  -->
      <div class="not-sr-only md:sr-only flex justify-evenly flex-wrap mt-10 my-3 md:hidden">
        <div v-for="(category, index) in categories" :key="index"
             class="p-1 mt-4 text-sm text-gray-300">
            <a class="clickAble flex items-center flex-col cursor-pointer">
              <span class="bg-gray-200 rounded-full w-10 h-10">&nbsp;</span>
              {{ category.name }}
            </a>
        </div>
      </div>
      <!--END SM SCREEN CATEGORIES  -->

      <!--DESKTOP CATEGORIES -->
        <div class="z-40 mt-20 py-2 -mx-10 hidden justify-evenly md:flex bg-lime-200">
          <transition-group tag="ul" name="list" role="list" class="z-40 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium">
            <li v-for="category in categories" :key="category.id" class="flex flex-col z-40 px-5 cursor-pointer hover:border rounded-t-full p-3 hover:bg-white" @mouseover="openSubCategoryId(category.id)"  @mouseleave="closeSubCategoryId">
              <a href="#" class="clickAble z-40 py-2 px-3 text-gray-700 p-1 rounded-full hover:text-gray-800 uppercase">
                {{ category.name }}
              </a>
              <!-- Expandable -->

              <div>
                <transition name="drop-down">
                    <div v-if="subMenu && category.id === openCategoryId" class="z-30 absolute rounded-b-xl px-5 py-5 text-xs flex flex-col"
                        @click="subMenu = false">
                        <div v-for="sub in subCat(category.id)" :key="sub.id" class="m-1 z-30">
                          <h3 class="clickAble uppercase z-30">
                            {{ sub.name }}
                          </h3>
                        </div>
                    </div>
                </transition>
              </div>
              <!-- End of Expandable -->
            </li>
          </transition-group>
        </div>
      <!-- END OF DESKTOP CATEGORIES -->

    </nav>

    <!-- SUBMENU BG  -->
    <div class="absolute z-10">
      <transition name="drop-down">
        <div v-show="subMenu" class="absolute z-10 bg-white w-screen -top-3 left-0 h-100"></div>
      </transition>
    </div>
    <!-- End of SUBMENU BG -->
    <div @click="modal">
      <Modal />
    </div>
    <div>
      <Login />
    </div>
    <div>
        <ShoppingCart :cartPreview="cartPreview" @cartOpen="cartOpen" />
    </div>

  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Login from '../../components/Login.vue'
import Modal from '../../components/Modal.vue'
import ShoppingCart from '../../components/ShoppingCart.vue'

export default {

  components: {
    Modal,
    ShoppingCart,
    Login
  },

  data() {
    return {
      asideMenu: false,
      subMenu: false,
      openCategoryId: null,
      userProfileMenu: false,
      active: true,
      cartPreview: false,
      products: [
      {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
      },
      {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
          'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      }
    ]
    }

  },
  computed: {
    ...mapState({
      categories: state => state.data.categories,
      subCategories: state => state.data.subCategories,
      loginPopup: state => state.auth.loginPopup
    }),

  },
  methods: {
    ...mapActions({
       changeModal : 'modal/changeModal',
       changeLoginPopup: 'auth/changeLoginPopup'
   }),
    loginPopupOpen() {
      this.changeLoginPopup(true);
      this.changeModal(true);
    },
    subCat(id){
      return Object.values(this.subCategories).filter(subCat => subCat.parentId === id)
    },

    modal() {
      this.asideMenu = false;
      this.userProfileMenu = false;
      this.cartPreview = false;
      this.changeLoginPopup(false);
      this.changeModal(false);
    },

    asideOpen() {
      this.asideMenu = !this.asideMenu;
      if(this.asideMenu === true) {
        this.changeModal(true);
      } else {
        this.changeModal(false);
      }
    },
    cartOpen() {
      this.cartPreview = !this.cartPreview;
      this.cartPreview === true ? this.changeModal(true) : this.changeModal(false)
    },

    openSubCategoryId(id){
      const qtyOfSubcategories = this.subCategories.filter(sub => sub.parentId === id);
      if(this.subMenu === false && qtyOfSubcategories.length > 0) {

        this.openCategoryId = id;
        this.subMenu = true;
      }
    },

    closeSubCategoryId(){
      this.openCategoryId = null;
      this.subMenu = false;
    },

    profileMenuOpen() {
      this.userProfileMenu = !this.userProfileMenu;
      if(this.userProfileMenu === true) {
        this.changeModal(true);
      } else {
        this.changeModal(false);
      }
    }
  },
}
</script>

<style lang="css" scoped>

.bg-image {
  background-image: url('~@/assets/default-imgs/menu-bg.svg');
  background-repeat: repeat-x;
  background-position: center;
}
.drop-down-enter-active {
  animation: drop-down 0.3s;
}

.drop-down-leave-active {
  animation: drop-down 0.3s reverse;
}

@keyframes drop-down {
  from {
    transform: scaley(0) translate3d(0, -100%, 0);
    height: 0;
  }
  to {
    transform: scaley(1) translate3d(0, 0, 0);
  }
}
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
