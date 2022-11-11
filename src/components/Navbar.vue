<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/">
        CE-Songkhla
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/admin">Admin</a>
          </li>
        </ul>
        <form class="d-flex">
          <div v-if="!user">
            <a class="btn btn-outline-light" href="/signup">Sign Up</a> |
            <a class="btn btn-success" href="/login">Login</a>
          </div>
          <div v-if="user">
            <a class="btn btn-danger" href="/logout">Logout</a>
          </div>
        </form>

      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      user: null,
      token: null,
    }
  },
})
</script>