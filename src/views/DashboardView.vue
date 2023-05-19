<template>
  <div class="min-vh-100">
    <MainNavbar class="px-5 mb-5" />
    <div class="container d-flex justify-content-end mb-5">
      <div class="col text-uppercase fs-5 fw-bold mb-3">Visitaram o pet</div>

      <div>
        
        <button
        class="d-flex align-items-center btn btn-primary me-3"
        data-bs-target="#cadastrarPet"
        data-bs-toggle="modal"
      ><i class="fas fa-plus me-2"></i>Novo pet</button>
      </div>
      

      <div class="dropdown">
        <button
          class="btn btn-primary"
          type="button"
          aria-expanded="false"
          data-bs-target="#novoOutrosProced"
        data-bs-toggle="modal"
        ><i class="fas fa-plus me-2"></i>
          Novo procedimento
        </button>
      </div>
    </div>

    <ModalCadastrarPet />

    <NovoProcedimento />

    <div class="container" id="container">
      <div class="d-flex flex-wrap justify-content-center">
        <PetCard />
      </div>
    </div>
  </div>
</template>

<script>
import MainNavbar from "../components/MainNavbar.vue";
import PetCard from "../components/PetCard.vue";
import ModalCadastrarPet from "../components/ModalCadastrarPet.vue";
import NovoProcedimento from "../components/Procedimento/NovoProcedimento.vue"

export default {
  name: "DashboardView",
  components: {
    MainNavbar,
    PetCard,
    ModalCadastrarPet,
    NovoProcedimento
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>