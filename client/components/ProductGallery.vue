<template>
  <div>
    <!-- Image gallery -->

      <div class="px-6 md:px-8 mt-6 max-w-2xl mx-auto md:max-w-7xl">
        <transition name="appear">
          <div v-if="imgIndex !== null" class="">
          <!-- Img Preview -->
            <div class="relative w-full flex justify-center">
              <div class="relative">
                <transition name="slide-fade" mode="out-in">
                  <img :key="imgIndex" :src="product.images[imgIndex].src" :alt="product.images[imgIndex].alt"
                        class="cursor-zoom-in w-140 h-140 object-cover rounded-md"
                        @click="imgCoolIndex = imgIndex; zoom = true"
                        >
                </transition>
                <div class="absolute clickAble flex justify-center items-center top-2 right-2 bg-lime-500 w-7 h-7 rounded-full"
                      @click="imgIndex = null"
                      >
                  <button class="self-center font-bold text-white">
                    X
                  </button>
                </div>
              </div>
            </div>
          <!-- End Of Img Preview  -->
          </div>
        </transition>

        <!-- Normal Preview -->

        <div v-if="imgIndex === null" class="md:grid md:grid-cols-3 md:gap-x-8">
          <div class="aspect-w-4 aspect-h-5 sm:rounded-md sm:overflow-hidden md:aspect-w-3 md:aspect-h-4">
            <img :src="[imageBySelectedColor != '' ? imageBySelectedColor : product.images[0].src ]" :alt="product.images[0].alt"
                 class="w-full rounded-md h-full object-center object-cover cursor-pointer"
                 @click="imgIndex = 0" />
          </div>
          <div class="hidden md:grid md:grid-cols-1 md:gap-y-8">
            <div class="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
              <img :src="product.images[1].src" :alt="product.images[1].alt" class="w-full rounded-md h-full object-center object-cover cursor-pointer"
                   @click="imgIndex = 1" />
            </div>
            <div class="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
              <img :src="product.images[2].src" :alt="product.images[2].alt" class="w-full rounded-md h-full object-center object-cover cursor-pointer"
                   @click="imgIndex = 2" />
            </div>
          </div>
          <div class="hidden aspect-w-3 aspect-h-4 rounded-md overflow-hidden md:block">
            <img :src="product.images[3].src" :alt="product.images[3].alt" class="w-full rounded-md h-full object-center object-cover cursor-pointer"
                 @click="imgIndex = 3" />
          </div>
        </div>
        <!-- End Of NOrmal Preview -->

        <!-- Vue-Cool-Box -->
          <div v-show="zoom">
              <CoolLightBox :items="pictures"
                            :index="imgCoolIndex"
                            @close="closePreview">
              </CoolLightBox>

            <div class="">
              <div
                v-for="(image, imageIndex) in pictures"
                :key="imageIndex"
                class="image"
                :slideshowDuration="600"
                :effect="'fade'"
                :style="{ backgroundImage: `url(${image})` }">
              </div>
            </div>
          </div>
        <!-- End of Vue-Cool-Box -->
        <GalleryThumbnails :product="product" :activePreview="activePreview" @changeIndex="newIndex" />
      </div>

      <!-- End of Image Gallery -->
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import GalleryThumbnails from './GalleryThumbnails.vue';

export default {
  name: "ProductGallery",
  components: {
    GalleryThumbnails,
    CoolLightBox
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    selectedColor: {
      type: String,
      required: true
    }
  },
  data: () => ({
    imgIndex: null,
    imgCoolIndex: null,
    zoom: false,
    colorSelected: null
  }),
  computed: {
    pictures() {
      let pics;
      if(this.product.images !== undefined){
        pics = this.product.images.map((item) => item.src)
      }
      return pics;
    },
    activePreview() {
      if(this.imgIndex !== null) {
        return true;
      } else return false
    },
    imageBySelectedColor() {
      if(this.selectedColor !== "") {
        const img = this.product.images.filter(img => img.color === this.selectedColor.toLowerCase());
        return img[0].src;
      } else {
        return "";
      }
    }
  },
  watch: {
    // Prevent body scroll lock after close "cool-light-box"
    imgIndex (newVal, oldVal) {
      if(newVal === null) {
        document.documentElement.style.overflow = "auto"
      }
    }
  },

  methods: {
    closePreview() {
      this.zoom = false;
      this.imgIndex = null;
    },
    newIndex(e) {
      this.imgIndex = e;
    }
  },
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

.appear-enter-active {
  animation: appear-in .3s;
  z-index: 1000;
}
.appear-leave-active {
  animation: disappear reverse  .3s;
  left:0;
  right: 0;
  position: absolute;
  z-index: 1000;
}
@keyframes appear-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes disappear {
  0% {
    transform: scale(0) rotate(-360deg) ;
  }
  100% {
    transform: scale(1);
  }
}
</style>
