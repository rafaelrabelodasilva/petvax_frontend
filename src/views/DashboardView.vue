<template>
  <div class="dashboard">
  <MainNavbar class="px-5 mb-5" />

  <div
    class="container d-flex vh-100 justify-content-center"
    id="container"
  >
  <div class="row">
    <div class="col">
      <PetCard />
    </div>
  </div>
</div>
</div>
</template>

<script>
import MainNavbar from "../components/MainNavbar.vue";
import PetCard from "../components/PetCard.vue"

export default {
  name: "DashboardView",
  components: {
    MainNavbar,
    PetCard
  }
};
</script>

<style scoped>

.dashboard {
  /* background-color: #cbe4de; */
}

.navbar {
  background-color: #2c3333;
}

.navbar-brand,
.navbar-toggler-icon {
  color: white;
}

.btn {
  background-color: #0e8388;
  color: white;
}

/* @media (max-width: 1400px) {
.container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
max-width: 1320px;
padding: 0;
box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15), inset 0 -1px 0 rgba(255,255,255,0.15);
}
} */

</style>