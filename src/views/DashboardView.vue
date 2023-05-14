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
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ><i class="fas fa-plus me-2"></i>
          Novo procedimento
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" data-bs-target="#novaVacina"
        data-bs-toggle="modal"><i class="fas fa-plus me-2"></i>Vacinas</button></li>
          <li><button class="dropdown-item" data-bs-target="#novoVermif"
        data-bs-toggle="modal"><i class="fas fa-plus me-2"></i>Vermifugação</button></li>
          <li><button class="dropdown-item" data-bs-target="#novoAntipulgas"
        data-bs-toggle="modal"><i class="fas fa-plus me-2"></i>Antipulgas</button></li>
          <li><button class="dropdown-item" data-bs-target="#novoOutrosProced"
        data-bs-toggle="modal"><i class="fas fa-plus me-2"></i>Outros procedimentos</button></li>
        </ul>
      </div>
    </div>

    <ModalCadastrarPet />

    <ModalNovaVacina />

    <ModalNovoVermif />

    <ModalNovoAntipulgas />

    <ModalNovoOutrosProced />

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
import ModalNovaVacina from "../components/Procedimento/NovaVacina.vue";
import ModalNovoVermif from "../components/Procedimento/NovoVermifugo.vue"
import ModalNovoAntipulgas from "../components/Procedimento/NovoAntipulgas.vue"
import ModalNovoOutrosProced from "../components/Procedimento/NovoOutrosProced.vue"

export default {
  name: "DashboardView",
  components: {
    MainNavbar,
    PetCard,
    ModalCadastrarPet,
    ModalNovaVacina,
    ModalNovoVermif,
    ModalNovoAntipulgas,
    ModalNovoOutrosProced
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>