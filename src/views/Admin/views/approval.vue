<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อกลุ่มวิสาหกิจชุมชน</th>
          <th scope="col">
            <p class="text-center" style="width: 100px; display: inline-block">
              อนุมัติ
            </p>
            |
            <p class="text-center" style="width: 100px; display: inline-block">
              รายละเอียด
            </p>
            |
            <p class="text-center" style="width: 100px; display: inline-block">
              ลบ
            </p>
          </th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in product_type">
        <!-- https://getbootstrap.com/docs/5.2/utilities/vertical-align/ -->
        <tr class="align-middle">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-success"
              style="width: 100px"
            >
              <font-awesome-icon icon="fa-solid fa-square-check" />
            </button>
            |
            <button
              type="button"
              class="btn btn-outline-secondary"
              style="width: 100px"
            >
              <font-awesome-icon icon="fa-solid fa-circle-info" />
            </button>
            |
            <button
              type="button"
              class="btn btn-outline-danger"
              style="width: 100px"
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
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      product_type: [
        "การเกษตรตำบลบางสวรรค์",
        "กลุ่มแม่บ้านเกษตรกรพ่อตาหินช้าง",
        "กลุ่มแปรรูปผลิตภัณฑ์การเกษตรตำบลน้ำชำ",
      ],
    }
  },
})
</script>
