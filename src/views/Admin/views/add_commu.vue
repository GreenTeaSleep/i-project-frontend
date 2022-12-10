<template>
  <div>
    <div class="col d-flex justify-content-center">
      <div class="card text-center" style="width: 720px">
        <div class="card-body">
          <h2 class="card-title my-3">Add Community Enterprise</h2>
          <div class="col d-flex justify-content-center">
            <div style="width: 400px">
              <div>
                <h3 class="mb-3">ข้อมูลผู้ใช้</h3>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >Username</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-model="username"
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
                    v-model="full_name"
                  />
                </div>
              </div>
              <div class="mt-5">
                <h3 class="mb-3">ข้อมูลกลุ่มวิสาหกิจชุมชน</h3>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >ชื่อวิสาหกิจชุมชน</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-model="commu_name"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >รหัสทะเบียน</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-model="regis_code"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >ที่ตั้ง</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-model="address"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >โทรศัพท์</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    v-model="mobile"
                  />
                </div>
              </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      cfPassword: "",
      err: "",
      full_name: "",
      commu_name: "",
      mobile: "",
      address: "",
      regis_code: "",
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
