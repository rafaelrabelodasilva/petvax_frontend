<template>
  <div class="container d-flex justify-content-between mb-3" id="dashboard-header">
    <span class="fs-5" id="dashboard-title">Pets cadastrados</span>
    <div class="d-flex">
      <button
        class="d-flex align-items-center btn btn-primary me-2"
        data-bs-target="#cadastrarPet"
        data-bs-toggle="modal"
        id="novoPet"
        title="Cadastrar novo pet"
      >
        <span class="material-symbols-outlined me-1"> add </span>
        Novo pet
      </button>
      <!-- <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Buscar pet"
        aria-label="Search"
      />
      <button class="btn btn-primary" type="submit">Buscar</button>
    </form> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardHeader",
};
</script>

<style scoped>
.span {
  color: #2e4f4f;
}
</style>