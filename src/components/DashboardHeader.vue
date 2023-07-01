<template>
    <div class="container d-flex justify-content-between mb-3">
        <div class="fw-bold fs-5">Visitaram a clínica</div>
        <button
        class="d-flex align-items-center btn btn-primary"
        data-bs-target="#cadastrarPet"
        data-bs-toggle="modal"
        id="novoPet"
        >
        <i class="fas fa-plus me-2"></i>Novo pet
        </button>
    </div>
</template>

<script>
export default {
  name: "DashboardHeader",
};
</script>