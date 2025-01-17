<template>
  <div
    class="w-full rounded-t-3xl px-6 text-xs bg-amber-200  flex items-center min-h-14 relative"
  >
  <FormModal v-if="isModalOpen" @close="closeModal" />
    <div :class='{
      "rounded-tab absolute right-0": true,
      "opacity-60": isModalOpen,
      "opacity-80": !isModalOpen
    }'>
      <div class="w-full flex justify-evenly h-full items-center">
        <button
        @click="openModal"
          class="text-gray-800 h-10 bg-slate-200 opacity-80 flex items-center justify-center rounded-full w-10 px-5 hover:bg-gray-800 hover:text-white transition-all ease-out"
        >
          <span class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </button>

        <button
          class="text-gray-800 h-10 bg-slate-200 opacity-80 flex items-center justify-center rounded-full w-fit px-5 hover:bg-gray-800 hover:text-white transition-all ease-out"
        >
        Export
          <span class="pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FormModal from "../FormModal.vue";

const openModal = () => isModalOpen.value = true;

const closeModal = () => isModalOpen.value = false;

const isModalOpen = ref(false)

</script>

<style scoped>
.rounded-tab {
  --r: 19px;
  height: 55px;
  width: 15rem;
  line-height: 1.8;
  padding-inline: 0.5em;
  border-left: var(--r) solid #0000;
  border-radius: calc(2 * var(--r)) var(--r) 0 0 / var(--r) var(--r) 0 0;
  mask: radial-gradient(var(--r) at 0 0, #0000 98%, #000 101%) 0 100% / var(--r)
      var(--r) no-repeat,
    conic-gradient(#000 0 0) padding-box;
  background: white border-box; /* border-box is needed for a gradient coloration */
}
</style>
