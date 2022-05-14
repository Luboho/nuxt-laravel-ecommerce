<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

      <div class="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group grid grid-cols-1 content-end relative mb-5 bg-slate-50 bg-opacity-50 rounded-md">
          <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:aspect-none"
               @click="changedColorImgId = product.id">
              <div>
                <img :src="[selectedColor !== '' && product.id === changedColorImgId ?  imageBySelectedColor(product): product.images[0].src ]"
                    :alt="product.imageAlt" class="w-full h-full rounded-md object-center object-cover lg:w-full lg:h-full"
                      />
              </div>
            <InputRadio :product="product" shape="mini-circle" @colorChanged="choosenColor" />
          </div>
          <div class="flex justify-between mx-2 mb-2">
            <div>
              <h3 class="text-sm text-gray-700">
                <!-- <a :href=""> -->
                  <!-- <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }} -->
                <!-- </a> -->
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import InputRadio from './InputRadio.vue'
export default {
  name: "Products",
  components: { InputRadio },
  data: () => ({
    selectedColor: '',
    changedColorImgId: null
  }),
  computed: {
    ...mapState({
      products: state => state.data.products
    }),
  },
  methods: {
    imageBySelectedColor(product) {
      if(this.selectedColor !== "") {
        const img = product.images.filter(img => img.color === this.selectedColor.toLowerCase());
        return img[0].src;
      } else {
        return "";
      }
    },
    choosenColor(e) {
      this.selectedColor = e;
    },
  }

}
</script>

<style>
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-to
{
  transform: translateX(-300px);
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(300px);
  opacity: 0;
}
</style>
