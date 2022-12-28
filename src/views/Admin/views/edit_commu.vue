<template>
  <div>
    <div class="col d-flex justify-content-center">
      <div class="card text-center" style="width: 720px">
        <div class="card-body">
          <h2 class="card-title my-5">Edit Community Enterprise</h2>
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
                    disabled
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
                    v-model="name"
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
                <button
                  type="submit"
                  @click="editCommu"
                  class="btn btn-success"
                >
                  Add
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
import axios from "../../../services/axios";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      cfPassword: "",
      err: "",
      full_name: "",
      name: "",
      mobile: "",
      address: "",
      regis_code: "",
    };
  },
  async mounted() {
    const dataCommu = await axios.get("/api/commu/" + this.$route.params.id);
    const dataUserCommu = await axios.get("/api/auth/users-community/edit/" + this.$route.params.id);
    this.username = dataUserCommu.data.username
    this.full_name = dataUserCommu.data.full_name

    this.name = dataCommu.data.name;
    this.mobile = dataCommu.data.mobile;
    this.address = dataCommu.data.address;
    this.regis_code = dataCommu.data.regis_code;
  },
  methods: {
    async editCommu() {
      const result = await axios.put("/api/commu/" + this.$route.params.id, {
        name: this.name,
        address: this.address,
        mobile: this.mobile,
        regis_code: this.regis_code,
      });

      const result2 = await axios.put('/api/auth/users-community/' + this.$route.params.id, {
        full_name: this.full_name
      })
      console.log(result);
      this.$router.push("/admin");
    },
    clearInput() {
      this.err = "";
    },
  },
});
</script>
