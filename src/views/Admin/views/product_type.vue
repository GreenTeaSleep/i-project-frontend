<template>
  <div>
    <div class="text-end">
      <a
        type="button"
        href="/admin/create-product-type"
        class="btn btn-primary"
      >
        เพิ่มประเภท <font-awesome-icon icon="fa-solid fa-plus" />
      </a>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อประเภท</th>
          <th scope="col">Editor</th>
        </tr>
      </thead>
      <tbody v-for="({ name, category_id }, index) in product_type">
        <!-- https://getbootstrap.com/docs/5.2/utilities/vertical-align/ -->
        <tr class="align-middle">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ name }}</td>
          <td>
            <button
              type="button"
              @click="editData(category_id)"
              class="btn btn-outline-secondary"
            >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
            |
            <button
              @click="deleteData(category_id)"
              type="button"
              class="btn btn-outline-danger"
            >
              <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "../../../services/axios";

export default defineComponent({
  data() {
    return {
      product_type: [],
    };
  },
  methods: {
    async deleteData(id: number) {
      if (confirm("You want to delete the data right?") === true) {
        console.log(id)
        const result = await axios.delete("/api/category/" + id.toString());
        this.$router.go(0);
      }
    },
    async editData(id: number) {
      this.$router.push("/admin/edit-product-type/" + id.toString());
    },
  },
  async mounted() {
    const result = await axios.get("/api/category");
    this.product_type = result.data;
    // alert(typeof this.product_type);
  },
});
</script>
