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
                    <li class="nav-item mx-2">
                        <button class="btn">Sair</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'MainNavbar',
}
</script>

<style scoped>
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