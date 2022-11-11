<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อประเภท</th>
          <th scope="col">Editor</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in product_type">
        <!-- https://getbootstrap.com/docs/5.2/utilities/vertical-align/ -->
        <tr class="align-middle">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item }}</td>
          <td>
            <button type="button" class="btn btn-outline-secondary">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
            |
            <button type="button" class="btn btn-outline-danger">
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
        "การผลิตพืช",
        "การผลิตปศุสัตว์",
        "การผลิตประมง",
        "การแปรรูปและผลิตภัณฑ์อาหาร",
        "ผลิตภัณฑ์ผ้าทอ/เสื้อผ้า",
        "เครื่องจักสาน",
        "ดอกไม้ประดิษฐ์",
        "เครื่องจักรกล",
        "ของชำร่วย",
        "ผลิตภัณฑ์สมุนไพร",
        "เครื่องดื่ม",
        "เครื่องประดับ/อัญมณี",
        "เครื่องไม้/เฟอร์นิเจอร์",
        "เครื่องหนัง",
        "การผลิตปัจจัยการผลิต",
        "เครื่องปั้น",
        "สิ่งประดิษฐ์จากโลหะ",
        "การผลิตสินค้าอื่นๆ",
      ],
    }
  },
})
</script>
