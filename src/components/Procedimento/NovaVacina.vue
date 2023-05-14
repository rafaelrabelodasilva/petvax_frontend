<template>
    <div
        class="modal fade"
        id="novaVacina"
        aria-hidden="true"
        aria-labelledby="novaVacina"
        tabindex="-1"
        v-show="showNovaVacina"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="novaVacina">Cadastrar vacinação</h1>
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
                            <label for="vaccName" class="form-label">Nome da vacina</label>
                            <select id="vaccName" class="form-select">
                                <option value="">Selecione uma opção</option>
                                <option value="">
                                Vacina contra a panleucopenia felina (vírus da enterite
                                felina)
                                </option>
                                <option value="">
                                Vacina contra a rinotraqueíte viral felina (herpesvírus
                                felino)
                                </option>
                                <option value="">Vacina contra a calicivirose felina</option>
                                <option value="">
                                Vacina contra a clamidiose felina (Chlamydophila felis)
                                </option>
                                <option value="">
                                Vacina contra a leucemia felina (vírus da leucemia felina)
                                </option>
                                <option value="">Vacina contra a raiva felina</option>
                                <option value="">
                                Vacina contra a peritonite infecciosa felina (coronavírus
                                felino)
                                </option>
                                <option value="">
                                Vacina contra a bordetelose felina (Bordetella bronchiseptica)
                                </option>
                                <option value="">
                                Vacina contra a clamidiose felina (Chlamydophila felis)
                                </option>
                                <option value="">
                                Vacina contra a giardíase felina (Giardia spp.)
                                </option>
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="vaccAddInfo" class="form-label">Observação</label>
                            <input type="text" class="form-control" id="vaccAddInfo" />
                        </div>

                        <div class="col-md-4">
                            <label for="vaccData" class="form-label">Data da aplicação</label>
                            <input type="date" class="form-control" id="vaccData" />
                        </div>

                        <div class="col-md-4">
                            <label for="vaccNextOne" class="form-label"
                                >Próximo reforço</label
                            >
                            <input type="date" class="form-control" id="vaccNextOne" />
                        </div>

                        <div class="col-md-4">
                            <label for="vaccRespDoctor" class="form-label">Responsável</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="vaccRespDoctor" />
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
  name: "ModalNovaVacina",
  data() {
    return {
      showNovaVacina: false,
    };
  },
};
</script>

<style scoped>
</style>
