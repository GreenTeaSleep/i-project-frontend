<template>
  <div class="col d-flex justify-content-center">
    <div class="card text-center" style="width: 720px">
      <div class="card-body">
        <h2 class="card-title my-5">
          <font-awesome-icon icon="fa-solid fa-user" /> Login
        </h2>
        <div class="col d-flex justify-content-center">
          <div style="width: 400px">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Username</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Password</span
              >
              <input
                type="password"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <p class="mb-0">
              Don't have an account?
              <a href="/signup">Sign Up</a>
            </p>
            <div class="text-end my-5">
              <button type="submit" class="btn btn-success">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
