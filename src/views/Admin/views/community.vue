<template>
  <div>
    <div class="text-end">
      <a type="button" href="/admin/create-commu" class="btn btn-primary">
        เพิ่มวิสาหกิจชุมชน <font-awesome-icon icon="fa-solid fa-plus" />
      </a>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อกลุ่มวิสาหกิจชุมชน</th>
          <th scope="col">Editor</th>
        </tr>
      </thead>
      <tbody v-for="({ name, commu_id, confirm_status }, index) in commu">
        <!-- https://getbootstrap.com/docs/5.2/utilities/vertical-align/ -->
        <tr class="align-middle">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ name }}</td>
          <td>
            <button
              v-if="Number(confirm_status) === 1"
              @click="test(confirm_status, commu_id)"
              type="button"
              class="btn btn-outline-success"
            >
              <font-awesome-icon icon="fa-solid fa-toggle-on" />
            </button>
            <button
              v-else
              @click="test(confirm_status, commu_id)"
              type="button"
              class="btn btn-outline-danger"
            >
              <font-awesome-icon icon="fa-solid fa-toggle-off" />
            </button>
            |
            <button
              type="button"
              @click="editData(commu_id)"
              class="btn btn-outline-secondary"
            >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
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
      commu: [],
    };
  },
  methods: {
    editData(id: number) {
      this.$router.push("/admin/edit-commu/" + id.toString());
    },
    async test(id: number, id2: number) {
      console.log(id2);
      if (id == 1) {
        const result = await axios.put("/api/commu/" + id2, {
          confirm_status: 2,
        });
        console.log(result);
      } else {
        const result = await axios.put("/api/commu/" + id2, {
          confirm_status: 1,
        });
        console.log(result);
      }
      this.$router.go(0);
    },
  },
  async mounted() {
    const result = await axios.get("/api/commu/confirmed");
    // console.log(result.data);
    this.commu = result.data;
    // alert(typeof this.product_type);
  },
});
</script>
