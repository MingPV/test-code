import { defineStore } from 'pinia'

interface book {
  name: string
  author: string
}

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [] as book[],
  }),
  actions: {
    addBook(book: book) {
      this.books.push(book)
    },
    updateBook(book: book, index: number) {
      this.books.splice(index, 1, book)
    },
    removeBook(index: number) {
      this.books.splice(index, 1)
    },
  },
})
