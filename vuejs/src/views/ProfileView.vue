<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'
import { onMounted, ref, watch } from 'vue'

// define user store ขึ้นมา
const user = useUserStore()

const firstname = ref('')
const lastname = ref('')
const isUpdated = ref(false)

const updateProfile = () => {
  // เรียกใช้ updateProfile ใน user store
  user.updateProfile({
    firstname: firstname.value,
    lastname: lastname.value,
  })
  // บอกว่าข้อมูล up to date แล้ว
  isUpdated.value = true
}

// ดักจับเพื่อปรับตัวแปร isUpdated เป็น false เพื่อบอกว่าข้อมูลยังไม่ up to date
watch([firstname, lastname], () => {
  isUpdated.value = false
})

// เริ่มต้น เราจะนำข้อมูลจาก store เก็บเข้ามาในตัวแปรของ component ก่อน
onMounted(() => {
  firstname.value = user.firstname
  lastname.value = user.lastname
})
</script>

<template>
  <div>
    Profile page
    <div>
      <div>Firstname</div>
      <input type="text" v-model="firstname" />
    </div>
    <div>
      <div>Lastname</div>
      <input type="text" v-model="lastname" />
    </div>
    <div v-if="isUpdated">Profile update to store</div>
    <button @click="updateProfile()">Update profile</button>
    <div>
      <RouterLink to="/">Go to home</RouterLink>
    </div>
  </div>
</template>
