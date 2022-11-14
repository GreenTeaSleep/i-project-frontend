<template>
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            รายละเอียดกลุ่มวิสาหกิจชุมชน
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h3>ชื่อ :</h3>
                <h3>
                  {{ enterprise_details[0].name }}
                </h3>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h3>อำเภอ :</h3>
                <h3>
                  {{ enterprise_details[0].district }}
                </h3>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <h3>ประเภท :</h3>
                <h3>
                  {{ enterprise_details[0].type }}
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      enterprise_details: [
        {
          name: "การเกษตรตำบลบางสวรรค์",
          district: "เมืองสงขลา",
          type: "การผลิตพืช",
        },
        {
          name: "วิสาหกิจชุมชนกลุ่มแม่บ้านเกษตรกรบ้านคลองฉนวน",
          district: "สทิงพระ",
          type: "การผลิตพืช",
        },
      ],
    }
  },
})
</script>

<style scoped></style>
