<template>
    <section class="vh-200 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
  
              <div class="mb-md-5 mt-md-4 pb-5">
  
                <h2 class="fw-bold mb-5 text-uppercase">Sign Up</h2>
  
                <div class="d-flex p-2" v-if="errUsername">
                    <span class="badge text-bg-danger mb-1">Danger</span>
                </div>
                <div class="form-outline form-white mb-4">
                    <input type="text" id="typeUsernameX" class="form-control form-control-lg" placeholder="Username"/>
                </div>

                <div class="form-outline form-white mb-4">
                    <input type="text" id="typeFullnameX" class="form-control form-control-lg" placeholder="Your Full Name"/>
                </div>
  
                <div class="d-flex p-2" v-if="errPassword">
                    <span class="badge text-bg-danger mb-1">Danger</span>
                </div>
                <div class="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Password"/>
                </div>
                
                <div class="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Confirm Password"/>
                </div>
  
                <button class="btn btn-outline-light btn-lg px-5" @click="testERROR" type="submit">Sign Up</button>
  
              </div>
  
              <div>
                <p class="mb-0">You already have an account? <a href="/login" class="text-white-50 fw-bold">Login</a>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      errUsername: '',
      errPassword: '',
    }
  },
  methods: {
    testERROR() {
        this.errUsername = `test`
        this.errPassword = `test`
    }
  }
})
</script>
  
<style scoped>
  .gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;
  border-radius: 25px;
  
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
  }
</style>
  