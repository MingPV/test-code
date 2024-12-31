<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useBookStore } from '../stores/book'

const bookStore = useBookStore()
</script>

<template>
  <div>
    Book List view

    <RouterLink :to="{ name: 'book-create-view' }">
      <button>Add new book</button>
    </RouterLink>

    <ul>
      <li v-for="(book, index) in bookStore.books" :key="book.name + book.author">
        ({{ index }}) {{ book.name }} by {{ book.author }}
        <RouterLink :to="{ name: 'book-update-view', params: { id: index } }">
          <button>Edit</button>
        </RouterLink>
        <button @click="bookStore.removeBook(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
