<template>
  <div class="card d-flex mx-3 my-3" style="max-width: 360px" v-for="pet in petList" :key="pet._id">
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
          <h5 class="card-title">{{ pet.petName }}</h5>
          <div class="card-text mb-0">
            <ul class="list-unstyled">
              <li>Idade: 4 meses</li>
              <li>Último procedimento: Antipulgas</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex align-items-center justify-content-around flex-wrap">
        <a
          class=""
          data-bs-toggle="modal"
          data-bs-target="#modalVerCarteirinha"
          @click="openModalCarteirinha(pet._id)"
          >Ver carteirinha</a
        >

        <a
          class=""
          data-bs-toggle="modal"
          data-bs-target="#modalVerProcedimentos"
          @click="openModalProcedimentos(pet._id)"
          >Procedimentos</a
        >

        <a class="" data-bs-toggle="modal" data-bs-target="#modalDeletaPet"
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

            <div class="container mb-4">
              <h6 class="text-uppercase">Dados do pet</h6>
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
                <li>Peso do pet: {{ petList.find((pet) => pet._id === petIdSelected)?.petWeight }}</li>
                <li>Pet castrado: {{ petList.find((pet) => pet._id === petIdSelected)?.petCastrated }}</li>
              </ul>
            </div>

            <div class="container mb-3">
              <h6 class="text-uppercase">Dados do responsável</h6>
              <ul class="d-flex flex-column align-items-start p-0 m-0">
                <li>Nome: {{ petList.find((pet) => pet._id === petIdSelected)?.petResponsible.petRespFirstName + ' ' + petList.find((pet) => pet._id === petIdSelected)?.petResponsible.petRespLastName }}</li>
                <li>Contato principal: {{ petList.find((pet) => pet._id === petIdSelected)?.petResponsible.petRespContact1 }}</li>
                <li>Contato adicional: {{ petList.find((pet) => pet._id === petIdSelected)?.petResponsible.petRespContact2 }}</li>
                <li>Responsável principal: {{ petList.find((pet) => pet._id === petIdSelected)?.petResponsible.petRespPrincipal }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-show="showModalProcedimentos"
    class="modal fade"
    id="modalVerProcedimentos"
    aria-hidden="true"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Procedimentos do pet Yuumi</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="container">
            <div class="card my-3" id="vacina">
      <div class="card-body">
        <div class="container text-center">
          <div class="row">
            <div class="col text-uppercase fs-5 fw-bold mb-3">Vacinas</div>
          </div>
          <div class="row">
            <div class="col">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Data</th>
                    <th scope="col">Nome da vacina</th>
                    <th scope="col">Observação</th>
                    <th scope="col">Próximo reforço</th>
                    <th scope="col">Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(procedure, index) in procedureList"
                    :key="procedure._id"
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ procedure.petVaccine.vaccData }}</td>
                    <td>{{ procedure.petVaccine.vaccName }}</td>
                    <td>{{ procedure.petVaccine.vaccAddInfo }}</td>
                    <td>{{ procedure.petVaccine.vaccNextOne }}</td>
                    <td>{{ procedure.petVaccine.vaccRespDoctor }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3" id="vermifugo">
      <div class="card-body">
        <div class="container text-center">
          <div class="row">
            <div class="col text-uppercase fs-5 fw-bold mb-3">Vermifugação</div>
          </div>
          <div class="row">
            <div class="col">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Data</th>
                    <th scope="col">Nome do vermífugo</th>
                    <th scope="col">Dose</th>
                    <th scope="col">Observação</th>
                    <th scope="col">Próximo reforço</th>
                    <th scope="col">Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(procedure, index) in procedureList"
                    :key="procedure._id"
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ procedure.petVermifugation.vermData }}</td>
                    <td>{{ procedure.petVermifugation.vermName }}</td>
                    <td>{{ procedure.petVermifugation.vermQty }}</td>
                    <td>{{ procedure.petVermifugation.vermAddInfo }}</td>
                    <td>{{ procedure.petVermifugation.vermNextOne }}</td>
                    <td>{{ procedure.petVermifugation.vermRespDoctor }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3" id="antipulgas">
      <div class="card-body">
        <div class="container text-center">
          <div class="row">
            <div class="col text-uppercase fs-5 fw-bold mb-3">Antipulgas</div>
          </div>
          <div class="row">
            <div class="col">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Data</th>
                    <th scope="col">Nome do antipulgas</th>
                    <th scope="col">Observação</th>
                    <th scope="col">Próximo reforço</th>
                    <th scope="col">Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(procedure, index) in procedureList"
                    :key="procedure._id"
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ procedure.petAntiFlea.fleaData }}</td>
                    <td>{{ procedure.petAntiFlea.fleaName }}</td>
                    <td>{{ procedure.petAntiFlea.fleaAddInfo }}</td>
                    <td>{{ procedure.petAntiFlea.fleaNextOne }}</td>
                    <td>{{ procedure.petAntiFlea.fleaRespDoctor }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3" id="procedimentos">
      <div class="card-body">
        <div class="container text-center">
          <div class="row">
            <div class="col text-uppercase fs-5 fw-bold mb-3">
              Outros procedimentos
            </div>
          </div>
          <div class="row">
            <div class="col">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Data</th>
                    <th scope="col">Nome do procedimento</th>
                    <th scope="col">Observação</th>
                    <th scope="col">Peso do pet (kg)</th>
                    <th scope="col">Responsável</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(procedure, index) in procedureList"
                    :key="procedure._id"
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ procedure.petOtherProcedure.otherDate }}</td>
                    <td>{{ procedure.petOtherProcedure.otherName }}</td>
                    <td>{{ procedure.petOtherProcedure.otherAddInfo }}</td>
                    <td>{{ procedure.petOtherProcedure.otherPetWeight }}</td>
                    <td>{{ procedure.petOtherProcedure.otherRespDoctor }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
          <button type="button" class="btn btn-danger" @click="deletarPet()" data-bs-dismiss="modal">Remover</button>
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
      showModalProcedimentos: false,
      showModalDeletarPet: false,
      petList: [],
      petIdSelected: null,
      petToDelete: null, // guarda o pet que será excluído
      procedureList: [],
      petId: null,
      error: null, // adicionado para armazenar mensagens de erro
    };
  },
  methods: {
    async list() {
      try {
        const res = await axios.get("/pet");
        this.petList = res.data;
      } catch (error) {
        console.log(error);
        this.error = "Ocorreu um erro ao buscar a lista de pets.";
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
        // remove o pet excluído da lista localmente
        this.petList = this.petList.filter((pet) => pet._id !== petId);
        this.showModalDeletarPet = false; // fecha o modal de exclusão
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao excluir o pet.";
      }
    },
    openModalCarteirinha(petId) {
      this.petIdSelected = petId;
      this.showModalCarteirinha = true;
    },
    async openModalProcedimentos(petId) {
      this.petIdSelected = petId;
      try {
        const res = await axios.get(`/procedure/pet/${petId}`);
        this.procedureList = res.data;
        this.showModalProcedimentos = true;
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao buscar os procedimentos do pet.";
      }
    },
    clearError() {
      this.error = null;
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