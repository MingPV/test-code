<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello, Vue.js!',
      count: 0,
    }
  },
  methods: {
    incrementCount() {
      this.count++
    },
  },
  mounted() {
    console.log('Component mounted')
  },
  beforeUnmount() {
    console.log('Cleaning up...')
  },
  created() {
    console.log('Component created')
  },
  updated() {
    console.log('Component updated')
  },
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="incrementCount">Click me</button>
    <p>Count: {{ count }}</p>
  </div>
</template>
