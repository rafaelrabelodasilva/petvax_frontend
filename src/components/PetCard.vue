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
                <button type="button" class="btn btn-success me-2">Ver carteirinha</button>
                <button type="button" class="btn btn-primary me-2">Editar</button>
                <button type="button" class="btn btn-danger me-2">Apagar</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PetCard",
};
</script>