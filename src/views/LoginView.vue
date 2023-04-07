<template>
  <div class="d-flex align-items-center vh-100 justify-content-center" id="container">
      <div class="card pe-3" style="max-width: 700px">
      <div class="row g-0">
        <div class="col-md-6">
          <img
            src="../assets/dog_cat_2.png"
            class="img-fluid rounded-start"
            alt="Imagem cachorro e gato"
          />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <div class="mb-4">
            <h2 class="card-title text-center">Olá</h2>
            <p class="card-text">
              Digite suas credenciais para acessar o ambiente.
            </p>
          </div>
          <div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Senha</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Digite sua senha"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Lembrar-se de mim</label
                >
              </div>
              <button type="submit" class="btn me-3">Login</button>
              <router-link to="/signup">Crie uma conta</router-link>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>

#container {
  background-color: #CBE4DE;
}

.btn {
  background-color: #0E8388;
  color: white;
}

</style>