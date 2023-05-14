<template>
    <div
        class="modal fade"
        id="novoAntipulgas"
        aria-hidden="true"
        aria-labelledby="novoAntipulgas"
        tabindex="-1"
        v-show="showNovoAntipulgas"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="novoAntipulgas">Cadastrar tratamento antipulgas</h1>
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
                            <label for="fleaName" class="form-label">Nome do antipulgas</label>
                            <select id="fleaName" class="form-select">
                                <option value="">Selecione uma opção</option>
                                <option value="">Advantage® (ou Advantage Multi®)</option>
                                <option value="">Frontline® (ou Frontline Plus®)</option>
                                <option value="">Revolution®</option>
                                <option value="">Bravecto®</option>
                                <option value="">Seresto®</option>
                                <option value="">NexGard®</option>
                                <option value="">Simparic®</option>
                                <option value="">Vectra®</option>
                                <option value="">Capstar®</option>
                                <option value="">Comfortis®</option>
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="fleaAddInfo" class="form-label">Observação</label>
                            <input type="text" class="form-control" id="fleaAddInfo" />
                        </div>

                        <div class="col-md-4">
                            <label for="fleaData" class="form-label">Data da aplicação</label>
                            <input type="date" class="form-control" id="fleaData" />
                        </div>

                        <div class="col-md-4">
                            <label for="fleaNextOne" class="form-label"
                                >Próximo reforço</label
                            >
                            <input type="date" class="form-control" id="fleaNextOne" />
                        </div>

                        <div class="col-md-4">
                            <label for="fleaRespDoctor" class="form-label">Responsável</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="fleaRespDoctor" />
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
  name: "ModalNovoAntipulgas",
  data() {
    return {
        showNovoAntipulgas: false,
    };
  },
};
</script>

<style scoped>
</style>
