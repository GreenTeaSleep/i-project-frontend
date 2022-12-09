<template>
    
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      errUsername: '',
      errPassword: '',
    }
  },
  methods: {
    testERROR() {
        this.errUsername = `test`
        this.errPassword = `test`
    }
  }
})
</script>