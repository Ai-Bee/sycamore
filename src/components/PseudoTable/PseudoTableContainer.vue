<script setup lang="ts">
import TableHeader from "./TableHeader.vue";
import { useCustomerRecordsStore } from "@/stores/customerRecords";

const { records } = useCustomerRecordsStore();
</script>

<template>
  <div class="w-full my-5 glass">
    <TableHeader />
    <div class="bg-gray-100 py-6" v-if="records.length || records.length > 1">
      <div class="container mx-auto px-4">
        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300">
            <thead class="bg-gray-100">
              <tr>
                <th
                  class="border border-gray-300 px-4 py-2 text-left text-gray-700"
                >
                  Name
                </th>
                <th
                  class="border border-gray-300 px-4 py-2 text-left text-gray-700"
                >
                  Email
                </th>
                <th
                  class="border border-gray-300 px-4 py-2 text-left text-gray-700"
                >
                  Phone Number
                </th>
                <th
                  class="border border-gray-300 px-4 py-2 text-left text-gray-700"
                >
                  State
                </th>
                <th
                  class="border border-gray-300 px-4 py-2 text-left text-gray-700"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="record in records" :key="record.name">
                <tr
                  class="border-b border-gray-200 transition-all ease-in-out hover:bg-yellow-300 cursor-pointer active:scale-95"
                >
                  <td
                    class="font-semibold px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {{ record.name }}
                  </td>
                  <td
                    class="px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {{ record.email }}
                  </td>
                  <td
                    class="px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {{ record.phone }}
                  </td>
                  <td
                    class="px-6 font-semibold py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {{ record.state }}
                  </td>
                  <td
                    class="px-6 font-semiboldx py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    <p
                      :class="{
                        ' pl-4 py-1 font-semibold rounded-2xl w-24 inline-flex items-center gap-3 opacity-80 ': true,
                        ' bg-emerald-300 ': record.active,
                        ' bg-amber-300  ': !record.active,
                      }"
                    >
                      {{ record.active ? "Active" : "Inactive" }}
                      <span
                        :class="{
                          'w-[5px] h-[5px] rounded-full': true,
                          'bg-green-800': record.active,
                          'bg-red-500': !record.active,
                        }"
                      ></span>
                    </p>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else class="w-full min-h-24 mx-auto p-5 bg-amber-100 opacity-30">
      <h5
        class="text-center text-3xl transition-all ease-in-out hover:scale-105"
      >
        No records found
      </h5>
    </div>
  </div>
</template>

<style>
.glass {
  border-radius: 3.3rem;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  background: rgba(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.7;
  transition: all ease-in-out 0.5s;
}
</style>
