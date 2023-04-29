<template>
    <div class="" v-for="procedure in procedureList" :key="procedure._id">

        <div class="card mb-3" id="vacina">
            <div class="card-body" >
                <div class="container text-center">
                    <div class="row">
                        <div class="col text-uppercase fs-5 fw-bold mb-3">
                            Vacinas
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Nome da vacina</th>
                                    <th scope="col">Observação</th>
                                    <th scope="col">Próximo reforço</th>
                                    <th scope="col">Responsável pelo procedimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{{ procedure.petVaccine.vaccData }}</td>
                                    <td>{{ procedure.petVaccine.vaccName }}</td>
                                    <td>{{ procedure.petVaccine.vaccAddInfo }}</td>
                                    <td>{{ procedure.petVaccine.vaccNextOne }}</td>
                                    <td>{{ procedure.petVaccine.vaccRespDoctor }}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

        <div class="card mb-3" id="vermifugo">
            <div class="card-body" >
                <div class="container text-center">
                    <div class="row">
                        <div class="col text-uppercase fs-5 fw-bold mb-3">
                            Vacinas
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col"> TESTEE Data</th>
                                    <th scope="col">Nome do vermífugo</th>
                                    <th scope="col">Dose</th>
                                    <th scope="col">Observação</th>
                                    <th scope="col">Próximo reforço</th>
                                    <th scope="col">Responsável pelo procedimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ procedure.petVermifugation.vermData }}</td>
                                    <td>{{ procedure.petVermifugation.vermName }}</td>
                                    <td>{{ procedure.petVermifugation.vermQty }}</td>
                                    <td>{{ procedure.petVermifugation.vermAddInfo }}</td>
                                    <td>{{ procedure.petVermifugation.vermNextOne }}</td>
                                    <td>{{ procedure.petVermifugation.vermRespDoctor }}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

        <div class="card mb-3" id="antipulgas">
            <div class="card-body" >
                <div class="container text-center">
                    <div class="row">
                        <div class="col text-uppercase fs-5 fw-bold mb-3">
                            Vacinas
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Data</th>
                                    <th scope="col">Nome do antipulgas</th>
                                    <th scope="col">Observação</th>
                                    <th scope="col">Próximo reforço</th>
                                    <th scope="col">Responsável pelo procedimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ procedure.petAntiFlea.fleaData }}</td>
                                    <td>{{ procedure.petAntiFlea.fleaName }}</td>
                                    <td>{{ procedure.petAntiFlea.fleaAddInfo }}</td>
                                    <td>{{ procedure.petAntiFlea.fleaNextOne }}</td>
                                    <td>{{ procedure.petAntiFlea.fleaRespDoctor }}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

        <div class="card mb-3" id="procedimentos">
            <div class="card-body" >
                <div class="container text-center">
                    <div class="row">
                        <div class="col text-uppercase fs-5 fw-bold mb-3">
                            Vacinas
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Data</th>
                                    <th scope="col">Nome do procedimento</th>
                                    <th scope="col">Observação</th>
                                    <th scope="col">Peso do pet (kg)</th>
                                    <th scope="col">Responsável pelo procedimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ procedure.petOtherProcedure.otherDate }}</td>
                                    <td>{{ procedure.petOtherProcedure.otherName }}</td>
                                    <td>{{ procedure.petOtherProcedure.otherAddInfo }}</td>
                                    <td>{{ procedure.petOtherProcedure.otherPetWeight }}</td>
                                    <td>{{ procedure.petOtherProcedure.otherRespDoctor }}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

    </div>
</template>
    
<script>
    import axios from "axios";
    
    export default {
        name: 'VacinasPet',
        data() {
            return {
                procedureList: []
            }
        },
        methods: {
            async list() {
                try {
                    const res = await axios.get("/procedure");
                    this.procedureList = res.data;
                } catch (error) {
                    console.log(error);
                }
            }
        },
        mounted() {
            this.list();
        }
    }
    
</script>
    
<style scoped>
</style>