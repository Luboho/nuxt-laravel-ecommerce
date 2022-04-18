<template>
  <div>
    <nav class="bg-image px-2 sm:px-4 py-1">
      <div class="flex justify-between bg-white px-4 rounded-xl w-full bg-opacity-25">
        <a href="#" class="flex items-center ml-4 text-gray-200 ">
            <!-- <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" /> -->
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Nuxt Ecommerce</span>
        </a>
        <div class="flex flex-row md:order-3 inset-y-0 right-0 md:flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- SHOPPING BASKET-->
          <button type="button" class="flex flex-col bg-opacity-80 text-white hover:text-gray-600 align-middle p-2 rounded-full clickAble">
            <div class="text-xs font-bold text-red-600 place-self-end -mb-2">
              2
            </div>
            <span class="sr-only">View notifications</span>
            <img src="@/assets/default-imgs/shopping-cart.png" class="w-7 h-7 clickAble" />
          </button>
          <!-- END SHOPPING BASKET-->

          <!-- USER PROFILE MENU -->
          <div class="m-3 mr-4 relative">
            <div>
              <button class="clickAble flex flex-col items-center rounded-full text-gray-800" @click="profileMenuOpen">
                <i class="material-icons -mb-0.5 text-3xl">account_circle</i>
                <p class="font-light -mt-0.5 text-xs">Login</p>
                <!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->
              </button>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <ul v-if="userProfileMenu" class="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
              </ul>
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
        <!-- Follow Us -->
        <!-- <div class="follow mt-5">
          <h3 class="text-xs">Follow us:</h3>
          <div class="social flex justify-center space-x-5 mt-4 ">
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="twitter"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="facebook-f"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="instagram"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="youtube"
                class="h-5 w-5 fill-current text-darkPurple opacity-80" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div> -->
        <!-- End of Follow Us -->
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
                     class="block p-2 pl-10 w-full text-gray-800 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:bg-gray-200 focus:border-gray-400"
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
          <ul v-for="(category, index) in categories" :key="index" class="z-40 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium">
            <li class="flex flex-col z-40 px-5 cursor-pointer hover:border rounded-t-full p-3 hover:bg-white" @mouseover="openSubCategoryId(category.id)"  @mouseleave="closeSubCategoryId">
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
          </ul>
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

  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Modal from '../../components/Modal.vue'

export default {

  components: {
    Modal
  },

  data() {
    return {
      asideMenu: false,
      subMenu: false,
      openCategoryId: null,
      userProfileMenu: false,
      active: true
    }
  },
  computed: {
    ...mapState({
      categories: state => state.data.categories,
      subCategories: state => state.data.subCategories
    }),

  },
  methods: {
    ...mapMutations({ setModal : 'modal/setModal' }),

    subCat(id){
      return Object.values(this.subCategories).filter(subCat => subCat.parentId === id)
    },

    modal() {
      this.setModal(false);
      this.asideMenu = false;
      this.userProfileMenu = false;
    },

    asideOpen() {
      this.asideMenu = !this.asideMenu;
      if(this.asideMenu === true) {
        this.setModal(true);
      } else {
        this.setModal(false);
      }
    },

    openSubCategoryId(id){
      if(this.subMenu === false) {
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
        this.setModal(true);
      } else {
        this.setModal(false);
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
</style>
