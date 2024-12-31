<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'

const user = useUserStore()

const searchText = ref('')
</script>

<template>
  <div>
    Home page
    <input type="text" v-model="searchText" />
    <div>
      <RouterLink
        :to="{
          name: 'testroute',
          query: { search: searchText },
        }"
        >Go to testroute</RouterLink
      >
    </div>
    <div>
      <RouterLink
        :to="{
          name: 'testroute2',
          params: { id: 1 },
        }"
        >Go to testroute2</RouterLink
      >
    </div>
    <div>
      <div>
        (From profile)
        <div>Firstname: {{ user.firstname }}</div>
        <div>Lastname: {{ user.lastname }}</div>
      </div>
      <div>
        <RouterLink
          :to="{
            name: 'profile',
            params: { id: 1 },
          }"
          >Go to profile</RouterLink
        >
      </div>
      <div>
        <RouterLink
          :to="{
            name: 'book-list-view',
          }"
          >Go to Book List</RouterLink
        >
      </div>
      <div>
        <RouterLink
          :to="{
            name: 'cycle',
          }"
          >Go to cycle test</RouterLink
        >
      </div>
    </div>
  </div>
</template>
