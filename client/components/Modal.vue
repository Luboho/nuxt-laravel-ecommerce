<template>
    <transition name="fade">
        <div v-if="modal" class="fixed flex items-center justify-center bg-opacity-50 bg-black z-40 top-0 left-0 right-0 bottom-0"
             @click="setModal(false)" >
        </div>
    </transition>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
    export default {
        name: "Modal",
        computed: {
            ...mapState({
                modal: state => state.modal.modal,
            })
        },
        methods: {
            ...mapMutations({ setModal : 'modal/setModal' }),

        },
    }
</script>

<style>
@keyframes showModal {
     0% { opacity: 0; }
    100% { opacity: 1; }
}
.fade-enter-active {
    animation: showModal .4s;
}
.fade-leave-active {
    animation: showModal .4s reverse;
}
</style>
