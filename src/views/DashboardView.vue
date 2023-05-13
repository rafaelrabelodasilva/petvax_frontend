<template>
  <div class="min-vh-100">
    <MainNavbar class="px-5 mb-5" />
    <div class="container d-flex justify-content-end mb-5">
      <div class="col text-uppercase fs-5 fw-bold mb-3">
                        Pets cadastrados
                    </div>
      <button
        class="btn btn-primary"
        data-bs-target="#cadastrarPet"
        data-bs-toggle="modal">
        Cadastrar novo pet
      </button>
    </div>

    <ModalCadastrarPet/>

    <div class="container" id="container">
      <div class="d-flex flex-wrap justify-content-center">
          <PetCard/>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavbar from "../components/MainNavbar.vue";
import PetCard from "../components/PetCard.vue";
import ModalCadastrarPet from "../components/ModalCadastrarPet.vue"

export default {
  name: "DashboardView",
  components: {
    MainNavbar,
    PetCard,
    ModalCadastrarPet
  },
  data() {
    return {
    };
  },
  methods: {

  }
};
</script>

<style scoped>

</style>