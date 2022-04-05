<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">
                {{ breadcrumb.name }}
              </a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a :href="product.href" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
              {{ product.name }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div class="mt-6 max-w-2xl mx-auto sm:px-6 md:max-w-7xl md:px-8 md:grid md:grid-cols-3 md:gap-x-8">
        <div class="hidden aspect-w-3 aspect-h-4 rounded-md overflow-hidden md:block">
          <img :src="product.images[0].src" :alt="product.images[0].alt" class="w-full h-full object-center object-cover" />
        </div>
        <div class="hidden md:grid md:grid-cols-1 md:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
            <img :src="product.images[1].src" :alt="product.images[1].alt" class="w-full h-full object-center object-cover" />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-md overflow-hidden">
            <img :src="product.images[2].src" :alt="product.images[2].alt" class="w-full h-full object-center object-cover" />
          </div>
        </div>
        <div class="aspect-w-4 aspect-h-5 sm:rounded-md sm:overflow-hidden md:aspect-w-3 md:aspect-h-4">
          <img :src="product.images[3].src" :alt="product.images[3].alt" class="w-full h-full object-center object-cover" />
        </div>
      </div>

      <!-- Product info -->
      <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl text-gray-900">{{ product.price }}</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <!-- <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" /> -->
              </div>
              <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
              <a :href="reviews.href" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{ reviews.totalCount }} reviews</a>
            </div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-900 font-medium">Color</h3>

              <InputRadio :product="product" shape="circle"  @colorChanged="choosenColor" />
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm text-gray-900 font-medium">Size</h3>
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
              </div>

              <InputRadio :product="product" shape="rectangle" @sizeChanged="choosenSize" />
              <!-- <RadioGroup v-model="selectedSize" class="mt-4">
                <RadioGroupLabel class="sr-only"> Choose a size </RadioGroupLabel>
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name" :value="size" :disabled="!size.inStock" v-slot="{ active, checked }">
                    <div :class="[size.inStock ? 'bg-white shadow-sm text-gray-900 cursor-pointer' : 'bg-gray-50 text-gray-200 cursor-not-allowed', active ? 'ring-2 ring-indigo-500' : '', 'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                      <RadioGroupLabel as="p">
                        {{ size.name }}
                      </RadioGroupLabel>
                      <div v-if="size.inStock" :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-md pointer-events-none']" aria-hidden="true" />
                      <div v-else aria-hidden="true" class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                        <svg class="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                      </div>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup> -->
            </div>

            <button type="submit" class="mt-10 button--success clickAble">Add to bag</button>
          </form>
        </div>

        <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
// import { StarIcon } from '@heroicons/vue/solid'
// import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'


// const reviews = { href: '#', average: 4, totalCount: 117 }
import {mapState} from 'vuex'
import InputRadio from './InputRadio.vue'

export default {
  name: "Product",

  components: {
    InputRadio
    // RadioGroup,
    // RadioGroupLabel,
    // RadioGroupOption,
    // StarIcon,
  },
  data: () => ({
    selectedColor: '',
    selectedSize: ''
  }),
  computed: {
    ...mapState({
      product: state => state.data.product,
      reviews: state => state.data.reviews
    })
  },
  methods: {
    choosenColor(e) {
      this.selectedColor = e;
    },
    choosenSize(e) {
      this.selectedSize = e;
    }
  }

  // setup() {
  //   const selectedColor = ref(product.colors[0])
  //   const selectedSize = ref(product.sizes[2])
}
</script>
