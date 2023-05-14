<template>
    <div
        class="modal fade"
        id="novoVermif"
        aria-hidden="true"
        aria-labelledby="novoVermif"
        tabindex="-1"
        v-show="showNovoVermif"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="novoVermif">Cadastrar vermifugação</h1>
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
                            <label for="vermName" class="form-label">Nome do vermífugo</label>
                            <select id="vermName" class="form-select">
                                <option value="">Selecione uma opção</option>
                                <option value="">Drontal®</option>
                                <option value="">Profender®</option>
                                <option value="">Milbemax®</option>
                                <option value="">Cestex®</option>
                                <option value="">Panacur®</option>
                                <option value="">Vermivet®</option>
                                <option value="">Endal®</option>
                                <option value="">Helmintal®</option>
                                <option value="">Anipet®</option>
                                <option value="">Vermivet Plus®</option>            
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="vermAddInfo" class="form-label">Observação</label>
                            <input type="text" class="form-control" id="vermAddInfo" />
                        </div>

                        <div class="col-md-4">
                            <label for="vermData" class="form-label">Data da aplicação</label>
                            <input type="date" class="form-control" id="vermData" />
                        </div>

                        <div class="col-md-4">
                            <label for="vermNextOne" class="form-label"
                                >Próximo reforço</label
                            >
                            <input type="date" class="form-control" id="vermNextOne" />
                        </div>

                        <div class="col-md-4">
                            <label for="vermRespDoctor" class="form-label">Responsável</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="vermRespDoctor" />
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
  name: "ModalNovoVermif",
  data() {
    return {
        showNovoVermif: false,
    };
  },
};
</script>

<style scoped>
</style>
