<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '../stores/book'

const bookStore = useBookStore()
const route = useRoute()
const router = useRouter()

const mode = ref('')
const bookData = reactive({
  name: '',
  author: '',
})
const bookIndex = ref(-1)

const updateBook = () => {
  if (mode.value === 'create') {
    bookStore.addBook(bookData)
  } else {
    bookStore.updateBook(bookData, bookIndex.value)
  }
  router.push({ name: 'book-list-view' })
}

onMounted(() => {
  if (route.params.id) {
    bookIndex.value = parseInt(route.params.id as string)
    const cBookData = bookStore.books[bookIndex.value]
    bookData.name = cBookData.name
    bookData.author = cBookData.author
  }
  if (route.name === 'book-create-view') {
    mode.value = 'create'
  } else {
    mode.value = 'update'
  }
})
</script>

<template>
  <div>
    Book {{ mode }} view
    <div>
      <div>Book Name</div>
      <input type="text" v-model="bookData.name" />
      <div>Book Author</div>
      <input type="text" v-model="bookData.author" />
      <div class="action">
        <button @click="updateBook()">{{ mode }} book</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.action {
  margin-top: 10px;
}
</style>
