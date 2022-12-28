<template>
  <div>
    <div class="col d-flex justify-content-center">
      <div class="card text-center" style="width: 720px">
        <div class="card-body">
          <h2 class="card-title my-5">Edit Product Type</h2>
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
                  v-model="name"
                />
              </div>
              <div class="text-end my-5">
                <button
                  type="submit"
                  @click="editProductType"
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
      name: "",
    };
  },
  async mounted() {
    const result = await axios.get(
      "/api/category/" + this.$route.params.id
    );
    this.name = result.data.name;
  },
  methods: {
    async editProductType() {
      const result = await axios.put(
        "/api/category/" + this.$route.params.id,
        {
          name: this.name,
        }
      );
      this.$router.push("/admin");
    },
  },
});
</script>
