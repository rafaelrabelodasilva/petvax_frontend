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
                  <label for="firstName" class="form-label"
                    >Primeiro nome</label
                  >
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Rafael"
                    required
                  />
                </div>

                <div class="col-md-6">
                  <label for="lastName" class="form-label"
                    >Sobrenome</label
                  >
                  <input
                  v-model="form.lastName"
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Rabelo da Silva"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="email" class="form-label">E-mail</label>
                  <input v-model="form.email" type="email" placeholder="rafaelrabelodasilva@outlook.com" class="form-control" id="email" aria-describedby="emailHelp">
                </div>

                <div class="col-md-12">
                  <label for="password" class="form-label">Senha</label>
                  <input v-model="form.password" type="password" placeholder="********" class="form-control" id="password">
                </div>

                <article v-if="alertError" class="text-danger">
                  <div class="message-body">
                    {{ alertError }}
                  </div>
                </article>

                <div class="col-md-12">
                  <input type="checkbox" class="form-check-input me-2" id="checkbox-register">
                  <label class="form-check-label" for="checkbox-register">
                    Eu concordo com os <a href="#">termos de uso.</a>
                  </label>
                </div>

                <div class="col-md-12">
                  <button @click="register()" type="submit" class="btn me-3">Cadastrar</button>
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
  name: 'RegisterView',
  data() {
    return {
      alertError: '',
      form: {
        //Pega o v-model adicionado nos inputs e coloca a informação dentro dos objetos email e password
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
    };
  },
  methods: {
    //Métodos do vue.js
    register() {
      // console.log(this.form) //Exibe no console o objeto form para saber se ele está recendo a informação que queremos
      
      if(this.form.firstName === '') { //Se o e-mail não estiver preenchido
        this.alertError = 'Oops. Por favor informe seu primeiro nome' //Então recebe essa string no alertError
        return null
      }

      if(this.form.lastName === '') { //Se o e-mail não estiver preenchido
        this.alertError = 'Oops. Por favor informe seu sobrenome' //Então recebe essa string no alertError
        return null
      }

      if(this.form.email === '') { //Se o e-mail não estiver preenchido
        this.alertError = 'Oops. Por favor informe seu e-mail' //Então recebe essa string no alertError
        return null
      }
      
      if(this.form.password === '') {//Se a senha não estiver preenchida
        this.alertError = 'Oops. Por favor informe sua senha' //Então recebe essa string no alertError
        return null
      }

      axios.post('/user', this.form)
      .then(async (res) => {
        const resp = await res.data;
        console.log(this.form)
        console.log(resp)
      })
      .catch((error) => {
        this.alertError = 'E-mail ou senha incorretos'
        console.error(error);
      })
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #0e8388;
  color: white;
}
</style>