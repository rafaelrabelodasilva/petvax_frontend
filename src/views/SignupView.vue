<template>
  <div
    class="d-flex align-items-center vh-100 justify-content-center"
    id="container"
  >
    <div class="card pe-3" style="max-width: 700px">
      <div class="row g-0 ms-3">
        <div class="col-md-4 d-flex align-items-center">
          <img
            src="../assets/dog_cat.png"
            class="img-fluid rounded-start"
            alt="Imagem cachorro e gato"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="mb-4">
              <h2 class="card-title mb-4">Formulário de cadastro</h2>
              <p class="card-text">
                Preencha o formulário abaixo para ter acesso ao ambiente.
              </p>
            </div>
            <div>
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Primeiro nome</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Rafael"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label"
                    >Sobrenome</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Rabelo da Silva"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="exampleInputEmail1" class="form-label">E-mail</label>
                  <input type="email" placeholder="rafaelrabelodasilva@outlook.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>

                <div class="col-md-12">
                  <label for="exampleInputPassword1" class="form-label">Senha</label>
                  <input type="password" placeholder="********" class="form-control" id="exampleInputPassword1">
                </div>

                <div class="col-md-12">
                  <input type="checkbox" class="form-check-input me-2" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">
                    Eu concordo com os <a href="#">termos de uso.</a>
                  </label>
                </div>

                <div class="col-md-12">
                  <button type="submit" class="btn me-3">Cadastrar</button>
                <router-link to="/login">Voltar</router-link>
                </div>

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
  background-color: #cbe4de;
}

.btn {
  background-color: #0e8388;
  color: white;
}
</style>