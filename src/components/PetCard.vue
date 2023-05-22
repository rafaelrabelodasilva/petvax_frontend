<template>
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
          <p class="fs-4 text card-title">{{ pet.petName }}</p>
          <div class="card-text mb-0">
            <ul class="list-unstyled">
              <li>Idade: 4 meses</li>
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
              <p class="fs-2 text text-uppercase">
                {{ petList.find((pet) => pet._id === petIdSelected)?.petName }}
              </p>
            </div>

            <div class="container mb-4">
              <h6 class="fs-6 text text-uppercase fw-bold">Dados do pet</h6>
              <ul class="d-flex flex-column align-items-start p-0 m-0">
                <li>
                  Nome do pet:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)?.petName
                  }}
                </li>
                <li>
                  Espécie:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)?.petSpecies
                  }}
                </li>
                <li>
                  Gênero:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)?.petGender
                  }}
                </li>
                <li>
                  Nascimento:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)?.petBirth
                  }}
                </li>
                <li>
                  Raça:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)?.petBreed
                  }}
                </li>
                <li>
                  Peso do pet:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)?.petWeight
                  }}
                </li>
                <li>
                  Pet castrado:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)
                      ?.petCastrated
                  }}
                </li>
              </ul>
            </div>

            <div class="container mb-3">
              <h6 class="fs-6 text text-uppercase fw-bold">Dados do responsável</h6>
              <ul class="d-flex flex-column align-items-start p-0 m-0">
                <li>
                  Nome:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)
                      ?.petResponsible.petRespFirstName +
                    " " +
                    petList.find((pet) => pet._id === petIdSelected)
                      ?.petResponsible.petRespLastName
                  }}
                </li>
                <li>
                  Contato principal:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)
                      ?.petResponsible.petRespContact1
                  }}
                </li>
                <li>
                  Contato adicional:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)
                      ?.petResponsible.petRespContact2
                  }}
                </li>
                <li>
                  Responsável principal:
                  {{
                    petList.find((pet) => pet._id === petIdSelected)
                      ?.petResponsible.petRespPrincipal
                  }}
                </li>
              </ul>
            </div>

            <div>
              <button
                class="btn btn-primary"
                type="button"
                aria-expanded="false"
                data-bs-target="#novoProcedimento"
                data-bs-toggle="modal"
              >
                <i class="fas fa-plus me-2"></i>
                Novo procedimento
              </button>
            </div>
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
                  <div class="row">
                  </div>
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
                          <tr
                            v-for="(procedure, index) in procedureList"
                            :key="procedure._id"
                          >
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ procedure.petProcedure.procedureName }}</td>
                            <td>
                              {{ procedure.petProcedure.procedureAddInfo }}
                            </td>
                            <td>{{ procedure.petProcedure.procedureDate }}</td>
                            <td>
                              {{ procedure.petProcedure.procedureNextOne }}
                            </td>
                            <td>
                              {{ procedure.petProcedure.procedureRespDoctor }}
                            </td>
                            <td>
                              <a href="#" class="me-3"
                                ><i class="fa-regular fa-pen-to-square"></i
                              ></a>
                              <a href="#" class=""
                                ><i class="fa-regular fa-trash-can me-2"></i
                              ></a>
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
          <button
            type="button"
            class="btn btn-danger"
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
    id="novoProcedimento"
    aria-hidden="true"
    aria-labelledby="novoProcedimento"
    tabindex="-1"
    v-show="showModalNovoProced"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="novoProcedimento">
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
          <form class="row g-3">

            <div class="col-md-6">
              <label for="procedureName" class="form-label"
                >Nome do procedimento</label
              >
              <input v-model="form.procedureName" type="text" class="form-control" id="procedureName">
              
            </div>

            <div class="col-md-6">
              <label for="procedureAddInfo" class="form-label"
                >Observação</label
              >
              <input
                v-model="form.procedureAddInfo"
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
                v-model="form.procedureDate"
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
                v-model="form.procedureNextOne"
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
                v-model="form.procedureRespDoctor"
                type="text"
                class="form-control"
                id="procedureRespDoctor"
              />
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Cancelar
          </button>

          <button @click="salvarProced()" 
          type="button" class="btn btn-success"
          data-bs-dismiss="modal">
            Salvar
          </button>
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
      petList: [],
      petIdSelected: null,
      petToDelete: null, // guarda o pet que será excluído
      procedureList: [],
      petId: null,
      error: null, // adicionado para armazenar mensagens de erro
      }
    },
  computed: {
  form() {
    return {
      petId: this.petIdSelected,
      procedureName: '',
      procedureAddInfo: '',
      procedureDate: '',
      procedureNextOne: '',
      procedureRespDoctor: '',
    };
  },
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
    },
    openModalNovoProced() {
      this.showModalNovoProced = true;
    },
    async deletarPet() {
      const petId = this.petToDelete._id;
      try {
        await axios.delete(`/pet/${petId}`);
        // remove o pet excluído da lista localmente
        this.petList = this.petList.filter((pet) => pet._id !== petId);
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao excluir o pet.";
      }
    },
    openModalCarteirinha(petId) {
      this.petIdSelected = petId;
      this.form.petId = this.petIdSelected; // Atualiza o valor de petId no formulário
      console.log(this.petIdSelected);
    },
    async openModalProcedimentos(petId) {
      this.petIdSelected = petId;
      this.form.petId = this.petIdSelected; // Atualiza o valor de petId no formulário
      try {
        const res = await axios.get(`/procedure/pet/${petId}`);
        this.procedureList = res.data;
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao buscar os procedimentos do pet.";
      }
    },
    salvarProced() {
  axios.post('/procedure', this.form)
    .then(async (res) => {
      const resp = await res.data;
      console.log(resp);
      this.showModalNovoProced = false; // Fechar o modal após a conclusão
      this.list(); // Chamar a função list() para atualizar a lista de procedimentos
    })
    .catch((error) => {
      this.alertError = 'Ocorreu um erro.';
      console.error(error);
    });
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