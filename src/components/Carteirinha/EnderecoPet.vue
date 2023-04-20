<template>

    <div class="card">
        <div class="card-body">
    
            <div class="container text-center">
                <div class="row">
                    <div class="col text-uppercase fs-5 fw-bold mb-3">
                        Endereço onde o pet mora
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Rua</th>
                                    <th scope="col">Bairro</th>
                                    <th scope="col">Número</th>
                                    <th scope="col">Informações adicionais</th>
                                    <th scope="col">CEP</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Visconde de cairú</td>
                                    <td>Santa Bárbara</td>
                                    <td>400</td>
                                    <td>Edifício Floratta, Torre Girassol, APT 602</td>
                                    <td>88804-320</td>
                                    <td>Criciúma</td>
                                    <td>Santa Catarina</td>
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
        name: 'EnderecoPet',
    }
    
    </script>
    
    <style scoped>
    </style>