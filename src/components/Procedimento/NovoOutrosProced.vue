<template>
    <div
        class="modal fade"
        id="novoOutrosProced"
        aria-hidden="true"
        aria-labelledby="novoOutrosProced"
        tabindex="-1"
        v-show="showNovoOutrosProced"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="novoOutrosProced">Cadastrar outros procedimentos</h1>
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
                            <label for="otherName" class="form-label">Nome do procedimento</label>
                            <select id="otherName" class="form-select">
                                <option value="">Selecione uma opção</option>
                                <option value="">Castração</option>
                                <option value="">Cirurgia geral</option>
                                <option value="">Cirurgia ortopédica</option>
                                <option value="">Monitoramento de sintomas</option>
                                <option value="">Outros</option>
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="otherAddInfo" class="form-label">Observação</label>
                            <input type="text" class="form-control" id="otherAddInfo" />
                        </div>

                        <div class="col-md-4">
                            <label for="otherDate" class="form-label">Data aplicação</label>
                            <input type="date" class="form-control" id="otherDate" />
                        </div>

                        <div class="col-md-4">
                            <label for="otherPetWeight" class="form-label"
                                >Peso do pet</label
                            >
                            <div class="input-group">
                <input type="number" class="form-control" id="otherPetWeight" />
                <span class="input-group-text">kg</span>
                        
                        </div>
                    </div>

                        <div class="col-md-4">
                            <label for="otherRespDoctor" class="form-label">Responsável</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="otherRespDoctor" />
                        </div>
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                        Cancelar
                    </button>

                    <button type="button" class="btn btn-success">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ModalNovoOutrosProced",
  data() {
    return {
        showNovoOutrosProced: false,
    };
  },
};
</script>

<style scoped>
</style>
