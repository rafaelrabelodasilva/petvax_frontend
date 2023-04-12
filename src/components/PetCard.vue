<template>
    <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="../assets/gato_sentado.jpg" class="img-fluid rounded-start" alt="..." />
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
                        <button type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#modalVerCarteirinha">Ver carteirinha</button>
                        <button type="button" class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#modalEditarCarteirinha">Editar</button>
                        <button type="button" class="btn btn-danger me-2">Remover</button>
                    </div>
                </div>
            </div>

            <div v-show="showModalCarteirinha" class="modal fade"
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

                            <p class="fw-bold mb-1 text-uppercase">Dados do pet</p>
                            <p class="text-start mb-0">Nome do pet: Yuumi</p>
                            <p class="text-start mb-0">Espécie: Felina</p>
                            <p class="text-start mb-0">Gênero: Fêmea</p>
                            <p class="text-start mb-0">Nascimento: 19/08/2020</p>
                            <p class="text-start mb-4">Raça: Sem raça definida (SRD)</p>

                            <p class="fw-bold mb-1 text-uppercase">Endereço onde o pet mora</p>
                            <p class="text-start mb-4">Endereço: Rua visconde de cairú, Santa Bárbara, 281, CEP: 88804-320, Criciúma, Santa Catarina. Informações adicionais: Perto do Rafinha lanches</p>

                            <p class="fw-bold mb-1 text-uppercase">Dados do responsável</p>
                            <p class="text-start mb-0">Responsável: Rafael Rabelo da Silva</p>
                            <p class="text-start mb-0">Contato principal: (48) 996561400</p>
                            <p class="text-start mb-4">Contato 2: não informado</p>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-warning">Editar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="showModalEditarCarteirinha" class="modal fade" 
                        id="modalEditarCarteirinha"  
                        aria-hidden="true"
                        tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edição</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="fw-bold mb-1 text-uppercase">Dados do pet</p>
                            <p class="text-start mb-0">Nome do pet: Yuumi</p>
                            <p class="text-start mb-0">Espécie: Felina</p>
                            <p class="text-start mb-0">Gênero: Fêmea</p>
                            <p class="text-start mb-0">Nascimento: 19/08/2020</p>
                            <p class="text-start mb-4">Raça: Sem raça definida (SRD)</p>

                            <p class="fw-bold mb-1 text-uppercase">Endereço onde o pet mora</p>
                            <p class="text-start mb-4">Endereço: Rua visconde de cairú, Santa Bárbara, 281, CEP: 88804-320, Criciúma, Santa Catarina. Informações adicionais: Perto do Rafinha lanches</p>

                            <p class="fw-bold mb-1 text-uppercase">Dados do responsável</p>
                            <p class="text-start mb-0">Responsável: Rafael Rabelo da Silva</p>
                            <p class="text-start mb-0">Contato principal: (48) 996561400</p>
                            <p class="text-start mb-4">Contato 2: não informado</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-success">Salvar alterações</button>
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
  data() {
    return {
      showModalCarteirinha: false,
      showModalEditarCarteirinha: false,
    };
  },
};
</script>