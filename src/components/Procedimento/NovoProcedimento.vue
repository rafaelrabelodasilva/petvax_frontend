<template>
    <div
        class="modal fade"
        id="novoOutrosProced"
        aria-hidden="true"
        aria-labelledby="novoOutrosProced"
        tabindex="-1"
        v-show="showProcedimentos"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="novoOutrosProced">Cadastrar procedimento</h1>
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
                            <label for="procedureName" class="form-label">Nome do procedimento</label>
                            <select v-model="form.procedureName" id="procedureName" class="form-select">
                                <option value="">Selecione uma opção</option>
                                <option value="Castração">Castração</option>
                                <option value="Cirurgia geral">Cirurgia geral</option>
                                <option value="Cirurgia ortopédica">Cirurgia ortopédica</option>
                                <option value="Monitoramento de sintomas">Monitoramento de sintomas</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="procedureAddInfo" class="form-label">Observação</label>
                            <input v-model="form.procedureAddInfo" type="text" class="form-control" id="procedureAddInfo" />
                        </div>

                        <div class="col-md-4">
                            <label for="procedureDate" class="form-label">Data aplicação</label>
                            <input v-model="form.procedureDate" type="date" class="form-control" id="procedureDate" />
                        </div>

                        <div class="col-md-4">
                            <label for="procedureNextOne" class="form-label">Próxima aplicação</label>
                            <input v-model="form.procedureNextOne" type="date" class="form-control" id="procedureNextOne" />
                        </div>

                        <div class="col-md-4">
                            <label for="procedureRespDoctor" class="form-label">Responsável</label>
                            <input v-model="form.procedureRespDoctor" type="text" class="form-control" id="procedureRespDoctor" />
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                        Cancelar
                    </button>

                    <button @click="salvarProced()" type="button" class="btn btn-success">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalNovoProced",
  data() {
    return {
        showProcedimentos: false,
        petIdSelected: null,
        form: {
            procedureName: '',
            procedureAddInfo: '',
            procedureDate: '',
            procedureNextOne: '',
            procedureRespDoctor: ''
        }
    };
  },
  methods: {
    salvarProced() {
        console.log(this.form)
        console.log(this.petIdSelected)
        axios.post('/procedure', this.form).then (async (res) => {
            const resp = await res.data;
            console.log(resp)
        }).catch((error) => {
            this.alertError = 'Ocorreu um erro.'
            console.error(error);
        })
    }
  }
};
</script>

<style scoped>
</style>
