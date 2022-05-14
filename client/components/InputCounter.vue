<template>
  <div class="inline-flex justify-center text-xl">
    <button class="" @click="decrease(qty, $event)">-</button>
      {{qty}}
    <button class="" @click="increase(qty, $event)" >+</button>
  </div>
</template>

<script>
export default {
  name: "InputCounter",

  props: {
    initNum: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    qty: null
  }),

  //  watch: {
  //   result: {
  //     handler(newVal, oldVal) {
  //       if(newVal) {
  //         this.emitResult()
  //       }
  //     }
  //   }
  // },

  methods: {
    emitResult(qty) {
      this.$emit('numChanged', qty );
    },
    decrease(qty, event) {
      this.qty--;
    //  let newQty = this.initNum + qty;
    //  newQty = newQty - 1;
    //  this.emitResult(newQty);
    },
    increase(qty, event) {
      this.qty++;
      // let newQty = this.initNum + qty;
      // newQty++;
      // this.$emit('numChanged', newQty );
    }
  },
}
</script>

<style>

</style>
