<template>
  <div>
    <!-- Radio Buttons Rounded -->
        <div v-if="shape == 'circle'">
          <div class="mt-2 mx-2 flex flex-wrap justify-start lg:grid lg:grid-cols-3">
            <div v-for="(color,index) in product.colors" :key="index" class="">
              <label class="inline-flex items-center mr-2 mb-3"
                     :class="color.inStock === false ? 'cursor-text opacity-20' : ''">
                <input v-model="selectedColor"
                        type="radio"
                        class="form-radio h-10 w-10 cursor-pointer "
                        :class="[color.class, color.name === selectedColor]"
                        name="colors"
                        :disabled="isDisabled(color.inStock)"
                        :value="color.name"
                        @change="onColorChanged">
                <span class="w-10 h-10 rounded-full cursor-pointer ring-1 ring-gray-500 ring-offset-2 ring-offset-gray-100"
                     :class="[
                              color.class, color.name === selectedColor ? 'ring-2 ring-gray-500 ring-offset-4 ring-offset-gray-100' : '', 'focus:outline-none',
                              color.inStock === false ? 'cursor-text': ''
                             ]" >&nbsp;</span>
                <span class="mx-2 cursor-pointer"
                      >{{color.name}}</span>
              </label>
            </div>
          </div>
            <!-- <p class="text-red-600 text-sm" v-text="errors.email ? errors.email[0] : ''"></p> -->
        </div>
    <!-- End Radio Buttons Rounded -->

    <!-- Radio Buttons Rectangles-->
    <div v-if="shape == 'rectangle'">
      <div class="mt-2 mx-2 flex flex-wrap">
        <div v-for="(size,index) in product.sizes" :key="index" class="">
          <label class="inline-flex items-center cursor-pointer mr-2 mb-2 rounded-lg ring-1 ring-gray-300 p-2"
                :class="[
                          size.name === selectedSize ? 'ring-2 ring-gray-500 ring-offset-1 ring-offset-gray-100' : '', 'focus:outline-none',
                          size.inStock === false ? 'opacity-20 cursor-text' : ''
                        ]">
            <input id="size"
                    v-model="selectedSize"
                    class="hidden"
                    type="radio"
                    name="size"
                    :disabled="isDisabled(size.inStock)"
                    :value="size.name"
                    @change="onSizeChanged" >
              <span class="w-8 h-8 -mb-2 cursor-pointer text-center"
                    :class="size.inStock === false ? 'cursor-text' : ''">
              {{size.name}}
            </span>
          </label>
        </div>
      </div>
      <!-- <p class="text-red-600 text-sm" v-text="errors.email ? errors.email[0] : ''"></p> -->
    </div>
    <!-- End Radio Buttons Rectangles-->

  </div>
</template>

<script>
export default {
  name: "InputRadio",

  props: {
    product: {
      type: Object,
      required: true
    },
    shape: {
      type: String,
      required: true
    },
  },
  data: () => ({
    selectedColor: '',
    selectedSize: ''
  }),

  methods: {
    onColorChanged(event) {
      this.$emit('colorChanged', this.selectedColor);
    },
    onSizeChanged(event) {
      this.$emit('sizeChanged', this.selectedSize);
    },
    isDisabled(bool) {
      if(bool === true) {
        return  false;
      } else {
        return true;
      }
    }
  }

}
</script>

<style>

</style>
