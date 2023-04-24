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
                v-model="form.email"
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
                v-model="form.password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Digite sua senha"
                />
              </div>

              <article v-if="alertError" class="text-danger">
                <div class="message-body">
                  {{ alertError }}
                </div>
              </article>

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
              <button @click="login()" type="button" class="btn me-3">Login</button>
              <router-link to="/signup">Crie uma conta</router-link>
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
  name: 'LoginView',
  data() {
    return {
      alertError: '',
      form: {
        //Pega o v-model adicionado nos imputs e coloca a informação dentro dos objetos email e password
        email: '',
        password: ''
      },
    };
  },
  methods: {
    //Métodos do vue.js
    login() {
      console.log(this.form) //Exibe no console o objeto form para saber se ele está recendo a informação que queremos
      
      if(this.form.email === '') { //Se o e-mail não estiver preenchido
        this.alertError = 'Oops. Por favor informe seu e-mail' //Então recebe essa string no alertError
        return null
      }
      
      if(this.form.password === '') {//Se a senha não estiver preenchida
        this.alertError = 'Oops. Por favor informe sua senha' //Então recebe essa string no alertError
        return null
      }

      axios
      .post('/session', this.form)
      .then(async (res) => {
        const resp = await res.data;
        console.log(resp) //Se tudo ocorreu bem irá exibir o token do usuário no console
        localStorage.setItem('user_token', resp.user_token); //Irá gravar no localStorage do navegador do cliente o token de autenticação
        this.$router.push('/dashboard'); //Após autenticado será redirecionado para a rota dashboard
      })
      .catch((error) => {
        this.alertError = 'E-mail ou senha incorretos'
        console.error(error)
      })
    },
  },
};
</script>

<style scoped>

#container {
  background-color: #CBE4DE;
}

.btn {
  background-color: #0E8388;
  color: white;
}

</style>