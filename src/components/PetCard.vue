<template>
  <div class="card mb-3" style="max-width: 360px" v-for="pet in petList" :key="pet._id">
    <div class="row g-0">
      <div class="col-md-4 d-flex align-items-center">
        <img
          src="../assets/gato_sentado_sem_fundo.png"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>

      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title mb-3">{{ pet.petName }}</h5>
          <div class="card-text mb-0">
            <ul class="list-unstyled">
              <li>Nascimento: {{ pet.petBirth }}</li>
              <li>Raça: {{ pet.petBreed }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <a
          class="me-3"
          data-bs-toggle="modal"
          data-bs-target="#modalVerCarteirinha"
          @click="openModalCarteirinha(pet._id)"
          >Ver carteirinha</a
        >
        <router-link to="/procedimentos" class="me-3"
          >Procedimentos</router-link
        >
        <a class="me-3" data-bs-toggle="modal" data-bs-target="#modalDeletaPet"
        @click="openModalDeletaPet(pet._id)"
          >Remover</a
        >
      </div>
    </div>
  </div>

  <div
    v-show="showModalCarteirinha"
    class="modal fade"
    id="modalVerCarteirinha"
    aria-hidden="true"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container d-flex justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="container-fluid">
            <div
              class="container d-flex flex-column justify-content-center align-items-center mb-4"
            >
              <img
                src="../assets/yuumi.png"
                alt=""
                class="d-flex"
                style="width: 10rem; border-radius: 50%"
              />
              <h4 class="text-uppercase">
              {{
                petList.find((pet) => pet._id === petIdSelected)?.petName
              }}
            </h4>
            </div>

            <div class="container mb-3">
              <h6>Dados do pet</h6>
              <ul class="d-flex flex-column align-items-start p-0 m-0">
                <li>
                Nome do pet: {{
                  petList.find((pet) => pet._id === petIdSelected)?.petName
                }}
              </li>
              <li>
                Espécie: {{
                  petList.find((pet) => pet._id === petIdSelected)?.petSpecies
                }}
              </li>
              <li>
                Gênero: {{
                  petList.find((pet) => pet._id === petIdSelected)?.petGender
                }}
              </li>
                <li>Nascimento: {{ petList.find((pet) => pet._id === petIdSelected)?.petBirth }}</li>
                <li>Raça: {{ petList.find((pet) => pet._id === petIdSelected)?.petBreed }}</li>
              </ul>
            </div>

            <div class="container mb-3">
              <h6>Dados do responsável</h6>
              <ul class="d-flex flex-column align-items-start p-0 m-0">
                <li>Nome: {{ petList.find((pet) => pet._id === petIdSelected)?.petResFirstName + ' ' + petList.find((pet) => pet._id === petIdSelected)?.petRespLastName }}</li>
                <li>Contato principal: {{ petList.find((pet) => pet._id === petIdSelected)?.petRespContact1 }}</li>
                <li>Contato adicional: {{ petList.find((pet) => pet._id === petIdSelected)?.petRespContact2 }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-show="showModalDeletarPet"
    class="modal fade"
    id="modalDeletaPet"
    aria-hidden="true"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Remover pet</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="mb-1">Você tem certeza?</p>
          <p class="mb-1">
            Após a exclusão não será possível recuperar os dados do pet.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            Cancelar
          </button>
          <button type="button" class="btn btn-danger" @click="deletarPet()">Remover</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PetCard",
  components: {},
  data() {
    return {
      showModalCarteirinha: false,
      showModalDeletarPet: false,
      petList: [],
      petIdSelected: null,
      petToDelete: null // guarda o pet que será excluído
    };
  },
  methods: {
    async list() {
      try {
        const res = await axios.get("/pet");
        this.petList = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    openModalDeletaPet(petId) {
    // encontra o pet pelo id
    const pet = this.petList.find((pet) => pet._id === petId);
    // guarda o pet que será excluído
    this.petToDelete = pet;
    // exibe o modal de exclusão
    this.showModalDeletarPet = true;
    },
    async deletarPet() {
      const petId = this.petToDelete._id;
      try {
        await axios.delete(`/pet/${petId}`);
      // remove o pet excluído da lista
        this.petList = this.petList.filter((pet) => pet._id !== petId);
        location.reload(); //Preciso melhorar esta parte porque fiz como se fosse um f5 na tela
      } catch (error) {
      console.error(error);
      }
    },
    openModalCarteirinha(petId) {
      this.petIdSelected = petId;
      this.showModalCarteirinha = true;
    },
  },
  mounted() {
    this.list();
  },
};
</script>

<style scoped>
.card {
  box-shadow: 9px 9px 7px 4px rgba(0, 0, 0, 0.1);
}

#photo-pet {
  width: 200px;
  border-radius: 50%;
  border-style: solid;
  border-width: 6px;
  border-color: #eff5f5;
}

ul > li {
  list-style: none;
}
</style>