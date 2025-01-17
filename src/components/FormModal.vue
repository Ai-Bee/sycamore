<template>
  <div class="modal-overlay opacity-100">
    <div class="modal-content relative">
      <h2 class="text-2xl text-amber-400 font-bold">Customer Info Form</h2>
      <button class="absolute right-7 top-7" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <form>
        <div class='flex md:flex-row flex-col items-start md:items-center justify-between my-5'>
          <div class='inputField md:w-5/12'>
            <label for="first-name">First Name</label>
            <input id="first-name" v-model="formData.firstName" name="firstName" placeholder="Enter First Name" />
            <p name="firstName" class="error"></p>
          </div>

          <div class='inputField md:w-5/12'>
            <label for="last-name">Last Name</label>
            <input id="last-name" v-model="formData.lastName" name="lastName" placeholder="Enter Last Name" />
            <!-- <ErrorMessage name="lastName" class="error" /> -->
          </div>
        </div>

        <div class='flex md:flex-row flex-col items-start md:items-center justify-between my-5'>
          <div class='inputField md:w-5/12'>
            <label for="phone">Phone Number</label>
            <input id="phone" name="phone" v-model="formData.phoneNumber" placeholder="Enter Phone Number" />
            <!-- <ErrorMessage name="phone" class="error" /> -->
          </div>
          <div class='inputField md:w-5/12'>
            <label for="email">Email</label>
            <input v-model="formData.email" id="email" name="email" placeholder="Enter Email" type="email" />
            <!-- <ErrorMessage name="email" class="error" /> -->
          </div>
        </div>

        <div class="py-5 flex flex-col gap-2 w-full md:w-6/12">
          <label for="state">State</label>
          <select as="select" id="state" name="state" v-model="formData.state"
            class='border border-gray-200 rounded-lg py-3 px-3'>
            <option value="" disabled>Select a state</option>
            <option v-for="state in states" :key="state.id" :value="state.id">{{ state.name }}</option>
          </select>
          <!-- <ErrorMessage name="state" class="error" /> -->
        </div>

        <div class="py-5">
          <label for="description">Description</label>
          <input name="description">
          <QuillEditor v-model:content="formData.description" @update:content="onEditorChange($event)"
            contentType="html" theme="snow" placeholder="Add user description here..." />
          </input>
          <!-- <ErrorMessage name="description" class="error" /> -->
        </div>

        <div class='flex items-center py-4 gap-1'>
          <input id="checkbox" v-model="formData.terms" name="checkbox" type="checkbox" />
          <label for="checkbox">Is User Active</label>
          <!-- <ErrorMessage name="checkbox" class="error" /> -->
        </div>

        <button class="button-plain" @click="onSubmit" type="button">Submit</button>
      </form>
      <AlertView v-show="alertState?.alertMessages.length && alertState?.alertMessages.length > 0" category="error">
        {{ alertState?.alertMessages[0] }}
      </AlertView>
    </div>
  </div>
</template>

<script setup>
import { useCustomerRecordsStore } from '@/stores/customerRecords';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive, ref, watch } from 'vue';
import { useRandomIDGenerator } from '@/composables/RandomId';
import { inject } from 'vue';
import AlertView from './AlertView.vue';


const emit = defineEmits(['close']);
const { appendRow } = useCustomerRecordsStore();
const { generateId } = useRandomIDGenerator();
const validateForm = inject('validateForm');

const alertState = reactive({
  alertMessages: [],
  category: 'error'
})

// Initial form values
const formData = reactive({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  state: '',
  description: '',
  email: '',
  terms: false,
});

