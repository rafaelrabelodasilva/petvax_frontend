<template>
  <div class="min-vh-100">
    <MainNavbar class="px-5 mb-4" />

    <DashboardHeader />

    <ModalCadastraPet />

    <div class="container d-flex flex-wrap justify-content-center" 
      id="petCard">
      <div
        class="card d-flex mx-3 my-3"
        style="max-width: 360px"
        v-for="pet in petList"
        :key="pet._id"
      >
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
              <div class="d-flex justify-content-between">
                <p id="pet-name" class="fs-4 text card-title">{{ pet.petName }}</p>
                <a
                  @click="editarPet(pet)"
                  class=""
                  type=""
                  aria-expanded="false"
                  data-bs-target="#cadastrarPet"
                  data-bs-toggle="modal"
                >
                  <i class="fa-regular fa-pen-to-square"></i>
                  <!-- Editar -->
                </a>
              </div>

              <div class="card-text mb-0">
                <ul class="list-unstyled">
                  <li>Nascimento: {{ pet.petBirth }}</li>
                  <li>Último procedimento: Antipulgas</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="card-footer d-flex align-items-center justify-content-around flex-wrap"
          >
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

            <a
              class=""
              data-bs-toggle="modal"
              data-bs-target="#modalDeletaPet"
              @click="openModalDeletaPet(pet._id)"
              id="openModalDeletaPet"
              >Remover</a
            >
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalVerCarteirinha"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-0 gradient">
              <div class="container-fluid">
                <div
                  class="container d-flex flex-column justify-content-center align-items-center mt-4"
                >
                  <img
                    src="../assets/yuumi.png"
                    alt=""
                    class="d-flex"
                    style="width: 10rem; border-radius: 50%"
                    id="petPicture"
                  />
                  <p class="fs-2 text text-uppercase">
                    {{ pet.petName }}
                  </p>
                </div>

                <div class="container mb-4">
                  <h6 class="fs-6 text text-uppercase fw-bold">Dados do pet</h6>
                  <ul class="d-flex flex-column align-items-start p-0 m-0">
                    <li>
                      Nome do pet:
                      {{ pet.petName }}
                    </li>
                    <li>
                      Espécie:
                      {{ pet.petSpecies }}
                    </li>
                    <li>
                      Gênero:
                      {{ pet.petGender }}
                    </li>
                    <li>
                      Nascimento:
                      {{ pet.petBirth }}
                    </li>
                    <li>
                      Raça:
                      {{ pet.petBreed }}
                    </li>
                    <li>
                      Peso do pet:
                      {{ pet.petWeight }}
                    </li>
                    <li>
                      Pet castrado:
                      {{ pet.petCastrated }}
                    </li>
                  </ul>
                </div>

                <div class="container mb-3">
                  <h6 class="fs-6 text text-uppercase fw-bold">
                    Dados do responsável
                  </h6>
                  <ul class="d-flex flex-column align-items-start p-0 m-0">
                    <li>
                      Nome:
                      {{
                        pet.petResponsible.petRespFirstName +
                        " " +
                        pet.petResponsible.petRespLastName
                      }}
                    </li>
                    <li>
                      Contato principal:
                      {{ pet.petResponsible.petRespContact1 }}
                    </li>
                    <li>
                      Contato adicional:
                      {{ pet.petResponsible.petRespContact2 }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>

                <button
                  class="btn btn-primary"
                  type="button"
                  aria-expanded="false"
                  data-bs-target="#novoProcedimento"
                  data-bs-toggle="modal"
                >
                  <i class="fas fa-plus"></i>
                  Procedimento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalVerProcedimentos"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Procedimentos do pet
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div class="container">
                <div class="mb-3" id="procedimentos">
                  <div class="card-body">
                    <div class="container text-center">
                      <div class="d-flex justify-content-end mb-3">
                        <form class="d-flex" role="search">
                          <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                          />
                          <button class="btn btn-primary" type="submit">
                            Buscar
                          </button>
                        </form>
                      </div>
                      <div class="row"></div>
                      <div class="row">
                        <div class="col">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome do procedimento</th>
                                <th scope="col">Observação</th>
                                <th scope="col">Data do procedimento</th>
                                <th scope="col">Próximo reforço</th>
                                <th scope="col">Responsável</th>
                                <th scope="col">Opções</th>
                              </tr>
                            </thead>
                            <tbody>
                              <!-- 
                                Adicionado a verificação procedure.petProcedure ? antes de acessar cada propriedade. 
                                Isso garante que as propriedades sejam acessadas somente se o 
                                objeto procedure.petProcedure estiver definido, 
                                evitando o erro de "cannot read properties of undefined". 
                                Caso o objeto esteja undefined, 
                                é exibida uma string vazia ('') como valor para a célula da tabela.
                              -->
                              <tr
                                v-for="(procedure, index) in procedureList"
                                :key="procedure._id"
                              >
                                <th scope="row">{{ index + 1 }}</th>
                                <td>
                                  {{ procedure.procedureName }}
                                </td>
                                <td>
                                  {{ procedure.procedureAddInfo }}
                                </td>
                                <td>
                                  {{ procedure.procedureDate }}
                                </td>
                                <td>
                                  {{ procedure.procedureNextOne }}
                                </td>
                                <td>
                                  {{ procedure.procedureRespDoctor }}
                                </td>
                                <td>
                                  <a
                                    @click="editarProced(procedure)"
                                    class="me-3"
                                    aria-expanded="false"
                                    data-bs-target="#novoProcedimento"
                                    data-bs-toggle="modal"
                                    id="editaProced"
                                  >
                                    <i class="fa-regular fa-pen-to-square"></i>
                                </a>

                                  <a 
                                    @click="openModalDeletaProced(procedure._id)"
                                    class=""
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalDeletaProced">
                                    <i class="fa-regular fa-trash-can"></i>
                                  </a>
                                </td>
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
        class="modal fade"
        id="modalDeletaPet"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Remover pet
              </h1>
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
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-danger"
                id="btndeletarPet"
                @click="deletarPet()"
                data-bs-dismiss="modal"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalDeletaProced"
        aria-hidden="true"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Remover procedimento
              </h1>
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
                Após a exclusão não será possível recuperar os dados do procedimento.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="deletarProced()"
                data-bs-dismiss="modal"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="novoProcedimento"
        aria-hidden="true"
        aria-labelledby="novoProcedimento"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">
                Cadastrar procedimento
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form @submit.prevent="salvarProced" class="row g-3">
                <div class="col-md-6">
                  <label for="procedureName" class="form-label"
                    >Nome do procedimento</label
                  >
                  <input
                    v-model="petProcedure.procedureName"
                    type="text"
                    class="form-control"
                    id="procedureName"
                  />
                </div>

                <div class="col-md-6">
                  <label for="procedureAddInfo" class="form-label"
                    >Observação</label
                  >
                  <input
                    v-model="petProcedure.procedureAddInfo"
                    type="text"
                    class="form-control"
                    id="procedureAddInfo"
                  />
                </div>

                <div class="col-md-4">
                  <label for="procedureDate" class="form-label"
                    >Data aplicação</label
                  >
                  <input
                    v-model="petProcedure.procedureDate"
                    type="date"
                    class="form-control"
                    id="procedureDate"
                  />
                </div>

                <div class="col-md-4">
                  <label for="procedureNextOne" class="form-label"
                    >Próxima aplicação</label
                  >
                  <input
                    v-model="petProcedure.procedureNextOne"
                    type="date"
                    class="form-control"
                    id="procedureNextOne"
                  />
                </div>

                <div class="col-md-4">
                  <label for="procedureRespDoctor" class="form-label"
                    >Responsável</label
                  >
                  <input
                    v-model="petProcedure.procedureRespDoctor"
                    type="text"
                    class="form-control"
                    id="procedureRespDoctor"
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>

              <button
                @click="salvarProced()"
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MainNavbar from "../components/MainNavbar.vue";
import DashboardHeader from '../components/DashboardHeader.vue'
import ModalCadastraPet from '../components/ModalCadastraPet.vue'

export default {
  name: "DashboardView",
  components: {
    MainNavbar,
    DashboardHeader,
    ModalCadastraPet
  },
  data() {
    return {
      petList: [], //Criado array para guardar os dados da resposta.data
      procedureList: [],
      petToDelete: null, // guarda o pet que será excluído
      procedureToDelete: null,
      petId: null,
      procedureId: null,
      pet: {
        _id: "",
        petName: "",
        petSpecies: "",
        petGender: "",
        petBreed: "",
        petWeight: "",
        petBirth: "",
        petCastrated: "",
        petResponsible: {
          petRespFirstName: "",
          petRespLastName: "",
          petRespContact1: "",
          petRespContact2: "",
        },
      },
        petProcedure: {
          _id: "",
          petId: "",
          procedureName: "",
          procedureAddInfo: "",
          procedureDate: "",
          procedureNextOne: "",
          procedureRespDoctor: "",
        },
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    async list() {
      try {
        const resposta = await axios.get("/pet");
        this.petList = resposta.data;
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
    },
    openModalDeletaProced(procedureId) {
      console.log(procedureId)
      // encontra o pet pelo id
      const procedimento = this.procedureList.find((procedure) => procedure._id === procedureId);
      // guarda o pet que será excluído
      this.procedureToDelete = procedimento;
      console.log(this.procedureToDelete)
      // exibe o modal de exclusão
    },
    async deletarPet() {
      const petId = this.petToDelete._id;
      try {
        await axios.delete(`/pet/${petId}`);
        alert('Pet excluído com sucesso!')
        this.list();
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao excluir o pet.";
      }
    },
    async deletarProced() {
      const procedureId = this.procedureToDelete._id;
      try {
        await axios.delete(`/procedure/${procedureId}`);
        alert('Procedimento excluído com sucesso!')
        this.list();
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao excluir o procedimento.";
      }
    },
    async openModalCarteirinha(petId) {
      try {
        const resposta = await axios.get(`/pet/${petId}`);
        this.pet = resposta.data;
        this.petProcedure.petId = resposta.data._id
      } catch (error) {
        console.log(error);
        this.error = "Ocorreu um erro ao buscar a lista de pets.";
      }
    },

    async openModalProcedimentos(petId) {
      try {
        const resposta = await axios.get(`/procedure/pet/${petId}`);
        this.procedureList = resposta.data;
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao buscar os procedimentos do pet.";
      }
    },
    cadastrarPet() {
      if(!this.pet._id) {
        axios
        .post("/pet", this.pet)
        .then(async (res) => {
          const resp = await res.data;
          console.log(resp);
          this.list();
          alert("Salvo com sucesso!");
        })
        .catch((error) => {
          this.alertError = "Ocorreu um erro.";
          console.error(error.response.data.message);
        });
      }else{
        axios
        .patch(`/pet/${this.pet._id}`, this.pet)
        .then(async (res) => {
          const resp = await res.data;
          console.log(resp);
          alert("Pet atualizado com sucesso!");
          this.list();
        })
        .catch((error) => {
          this.alertError = "Ocorreu um erro.";
          console.error(error.response.data.message);
        });
      }
    },
    salvarProced() {
      if(!this.petProcedure._id) {
        axios
        .post('/procedure', this.petProcedure)
        .then(async (res) => {
          const resp = await res.data;
          console.log(resp);
          alert("Procedimento salvo com sucesso!");
          this.list(); // Chamar a função list() para atualizar a lista de procedimentos
        })
        .catch((error) => {
          this.alertError = "Ocorreu um erro.";
          console.error(error);
        });
      }else{
        axios.patch(`/procedure/${this.petProcedure._id}`, this.petProcedure)
        .then(async (res) => {
          const resp = await res.data;
          console.log(resp);
          alert("Procedimento atualizado com sucesso!");
          this.list(); // Chamar a função list() para atualizar a lista de procedimentos
        })
        .catch((error) => {
          this.alertError = "Ocorreu um erro.";
          console.log(this.petProcedure._id)
          console.error(error);
        });
      }      
    },
    editarProced(procedure) {
      this.petProcedure = procedure;
    },
    editarPet(pet) {
      this.pet = pet;
    },
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

#petPicture {
  border: 6px solid #2e4f4f;
}

.gradient {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 9%,
    rgba(46, 79, 79, 1) 100%
  );
  border-radius: 5px;
}

ul > li {
  list-style: none;
}
</style>