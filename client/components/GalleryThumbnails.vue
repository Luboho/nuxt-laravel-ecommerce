<template>
      <div>
        <div class="w-full flex flex-wrap"
             :class="[imgIndex !== null ? 'justify-start' : '']">
          <div v-for="(img, index) in product.images.slice(startLoapingIndex)" :key="index" >
            <div class="my-6 mr-6">
              <img :src="img.src" :alt="img.alt" class="w-20 h-20 object-cover rounded-md cursor-pointer"
                   @click="newPreviewIndex(img.src, $event)" />
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "GalleryThumbnails",

  props: {
    product: {
      type: Object,
      required: true
    },
    activePreview: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    imgIndex: null,
    startLoapingIndex: 0,
    smallScreen: Boolean
  }),
  watch: {
    // Show all thumbnails if Desktop view and Img preview is active.
    activePreview: {
      handler(newVal, oldVal) {
        if(newVal === true) {
          this.startLoapingIndex = 0;
        } else if(newVal === false && this.smallScreen === false) {
          this.startLoapingIndex = 4;
        }
      }
    }
  },
  mounted() {
    window.onload = () => {
      if (window.innerWidth > 767){
        this.startLoapingIndex = 4;
        this.smallScreen = false;
      } else {
        this.startLoapingIndex = 0;
        this.smallScreen = true;
      }
    };
    window.onresize = () => {
      if (window.innerWidth > 767 && this.activePreview === false){
        this.startLoapingIndex = 4;
        this.smallScreen = false;
      } else {
        this.startLoapingIndex = 0;
        this.smallScreen = true;
      }
    };
  },
  methods: {
    newPreviewIndex(src,event) {
      // Get Current clicked img. Desktop layout shows 4 imgs. Thumbnails starts from index 4. Thats why current img's index needs to be counted from all provided srcs.

      // Create Array of All product src
      const allSrcsArr = this.product.images.map(item => item.src);
      // Get Current/Clicked img.
      const currentIndex = allSrcsArr.indexOf(src);
      this.$emit('changeIndex', currentIndex);
    },
  },

}
</script>

<style>

</style>
