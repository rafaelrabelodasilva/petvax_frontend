<template>
        <div
      class="modal fade"
      id="cadastrarPet"
      aria-hidden="true"
      aria-labelledby="dadosPet"
      tabindex="-1"
      v-show="showCadastrarPet"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="dadosPet">
              Dados do pet
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
              <div class="col-md-4">
                <label for="nomePet" class="form-label">Nome do pet</label>
                <input
                  v-model="form.petName"
                  type="text"
                  class="form-control"
                  id="nomePet"
                />
              </div>

              <div class="col-md-4">
                <label for="especiePet" class="form-label">Espécie</label>
                <select v-model="form.petSpecies" id="especiePet" class="form-select">
                  <option>Canina</option>
                  <option>Felina</option>
                </select>
              </div>

              <div class="col-md-4">
                <label for="generoPet" class="form-label">Gênero</label>
                <select v-model="form.petGender" id="generoPet" class="form-select">
                  <option>Fêmea</option>
                  <option>Macho</option>
                </select>
              </div>

              <div class="col-md-4">
                <label for="racaPet" class="form-label">Raça</label>
                <select v-model="form.petBreed" id="racaPet" class="form-select">
                  <option>Persa e Himalaia</option>
                  <option>Siamês</option>
                  <option>Maine Coon</option>
                  <option>Angorá</option>
                  <option>Sphynx</option>
                  <option>Ragdoll</option>
                  <option>Ashera</option>
                  <option>American Shorthair</option>
                  <option>Exótico</option>
                  <option>Sem raça definida (SRC)</option>
                </select>
              </div>

              <div class="col-md-4">
                <label for="pesoPet" class="form-label">Peso do pet</label>
                <div class="input-group">
                <input v-model="form.petWeight" type="number" class="form-control" id="pesoPet" />
                <span class="input-group-text">kg</span>
              </div>
              </div>

              <div class="col-md-4">
                <label for="nascimentoPet" class="form-label">Nascimento</label>
                <input v-model="form.petBirth" type="date" class="form-control" id="nascimentoPet" />
              </div>

              <div class="col-md-4">
                <label for="castradoPet" class="form-label">Castrado?</label>
                <select v-model="form.petCastrated" id="castradoPet" class="form-select">
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </div>

            </form>
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
              data-bs-target="#enderecoPet"
              data-bs-toggle="modal"
            >
              Próxima etapa
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="enderecoPet"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
              Endereço onde o pet reside
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
              <div class="col-6">
                <label for="ruaPet" class="form-label">Rua</label>
                <input
                v-model="form.petAdStreet"
                  type="text"
                  class="form-control"
                  id="ruaPet"
                />
              </div>

              <div class="col-6">
                <label for="bairroPet" class="form-label">Bairro</label>
                <input
                  v-model="form.petAdNeighborhood"
                  type="text"
                  class="form-control"
                  id="bairroPet"
                />
              </div>

              <div class="col-4">
                <label for="numeroPet" class="form-label">Número</label>
                <input
                  v-model="form.petAdNumber"
                  type="text"
                  class="form-control"
                  id="numeroPet"
                />
              </div>

              <div class="col-8">
                <label for="moreInfoPet" class="form-label"
                  >Informações adicionais</label
                >
                <input
                  v-model="form.petAdInfo"
                  type="text"
                  class="form-control"
                  id="moreInfoPet"
                />
              </div>

              <div class="col-3">
                <label for="cepPet" class="form-label">CEP</label>
                <input
                  v-model="form.petAdCep"
                  type="text"
                  class="form-control"
                  id="cepPet"
                />
              </div>

              <div class="col-5">
                <label for="estados" class="form-label">Estado</label>
                <select v-model="form.petAdState" id="estados" class="form-select">
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>

              <div class="col-4">
                <label for="cidadePet" class="form-label">Cidade</label>
                <input
                  v-model="form.petAdCity"
                  type="text"
                  class="form-control"
                  id="cidadePet"
                />
              </div>

            </form>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              class="btn btn-secondary"
              data-bs-target="#cadastrarPet"
              data-bs-toggle="modal"
            >
              Voltar
            </button>
            <button
              class="btn btn-primary"
              data-bs-target="#responsavelPet"
              data-bs-toggle="modal"
            >
              Próxima etapa
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="responsavelPet"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
              Dados do responsável
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
                <label for="nomeRespPet" class="form-label"
                  >Primeiro nome</label
                >
                <input
                  v-model="form.petResFirstName"
                  type="text"
                  class="form-control"
                  id="nomeRespPet"
                />
              </div>

              <div class="col-md-6">
                <label for="sobrenomeRespPet" class="form-label"
                  >Sobrenome</label
                >
                <input
                  v-model="form.petRespLastName"
                  type="text"
                  class="form-control"
                  id="sobrenomeRespPet"
                />
              </div>

              <div class="col-6">
                <label for="contato1RespPet" class="form-label"
                  >Contato principal</label
                >
                <input
                  v-model="form.petRespContact1"
                  type="text"
                  class="form-control"
                  id="contato1RespPet"
                />
              </div>

              <div class="col-6">
                <label for="contato2RespPet" class="form-label"
                  >Contato adicional</label
                >
                <input
                v-model="form.petRespContact2"
                  type="text"
                  class="form-control"
                  id="contato2RespPet"
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
              class="btn btn-secondary"
              data-bs-target="#enderecoPet"
              data-bs-toggle="modal"
            >
              Voltar
            </button>

            <button @click="cadastrarPet()" type="button" class="btn btn-success">Salvar</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ModalCadastrarPet',
    data() {
    return {
      showCadastrarPet: false,
      form: {
        petName: "",
        petSpecies: "",
        petGender: "",
        petBreed: "",
        petWeight: "",
        petBirth: "",
        petCastrated: "",

        petAdStreet: "Rua algum lugar",
        petAdNeighborhood: "Bairro santo",
        petAdNumber: "485",
        petAdInfo: "Perto da rua",
        petAdCep: "88804-320",
        petAdCity: "",
        petAdState: "",

        petResFirstName: "Rosana",
        petRespLastName: "Silva",
        petRespContact1: "4899655",
        petRespContact2: "4899655"
      }
    };
  },
  methods: {
    cadastrarPet() {
        console.log(this.form) //Exibe no console o objeto form para saber se ele está recendo a informação que queremos
        axios.post('/pet', this.form)
        .then(async (res) => {
          const resp = await res.data;
          console.log(resp)
          // location.reload();
        })
        .catch((error) => {
          this.alertError = 'Ocorreu um erro.'
          console.error(error);
        })
    },
  }
}

</script>

<style scoped>

</style>