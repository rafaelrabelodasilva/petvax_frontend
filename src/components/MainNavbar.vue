<template>
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid text-white navbar-brand">
            <div class="logo">
                PETVAX</div>
            <div class="">
                <ul class="navbar-nav d-flex flex-row">
                <li class="nav-item">
                    <router-link to="/dashboard" class="mx-4 text-white no-underline"
                    >Dashboard</router-link
                    >
                </li>
                <li class="nav-item">
                    <a @click="logout()" class="mx-2 text-white no-underline">Sair</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "MainNavbar",
    methods: {
        logout() {
        //Função adicionada no botão sair que remove o token do localStorage e volta para a tela de login
        localStorage.removeItem("user_token"); //Remove o token do localStorage
        this.$router.push("/login"); //E retorna para a página de login
        }
    }
};
</script>

<style scoped>
.navbar {
    background-color: #2e4f4f;
}

.no-underline {
    text-decoration: none;
    cursor: pointer;
}

.logo {
    font-size: 25px;
    font-family: "Amaranth", sans-serif;
}
</style>