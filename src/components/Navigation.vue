<template>
  <nav class="w-full px-6 mb-4">
    <div
      class="container mx-auto px-4 py-2 h-full flex justify-between items-center"
    >
      <!-- Logo -->
      <div class="text-lg font-semibold text-gray-800">Pipu&#8482;</div>

      <div class="flex items-center gap-3 justify-end">
        <!-- Menu -->
        <div
          class="hidden md:flex text-xs space-x-6 items-center rounded-3xl bg-slate-200 z-20 opacity-80"
        >
          <a
            href="#"
            class="text-gray-800 h-10 flex items-center rounded-3xl pl-6 pr-5 hover:bg-gray-800 hover:text-white transition-all ease-out"
            >Dashboard</a
          >
          <a
            href="#"
            class="text-gray-800 h-10 flex items-center rounded-3xl hover:bg-gray-800 hover:text-white transition-all ease-out px-5"
            >People</a
          >
          <a
            href="#"
            class="text-gray-800 h-10 flex items-center rounded-3xl text-center hover:bg-gray-800 hover:text-white transition-all ease-out px-5"
            >Reviews</a
          >
        </div>
        <div
          class="hidden md:flex text-xs items-center rounded-3xl bg-slate-200 z-20 opacity-70"
        >
          <a
            href="#"
            class="text-gray-800 h-10 flex items-center justify-center rounded-full w-full px-5 hover:bg-gray-800 hover:text-white transition-all ease-out"
          >
            Settings
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
            class="feather feather-sliders"
          >
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
        </span>

          </a>
        </div>

        <div
          class="hidden md:flex text-sm items-center rounded-3xl bg-slate-200 z-20 opacity-70"
        >
          <a
            href="#"
            class="text-gray-800 h-10 flex items-center justify-center rounded-full w-10 hover:bg-gray-800 hover:text-white transition-all ease-out"
          >
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
              class="feather text-center feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </a>
        </div>

        <div
        class="hidden md:flex text-sm items-center rounded-3xl bg-slate-200 z-20 opacity-70"
      >
        <a
          href="#"
          class="text-gray-800 h-10 relative flex items-center justify-center rounded-full w-10 hover:bg-gray-800 hover:text-white transition-all ease-out"
        >
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
            class="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span
            class="absolute w-1 h-1 top-3 right-[14px] rounded-full bg-orange-600"
          ></span>
        </a>
      </div>
      </div>

      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden -ml-6 bg-gray-100 border-t border-gray-300 fixed w-full"
    >
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-200"
        >Dashboard</a
      >
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-200"
        >People</a
      >
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-200"
        >Reviews</a
      >
      <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-200"
        >Settings</a
      >
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style>
/***** Custom Styles *****/
nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
