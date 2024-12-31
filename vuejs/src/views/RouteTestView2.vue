<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { onMounted } from 'vue'
const route = useRoute()

onMounted(() => {
  console.log('id', route.params.id)
})
</script>

<template>
  <div>
    Profile page
    <div>
      <div>Firstname</div>
      <input type="text" />
    </div>
    <div>
      <div>Lastname</div>
      <input type="text" />
    </div>
    <button>Update profile</button>
    <div>
      <RouterLink to="/">Go to home</RouterLink>
    </div>
    <div>params = {{ route.params.id }}</div>
  </div>
</template>
