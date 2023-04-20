<template>
  <div class="">
    <MainNavbar class="px-5 mb-5" />
    <div class="container d-flex justify-content-end mb-5">
      <div class="col text-uppercase fs-5 fw-bold mb-3">
                        Últimos visitantes
                    </div>
      <button
        class="btn btn-primary"
        data-bs-target="#cadastrarPet"
        data-bs-toggle="modal">
        Cadastrar novo pet
      </button>
    </div>

    <div
      v-show="showCadastrarPet"
      class="modal fade"
      id="cadastrarPet"
      aria-hidden="true"
      aria-labelledby="dadosPet"
      tabindex="-1"
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
                  type="text"
                  class="form-control"
                  id="nomePet"
                  placeholder="Yuumi"
                />
              </div>

              <div class="col-md-4">
                <label for="especiePet" class="form-label">Espécie</label>
                <select id="especiePet" class="form-select">
                  <option selected>Selecione</option>
                  <option>Canina</option>
                  <option>Felina</option>
                </select>
              </div>

              <div class="col-md-4">
                <label for="generoPet" class="form-label">Gênero</label>
                <select id="generoPet" class="form-select">
                  <option selected>Selecione</option>
                  <option>Fêmea</option>
                  <option>Macho</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="nascimentoPet" class="form-label">Nascimento</label>
                <input type="date" class="form-control" id="nascimentoPet" />
              </div>

              <div class="col-md-6">
                <label for="racaPet" class="form-label">Raça</label>
                <select id="racaPet" class="form-select">
                  <option selected>Selecione</option>
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
                  type="text"
                  class="form-control"
                  id="ruaPet"
                  placeholder="Rua.."
                />
              </div>

              <div class="col-6">
                <label for="bairroPet" class="form-label">Bairro</label>
                <input
                  type="text"
                  class="form-control"
                  id="bairroPet"
                  placeholder="Ex.: Santa Bárbara"
                />
              </div>

              <div class="col-4">
                <label for="numeroPet" class="form-label">Número</label>
                <input
                  type="text"
                  class="form-control"
                  id="numeroPet"
                  placeholder="Ex.: Casa 281"
                />
              </div>

              <div class="col-8">
                <label for="moreInfoPet" class="form-label"
                  >Informações adicionais</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="moreInfoPet"
                  placeholder="Perto de..."
                />
              </div>

              <div class="col-3">
                <label for="cepPet" class="form-label">CEP</label>
                <input
                  type="text"
                  class="form-control"
                  id="cepPet"
                  placeholder="88804-320"
                />
              </div>

              <div class="col-4">
                <label for="cidadePet" class="form-label">Cidade</label>
                <input
                  type="text"
                  class="form-control"
                  id="cidadePet"
                  placeholder="Ex.: Criciúma"
                />
              </div>

              <div class="col-5">
                <label for="estados" class="form-label">Estado</label>
                <select id="estados" class="form-select">
                  <option selected>Selecione</option>
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
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              Voltar
            </button>
            <button
              class="btn btn-primary"
              data-bs-target="#exampleModalToggle3"
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
      id="exampleModalToggle3"
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
                  type="text"
                  class="form-control"
                  id="nomeRespPet"
                  placeholder="Rafael"
                />
              </div>

              <div class="col-md-6">
                <label for="sobrenomeRespPet" class="form-label"
                  >Sobrenome</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="sobrenomeRespPet"
                  placeholder="Rabelo da Silva"
                />
              </div>

              <div class="col-6">
                <label for="contato1RespPet" class="form-label"
                  >Contato principal</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="contato1RespPet"
                  placeholder="48996561400"
                />
              </div>

              <div class="col-6">
                <label for="contato2RespPet" class="form-label"
                  >Contato 2</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="contato2RespPet"
                  placeholder="48996315925"
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
              class="btn btn-warning"
              data-bs-target="#exampleModalToggle2"
              data-bs-toggle="modal"
            >
              Voltar
            </button>

            <button type="button" class="btn btn-success">Salvar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-flex vh-100 justify-content-center" id="container">
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
import PetCard from "../components/PetCard.vue";

export default {
  name: "DashboardView",
  components: {
    MainNavbar,
    PetCard,
  },
  data() {
    return {
      showCadastrarPet: false,
    };
  },
};
</script>

<style scoped>

</style>