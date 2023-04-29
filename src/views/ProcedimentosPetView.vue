<template>
    <MainNavbar class="px-5 mb-5" />
    <div class="container">
        <div class="col text-uppercase fs-3 fw-bold mb-5 mt-5">
            Procedimentos
        </div>

        <div class="container mb-4">
            <DadosPet class="" />
        </div>

        <div class="container mb-4">
            <VacinasPet class="" />
        </div>
        
    </div>
</template>

<script>

import MainNavbar from "../components/MainNavbar.vue";
import DadosPet from "../components/Carteirinha/DadosPet.vue";
import VacinasPet from "../components/Carteirinha/VacinasPet.vue"

export default {
    name: "ProcedimentosPetView",
    components: {
        MainNavbar,
        DadosPet,
        VacinasPet
    },
};

</script>

<style scoped>

</style>