<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">PETVAX</a>

            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/dashboard" class="mx-2 text-white">Dashboard</router-link>
                        <a @click="logout()" class="mx-2 text-white">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'MainNavbar',
    methods: {
    logout() { //Função adicionada no botão sair que remove o token do localStorage e volta para a tela de login
      localStorage.removeItem('user_token') //Remove o token do localStorage
      this.$router.push('/login') //E retorna para a página de login
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #2E4F4F;
}

.navbar-brand,
.navbar-toggler-icon {
  color: white;
}

.btn {
    /* background-color: #2E4F4F; */
    background-color: #CBE4DE;
    color: rgb(0, 0, 0);
}
</style>