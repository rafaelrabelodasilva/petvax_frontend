<template>
    <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="../assets/gato_sentado_sem_fundo.png" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8 d-flex align-items-center">
                <div class="card-body">
                    <h5 class="card-title mb-3">Yuumi</h5>
                    <div>
                        <p class="card-text mb-0">
                            <ul class="list-unstyled">
                                <li class="list-item ml-0">Pet castrado: Sim</li>
                                <li class="list-item ml-0">Responsável: Rafael Rabelo da Silva</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalVerCarteirinha">Ver carteirinha</button>
                        <button type="button" class="btn btn-danger me-2" data-bs-toggle="modal" data-bs-target="#modalDeletaPet">Remover</button>
                    </div>
                </div>
            </div>

            <!-- <div v-show="showModalCarteirinha" class="modal fade"
                        id="modalVerCarteirinha"
                        aria-hidden="true"
                        tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Carteirinha do pet Yuumi</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div class="modal-body">

                            <p class="fw-bold mb-1 me-3 text-uppercase d-inline-block">Dados do pet</p>
                            <a class="icon-link d-inline-block" href="#">  
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            Editar</a>
                            <p class="text-start mb-0">Nome do pet: Yuumi</p>
                            <p class="text-start mb-0">Espécie: Felina</p>
                            <p class="text-start mb-0">Gênero: Fêmea</p>
                            <p class="text-start mb-0">Nascimento: 19/08/2020</p>
                            <p class="text-start mb-4">Raça: Sem raça definida (SRD)</p>

                            <p class="fw-bold mb-1 me-3 text-uppercase d-inline-block">Endereço onde o pet reside</p>
                            <a class="icon-link d-inline-block" href="#">  
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            Editar</a>
                            <p class="text-start mb-4">Endereço: Rua visconde de cairú, Santa Bárbara, 281, CEP: 88804-320, Criciúma, Santa Catarina. Informações adicionais: Perto do Rafinha lanches</p>

                            <p class="fw-bold mb-1 me-3 text-uppercase d-inline-block">Dados do responsável</p>
                            <a class="icon-link d-inline-block" href="#">  
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            Editar</a>
                            <p class="text-start mb-0">Responsável: Rafael Rabelo da Silva</p>
                            <p class="text-start mb-0">Contato principal: (48) 996561400</p>
                            <p class="text-start mb-4">Contato 2: não informado</p>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div> -->

            <div v-show="showModalCarteirinha" class="modal fade"
                        id="modalVerCarteirinha"
                        aria-hidden="true"
                        tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <!-- <div class="modal-content"> -->
                            <!-- <div class="modal-header">
                                <h5 class="modal-title">Carteirinha do pet Yuumi</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> -->
                        <div class="modal-body">

                            <CarteirinhaPet class="pb-3 pt-3 d-flex flex-column justify-content-center"/>
                            <div class="container-fluid c0">
    <div class="container c1 d-flex flex-column justify-content-center">
      <img
        id="photo-pet"
        src="../assets/yuumi.png"
        class="mx-auto d-block"
        width="200"
        alt="Foto do pet"
      />
    </div>

    <div class="container c2">
      <h3 class="text-uppercase text-center fw-medium text-white">Yuumi</h3>
    </div>

    <div class="container c3 d-flex flex-column justify-content-center">
      <ul class="mb-3 fs-6 text-white">
        <li>Nasceu em: 19/08/2020</li>
        <li>idade: 2 anos e 8 meses</li>
        <li>Raça: SRD</li>
        <li>Castrado: Sim</li>
      </ul>
    </div>

    <div class="container c4 d-flex justify-content-end">
      <button type="button" class="btn btn-light me-2">Detalhes</button>
      <button type="button" class="btn btn-light me-2">Vacinas</button>
      <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
        Fechar
      </button>
    </div>
  </div>
                        </div>
                        <!-- <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                        </div> -->
                    <!-- </div> -->
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

<style scope>

.card {
    box-shadow: 9px 9px 7px 4px rgba(0, 0, 0, 0.1);
}

.col-md-4 {
    /* background-color: #0E8388; */
    /* background-color: #2C3333; */
    /* background-color: #2E4F4F; */
    background-color: #CBE4DE;
}

#photo-pet {
  width: 250px;
  border-radius: 50%;
  border-style: solid;
  border-width: 6px;
  /* border-color: rgb(255, 255, 255); */
  border-color: #eff5f5;
}

ul > li {
  list-style: none;
}

.c0 {
  border-radius: 10px;
  padding: 30px;
  min-height: 700px;
  min-width: 550px;
  box-shadow: 9px 9px 7px 4px rgba(0, 0, 0, 0.1);

  /* background-image: linear-gradient(
    0deg,
    hsl(180deg 26% 25%) 0%,
    hsl(173deg 36% 44%) 38%,
    hsl(165deg 74% 67%) 94%
  ); */

  /* background-image: linear-gradient(
  0deg,
  hsl(240deg 100% 20%) 0%,
  hsl(222deg 100% 25%) 11%,
  hsl(214deg 100% 29%) 22%,
  hsl(206deg 100% 32%) 33%,
  hsl(199deg 100% 33%) 44%,
  hsl(193deg 100% 35%) 56%,
  hsl(191deg 48% 49%) 67%,
  hsl(185deg 37% 60%) 78%,
  hsl(177deg 32% 72%) 89%,
  hsl(166deg 32% 85%) 100%
); */

background-image: linear-gradient(
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
);
}

.c1 {
  /* background-color: rgb(170, 243, 141); */
  height: 300px;
}

.c2 {
  /* background-color: rgb(233, 176, 220); */
  height: 100px;
}

.c3 {
  /* background-color: rgb(122, 164, 228); */
  height: 200px;
}

.c4 {
  /* background-color: rgb(235, 229, 177); */
}
</style>