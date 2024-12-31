<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const errors = ref({ firstName: '', lastName: '', email: '' })

const isUpdated = ref(false)
const isLoading = ref(false)
const isValid = ref(false)

const validateName = (name: string) => {
  const re = /\d/
  return !re.test(name)
}

const validateEmail = (email: string) => {
  return email.includes('@')
}

// ใช้ compute แสดง fullname
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// ใช้ watch ดักจับข้อมูลเพื่อเช็ค validate ตลอด
watch([firstName, lastName, email], () => {
  isUpdated.value = false
  // reset validate ใหม่
  isValid.value = true
  errors.value = { firstName: '', lastName: '', email: '' }

  if (!validateName(firstName.value)) {
    isValid.value = false
    errors.value.firstName = 'Firstname should not contain numbers'
  }

  if (!validateName(lastName.value)) {
    isValid.value = false
    errors.value.lastName = 'Last name should not contain numbers'
  }

  if (!validateEmail(email.value)) {
    isValid.value = false
    errors.value.email = 'Email is not valid'
  }
})

onMounted(() => {
  // กำหนด default value
  firstName.value = 'ทดสอบ'
  lastName.value = 'นามสกุล'
  email.value = 'test@mail.com'
})

const saveProfile = async () => {
  isLoading.value = true
  // จำลองการส่ง API
  await new Promise((resolve) => setTimeout(resolve, 2000))
  isLoading.value = false
  isUpdated.value = true
}
</script>

<template>
  <div class="container">
    <h1>User Profile</h1>
    <div>Fullname: {{ fullName }}</div>
    <div>Email: {{ email }}</div>

    <div class="profile-form">
      <h2>Edit Profile</h2>
      <div>
        <div>First Name</div>
        <input v-model="firstName" />
        <p class="error" v-if="errors.firstName">{{ errors.firstName }}</p>
      </div>
      <div>
        <div>Last Name</div>
        <input v-model="lastName" />
        <p class="error" v-if="errors.lastName">{{ errors.lastName }}</p>
      </div>
      <div>
        <div>Email</div>
        <input v-model="email" />
        <p class="error" v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div class="loading" v-if="isLoading">Loading...</div>
      <!-- ดักไว้ว่า ถ้าไม่ valid หรือกำลัง loading ไม่ให้โหลด -->
      <button :disabled="!isValid || isLoading" @click="saveProfile">Save</button>
    </div>

    <p v-if="isUpdated">Profile updated!</p>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-form {
  width: 480px;
}

.profile-form button {
  width: 100%;
  margin-top: 20px;
}

.profile-form input {
  width: 100%;
  height: 20px;
}

.profile-form .error {
  color: red;
}

.loading {
  padding: 10px;
  margin-top: 20px;
  background-color: aliceblue;
}
</style>
