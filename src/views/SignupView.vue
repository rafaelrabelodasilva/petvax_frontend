<template>
  <div
    class="d-flex align-items-center vh-100 justify-content-center"
    id="container"
  >
    <div class="py-3 card pe-3" style="max-width: 700px">
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
              <h1 class="card-title mb-4">Formulário de cadastro</h1>
              <p class="card-text">
                Preencha o formulário abaixo para ter acesso ao ambiente.
              </p>
            </div>
            <div>
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="firstName" class="form-label"
                    >Primeiro nome</label
                  >
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    required
                    autocomplete="off"
                  />

                  <small class="text-danger" v-if="alertFistName === true">
                    Por favor informe seu primeiro nome.</small
                  >
                </div>

                <div class="col-md-6">
                  <label for="lastName" class="form-label">Sobrenome</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    required
                    autocomplete="off"
                  />

                  <small class="text-danger" v-if="alertLastName === true">
                    Por favor informe seu sobrenome.</small
                  >
                </div>

                <div class="col-md-12">
                  <label for="email" class="form-label">E-mail</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder=""
                    class="form-control"
                    id="email"
                    required
                    autocomplete="off"
                  />

                  <small class="text-danger" v-if="alertEmail === true">
                    Por favor informe um e-mail.</small
                  >
                </div>

                <div class="col-md-12">
                  <label for="password" class="form-label">Senha</label>
                  <input
                    v-model="form.password"
                    type="password"
                    placeholder=""
                    class="form-control"
                    id="password"
                    required
                    autocomplete="off"
                  />

                  <small class="text-danger" v-if="alertPassword === true">
                    Por favor informe uma senha.</small
                  >
                </div>

                <div class="col-md-12">
                  <input
                    type="checkbox"
                    class="form-check-input me-2"
                    id="checkbox-register"
                  />
                  <label class="form-check-label" for="checkbox-register">
                    Eu concordo com os <a href="#">termos de uso.</a>
                  </label>
                </div>

                <div class="col-md-12">
                  <button @click="register()" type="submit" class="btn me-3">
                    Cadastrar
                  </button>
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

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      alertFistName: false,
      alertLastName: false,
      alertEmail: false,
      alertPassword: false,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      this.alertFistName = false;
      this.alertLastName = false;
      this.alertEmail = false;
      this.alertPassword = false;

      if (this.form.firstName === "") {
        this.alertFistName = true;
        return;
      }

      if (this.form.lastName === "") {
        this.alertLastName = true;
        return;
      }

      if (this.form.email === "") {
        this.alertEmail = true;
        return;
      }

      if (this.form.password === "") {
        this.alertPassword = true;
        return;
      }

      try {
        await axios.post("/user", this.form);
        alert("Usuário cadastrado com sucesso!");
        this.form = {};
      } catch (error) {
        console.error(error);
        this.error = "Ocorreu um erro ao excluir o procedimento.";
        alert("E-mail já cadastrado");
      }
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #0e8388;
  color: white;
}

.card {
  background-color: #fcfcfc;
}

#container {
  /* background-color: #2E4F4F; */
  background-color: #243f3f;
}
</style>