const states = ref([
  { id: '1', name: 'Abia' },
  { id: '2', name: 'Adamawa' },
  { id: '3', name: 'Akwa Ibom' },
  { id: '4', name: 'Anambra' },
  { id: '5', name: 'Bauchi' },
  { id: '6', name: 'Bayelsa' },
  { id: '7', name: 'Benue' },
  { id: '8', name: 'Borno' },
  { id: '9', name: 'Cross River' },
  { id: '10', name: 'Delta' },
  { id: '11', name: 'Ebonyi' },
  { id: '12', name: 'Edo' },
  { id: '13', name: 'Ekiti' },
  { id: '14', name: 'Enugu' },
  { id: '15', name: 'Gombe' },
  { id: '16', name: 'Imo' },
  { id: '17', name: 'Jigawa' },
  { id: '18', name: 'Kaduna' },
  { id: '19', name: 'Kano' },
  { id: '20', name: 'Katsina' },
  { id: '21', name: 'Kebbi' },
  { id: '22', name: 'Kogi' },
  { id: '23', name: 'Kwara' },
  { id: '24', name: 'Lagos' },
  { id: '25', name: 'Nasarawa' },
  { id: '26', name: 'Niger' },
  { id: '27', name: 'Ogun' },
  { id: '28', name: 'Ondo' },
  { id: '29', name: 'Osun' },
  { id: '30', name: 'Oyo' },
  { id: '31', name: 'Plateau' },
  { id: '32', name: 'Rivers' },
  { id: '33', name: 'Sokoto' },
  { id: '34', name: 'Taraba' },
  { id: '35', name: 'Yobe' },
  { id: '36', name: 'Zamfara' },
  { id: '37', name: 'FCT - Abuja' },
]);



const onEditorChange = (arg) => {
  formData.description = arg
}

watch( () => alertState.alertMessages, (newValue, oldValue) => {
  console.log( newValue )
  if (newValue.length > 0) {
    setTimeout(() => {
      alertState.alertMessages = []
    }, 7000)
  }
}, { deep: true }
)


const validationRules = {
  firstName: [
    (value) => (!value ? 'First name is required' : null),
  ],
  lastName: [
    (value) => (!value ? 'Last name is required' : null),
  ],
  phoneNumber: [
    (value) => (!value ? 'Phone number is required' : null),
    (value) => (/^\d{11}$/.test(value) ? null : 'Phone number must be 10 digits'),
  ],
  state: [
    (value) => (!value ? 'State is required' : null),
  ],
  description: [
    (value) => (!value ? 'Description is required' : null),
  ],
  email: [
    (value) => (!value ? 'Email is required' : null),
    (value) => (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) ? null : 'Email must be valid'),
  ]
};


const onSubmit = () => {
  const errors = validateForm(formData, validationRules);
  // Check if there are any errors
  const isValid = Object.values(errors).every((fieldErrors) => fieldErrors.length === 0);

  if (isValid) {
    const latestRow = {
      id: generateId(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phoneNumber,
      state: states.value.find(singleState => formData.state === singleState.id)?.name || '',
      active: formData.terms,
      description: formData.description
    };

    appendRow(latestRow);
    alertState.alertMessages = ['Success!']
    alertState.category = 'success';
    setTimeout(() => {
      emit('close');
    formData.firstName = formData.lastName = formData.email = formData.description = formData.phoneNumber = '';

    }, 5000)
  } else {

    Object.values(errors).map((fieldErrors) => {

      if (fieldErrors.length > 0) {
        alertState.category = 'error';
        alertState.alertMessages = [...fieldErrors];
        return false;
      }
    });
  }

};
</script>

<style scoped>
.button-plain {
  background-color: #FFFFFF;
  border: 1px solid rgb(209, 213, 219);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-plain:hover:not(:disabled) {
  background-color: rgba(217, 224, 26, 0.756);
}

.button-plain:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  z-index: 99;
  padding: 20px;
  max-height: 80%;
  overflow-y: scroll;
  border-radius: 8px;
  width: 50vw;
  font-size: smaller
}

.inputField {
  display: flex;
  gap: 1px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
}

.inputField>input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.3s ease;
}

.error {
  color: red;
  bottom: -19px;
  position: absolute;
  font-size: x-small;
}



@media (max-width: 426px) {
  .modal-content {
    height: 90%;
    width: 80vw;
  }

  .inputField {
    width: 100%;
  }

  .inputField>input {
    margin-bottom: 20px
  }
}
</style>