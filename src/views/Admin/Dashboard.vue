<template>
  <h1 class="mb-5">Dashboard Admin Page</h1>
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
      >
        ประเภทผลิตภัณฑ์
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile"
        type="button"
        role="tab"
        aria-controls="pills-profile"
        aria-selected="false"
      >
        กลุ่มวิสาหกิจชุมชน
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-contact-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-contact"
        type="button"
        role="tab"
        aria-controls="pills-contact"
        aria-selected="false"
      >
        รออนุมัติ
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="pills-disabled-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-disabled"
        type="button"
        role="tab"
        aria-controls="pills-disabled"
        aria-selected="false"
        disabled
      >
        Disabled
      </button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
      tabindex="0"
    >
      <product_typeVue />
    </div>
    <div
      class="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
      tabindex="0"
    >
      <communityVue />
    </div>
    <div
      class="tab-pane fade"
      id="pills-contact"
      role="tabpanel"
      aria-labelledby="pills-contact-tab"
      tabindex="0"
    >
      <approval />
    </div>
    <div
      class="tab-pane fade"
      id="pills-disabled"
      role="tabpanel"
      aria-labelledby="pills-disabled-tab"
      tabindex="0"
    >
      ...
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import product_typeVue from "./views/product_type.vue"
import communityVue from "./views/community.vue"
import approval from "./views/approval.vue"

export default defineComponent({
  name: "Dashboard Admin",
  components: {
    product_typeVue,
    communityVue,
    approval,
  },
  data() {
    return {
      user: "",
    }
  },
  methods: {},
})
</script>
