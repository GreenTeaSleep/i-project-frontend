<template>
  <div class="col d-flex justify-content-center">
    <div class="card text-center" style="width: 720px">
      <div class="card-body">
        <h2 class="card-title my-5">
          <font-awesome-icon icon="fa-solid fa-user" /> Register
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
                required
              />
              <div class="invalid-feedback"></div>
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
                v-model="password"
                @input="clearInput"
                required
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                v-if="err"
              >
                Passwords do not match
                <span class="visually-hidden">unread messages</span>
              </span>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Confirm Password</span
              >
              <input
                type="password"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                v-model="cfPassword"
                @input="clearInput"
                required
              />
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                v-if="err"
              >
                Passwords do not match
                <span class="visually-hidden">unread messages</span>
              </span>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Full Name</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Mobile</span
              >
              <input
                type="tel"
                maxlength="10"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Address</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <p class="mb-0">
              Have an account!!
              <a href="/Login">Login</a>
            </p>
            <div class="text-end my-5">
              <button type="submit" @click="signUp" class="btn btn-primary">
                Sign Up
              </button>
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
  name: "Navbar",
  data() {
    return {
      password: "",
      cfPassword: "",
      err: "",
    };
  },
  methods: {
    signUp() {
      if (this.password != this.cfPassword) {
        this.err = "msg";
      }
    },
    clearInput() {
      this.err = "";
    },
  },
});
</script>
