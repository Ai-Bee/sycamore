import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
export const useCustomerRecordsStore = defineStore('customerRecords', () => {
  const records = ref([
    {
      id: '11',
      name: "Adewale Adebayo",
      email: "adewale.adebayo@example.com",
      phone: "08012345678",
      state: "Lagos",
      active: true,
      description: "A regular customer with a history of prompt payments.",
    },
    {
      id: '221',
      name: "Chinelo Okonkwo",
      email: "chinelo.okonkwo@example.com",
      phone: "08123456789",
      state: "Anambra",
      active: false,
      description: "Customer prefers email correspondence.",
    },
    {
      id: '123',
      name: "Emeka Nwosu",
      email: "emeka.nwosu@example.com",
      phone: "09098765432",
      state: "Imo",
      active: true,
      description: "Frequent buyer of electronics and gadgets.",
    },
    {
      id: '41',
      name: "Fatima Suleiman",
      email: "fatima.suleiman@example.com",
      phone: "07011223344",
      state: "Kano",
      active: false,
      description: "Customer has outstanding payment for previous orders.",
    },
    {
      id: '55',
      name: "Ifeanyi Eze",
      email: "ifeanyi.eze@example.com",
      phone: "08187654321",
      state: "Enugu",
      active: true,
      description: "Known for large bulk purchases.",
    },
    {
      id: '66',
      name: "Ngozi Chukwuma",
      email: "ngozi.chukwuma@example.com",
      phone: "08022334455",
      state: "Abia",
      active: true,
      description: "Loyal customer with a high satisfaction rating.",
    },
    {
      id: '71',
      name: "Ahmed Bello",
      email: "ahmed.bello@example.com",
      phone: "07033445566",
      state: "Kaduna",
      active: false,
      description: "Occasional buyer of agricultural tools.",
    },
  ]);

  // const doubleCount = computed(() => count.value * 2)

  const appendRow = (customer) => {
    records.value.push(customer);
  };

  // Update a customer by index
  const updateCustomer = (index, updatedCustomer) => {
    if (index >= 0 && index < records.value.length) {
      records.value[index] = { ...records.value[index], ...updatedCustomer };
    }
  };

  // Remove a customer by index
  const removeCustomer = (index) => {
    if (index >= 0 && index < records.value.length) {
      records.value.splice(index, 1);
    }
  };

  watch(records, (newRecords) => {
    localStorage.setItem('customer', JSON.stringify(newRecords));
  });

  return { records, appendRow, updateCustomer, removeCustomer }
})
