import { defineStore } from 'pinia'

interface userData {
  firstname: string
  lastname: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    firstname: '',
    lastname: '',
  }),
  actions: {
    updateProfile(userData: userData) {
      this.firstname = userData.firstname
      this.lastname = userData.lastname
    },
  },
})
