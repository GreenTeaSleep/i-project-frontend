<template>
  <div>
    <div class="col d-flex justify-content-center">
      <div class="card text-center" style="width: 720px">
        <div class="card-body">
          <h2 class="card-title my-5">Add Product Type</h2>
          <div class="col d-flex justify-content-center">
            <div style="width: 400px">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"
                  >Type Name</span
                >
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  v-model="title"
                  required
                />
              </div>
              <div class="text-end my-5">
                <button
                  type="submit"
                  @click="addProductType"
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
      title: "",
    };
  },
  methods: {
    async addProductType() {
      if (this.title === "") {
        alert("โปรดกรอกข้อมูล");
      } else {
        const result = await axios.post("/api/product-type", {
          title: this.title,
        });
        console.log(this.title);
        console.log(result);
        this.$router.push("/admin");
      }
    },
  },
});
</script>
