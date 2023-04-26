<template>

<div class="card">
    <div class="card-body">

        <div class="container text-center">
            <div class="row">
                <div class="col text-uppercase fs-5 fw-bold mb-3">
                    Dados do pet
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome do pet</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Nascimento</th>
                                <th scope="col">Raça</th>
                                <th scope="col">Espécie</th>
                                <th scope="col">Peso do pet (kg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Yuumi</td>
                                <td>Felina</td>
                                <td>19/08/2020</td>
                                <td>SRD (Sem raça definida)</td>
                                <td>Felina</td>
                                <td>Não informado</td>
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
    name: 'DadosPet',
}

</script>

<style scoped>
</style>