<template>
  <div class="min-vh-100">
    <MainNavbar class="px-5 mb-5" />

    <div class="container d-flex justify-content-end mb-5">
      <p class="col text-uppercase fs-5 fw-bold mb-3">Visitaram o pet</p>
      <button
        class="d-flex align-items-center btn btn-primary me-3"
        data-bs-target="#cadastrarPet"
        data-bs-toggle="modal"
      >
        <i class="fas fa-plus me-2"></i>Novo pet
      </button>
    </div>

    <ModalCadastrarPet />

    <div class="container d-flex flex-wrap justify-content-center" id="container">
        <PetCard />
    </div>
  </div>
</template>

<script>
import MainNavbar from "../components/MainNavbar.vue";
import PetCard from "../components/PetCard.vue";
import ModalCadastrarPet from "../components/ModalCadastrarPet.vue";

export default {
  name: "DashboardView",
  components: {
    MainNavbar,
    PetCard,
    ModalCadastrarPet,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>