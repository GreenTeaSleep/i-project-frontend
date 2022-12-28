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
                  <label class="input-group-text" for="inputGroupSelect01"
                    >อำเภอ</label
                  >
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="amphure"
                    id="amphure"
                    @change="changeFunc"
                  >
                    <option disabled selected>--- เลือกอำเภอ ---</option>
                  </select>
                </div>
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >ตำบล</label
                  >
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="tambon"
                    id="tambon"
                    @change="changeFunc2"
                  >
                    <option selected>--- เลือกตำบล ---</option>
                  </select>
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
import axios from "../../../services/axios";

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
      amp: "",
      tam: "",
    };
  },
  methods: {
    async signUp() {
      if (this.password != this.cfPassword) {
        this.err = "msg";
      } else {
        const userCommuData = {
          username: this.username,
          password: this.password,
          full_name: this.full_name,
        };
        const commuData = {
          commu_name: this.commu_name,
          mobile: this.mobile,
          address: this.address,
          regis_code: this.regis_code,
        };
        const result = await axios.post("/api/auth/user-commu", userCommuData);
        const result2 = await axios.post("/api/commu", commuData);
      }
    },
    changeFunc() {
      var y = document.getElementById("tambon");
      var x = document.getElementById("amphure");
      // @ts-ignore
      while (y?.options.length > 0) {
        // @ts-ignore
        y?.remove(0);
      }
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json"
      )
        .then((res) => res.json())
        .then((data) => {
          data.filter(
            (item: { amphure_id: any; name_th: string; id: string }) => {
              // @ts-ignore
              if (item.amphure_id == x.options[x.selectedIndex].value) {
                var option = document.createElement("option");
                option.text = item.name_th;
                option.value = item.id;
                y?.appendChild(option);
              }
            }
          );
          // @ts-ignore
          this.amp = x?.options[x?.selectedIndex].text;
          // @ts-ignore
          this.tam = y?.options[y?.selectedIndex].text;
          // @ts-ignore
          console.log(`อำเภอ: ${x?.options[x?.selectedIndex].text}\nตำบล: ${y?.options[y?.selectedIndex].text}`);
        });
    },
    changeFunc2() {
      var y = document.getElementById("tambon");

      // @ts-ignore
      this.tam = y?.options[y?.selectedIndex].text;
      // @ts-ignore
      // console.log(`ตำบล: ${y?.options[y?.selectedIndex].text}`);

      // alert(`AMP: ${this.amp}, TAM: ${this.tam}`)
    },
    clearInput() {
      this.err = "";
    },
  },
  created() {
    if (true) {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json"
      )
        .then((res) => res.json())
        .then((data) => {
          data.filter(
            (item: { province_id: string; name_th: string; id: string }) => {
              if (
                item.province_id == "70" &&
                item.name_th != "ท้องถิ่นเทศบาลตำบลสำนักขาม"
              ) {
                var amphure = document.getElementById("amphure");
                var option = document.createElement("option");
                option.text = item.name_th;
                option.value = item.id;
                amphure?.appendChild(option);
              }
            }
          );
        });
    }
  },
});
</script>
