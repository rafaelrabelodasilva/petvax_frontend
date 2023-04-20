<template>

    <div class="card">
        <div class="card-body">
    
            <div class="container text-center">
                <div class="row">
                    <div class="col text-uppercase fs-5 fw-bold mb-3">
                        Outros procedimentos
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Data</th>
                                <th scope="col">Nome do procedimento</th>
                                <th scope="col">Observação</th>
                                <th scope="col">Peso do pet (kg)</th>
                                <th scope="col">Responsável pelo procedimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>22/02/2021</td>
                                <td>Castração</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Dr. Exemplo</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
    </template>
    
    <script>
    
    export default {
        name: 'OutrosProcedimentosPet',
    }
    
    </script>
    
    <style scoped>
    </style>