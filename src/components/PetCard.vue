<template>
    <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
                <img src="../assets/gato_sentado_sem_fundo.png" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title mb-3">Yuumi</h5>
                    <div>
                        <p class="card-text mb-0">
                            <ul class="list-unstyled">
                              <li>Nasceu em: 19/08/2020</li>
                              <li>Idade: 2 anos e 8 meses</li>
                              <li>Raça: SRD</li>
                              <li>Castrado: Sim</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalVerCarteirinha">Ver carteirinha</button>
                        <button type="button" class="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#modalDeletaPet">Remover</button>
                    </div>
                </div>
            </div>

            <div v-show="showModalCarteirinha" class="modal fade" id="modalVerCarteirinha" aria-hidden="true" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">

                <div class="modal-content">
                            
                  <div class="modal-header">
                    <h5 class="modal-title">Carteirinha do pet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body">
                    <div class="container-fluid">

                      <div class="container d-flex flex-column justify-content-center align-items-center mb-4">
                        <img src="../assets/yuumi.png" alt="" class="d-flex" style="width: 10rem; border-radius: 50%;">
                        <h4 class="text-uppercase">Yuumi</h4>
                      </div>

                      <div class="container mb-3">
                        <h6>Dados do pet</h6>
                        <ul class="d-flex flex-column align-items-start p-0 m-0">
                          <li>Nome do pet: Yuumi</li>
                          <li>Espécie: Felina</li>
                          <li>Gênero: Fêmea</li>
                          <li>Nascimento: 19/08/2020</li>
                          <li>Raça: Sem raça definida (SRD)</li>
                        </ul>
                      </div>

                      <div class="container mb-3">
                        <h6>Dados do responsável</h6>
                        <ul class="d-flex flex-column align-items-start p-0 m-0">
                          <li>Nome: Rafael Rabelo da Silva</li>
                          <li>Contato principal: (48) 99656-1400</li>
                          <li>Contato adicional: não informado</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Procedimentos</button>
                  </div>
                </div>
              </div>
            </div>




            <div v-show="showModalDeletarPet" class="modal fade" 
                        id="modalDeletaPet"  
                        aria-hidden="true"
                        tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Remover pet</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-1">Você tem certeza?</p>
                        <p class="mb-1">Após a exclusão não será possível recuperar os dados do pet.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-danger">Remover</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PetCard",
  components: {},
  data() {
    return {
      showModalCarteirinha: false,
      showModalDeletarPet: false,
    };
  },
};
</script>

<style scoped>
.card {
  /* background-image: linear-gradient(
  0deg,
  hsl(182deg 81% 29%) 0%,
  hsl(182deg 47% 38%) 11%,
  hsl(180deg 34% 45%) 22%,
  hsl(178deg 27% 51%) 33%,
  hsl(176deg 27% 56%) 44%,
  hsl(174deg 27% 62%) 56%,
  hsl(172deg 27% 68%) 67%,
  hsl(170deg 28% 73%) 78%,
  hsl(168deg 29% 79%) 89%,
  hsl(166deg 32% 85%) 100%
); */
}

.card {
  box-shadow: 9px 9px 7px 4px rgba(0, 0, 0, 0.1);
}

.col-md-4 {
  /* background-color: #0E8388; */
  /* background-color: #2C3333; */
  /* background-color: #2E4F4F; */
  /* background-image: linear-gradient(
    0deg,
    hsl(182deg 81% 29%) 0%,
    hsl(182deg 47% 38%) 11%,
    hsl(180deg 34% 45%) 22%,
    hsl(178deg 27% 51%) 33%,
    hsl(176deg 27% 56%) 44%,
    hsl(174deg 27% 62%) 56%,
    hsl(172deg 27% 68%) 67%,
    hsl(170deg 28% 73%) 78%,
    hsl(168deg 29% 79%) 89%,
    hsl(166deg 32% 85%) 100%
  ); */
}

#photo-pet {
  width: 200px;
  border-radius: 50%;
  border-style: solid;
  border-width: 6px;
  /* border-color: rgb(255, 255, 255); */
  border-color: #eff5f5;
}

ul > li {
  list-style: none;
}
</style>