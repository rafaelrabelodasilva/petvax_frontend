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
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Digite seu e-mail"
                />
                <article v-if="emailError" class="text-danger mb-3">
                <div class="message-body">
                  {{ emailError }}
                </div>
              </article>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Senha</label
                >
                <input
                v-model="form.password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Digite sua senha"
                />
                <article v-if="passError" class="text-danger mb-3">
                <div class="message-body">
                  {{ passError }}
                </div>
              </article>
              </div>

              <article v-if="alertError" class="text-danger mb-3">
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
              <button @click="login()" type="button" id="login" class="btn me-3">Login</button>
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
      passError: '',
      emailError: '',
      form: {
        //Pega o v-model adicionado nos imputs e coloca a informação dentro dos objetos email e password
        email: '',
        password: ''
      },
    };
  },
  methods: {
  login() {
    //Utilizado desestruturação para extrair email e password diretamente do objeto this.form
    const { email, password } = this.form; 

    //Utilizado a função trim() para remover espaços em branco no início e no final do email e password, evitando problemas de validação
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    //Limpar o alerta de erro antes de fazer uma nova tentativa de login:
    this.alertError = '';

    //Utilizado o operador ternário para definir os valores de erro em uma única linha
    this.emailError = !trimmedEmail ? 'Informe seu e-mail.' : '';
    this.passError = !trimmedPassword ? 'Informe sua senha.' : '';

    if (trimmedEmail && trimmedPassword) {
      axios
        .post('/session', this.form)
        .then(async (res) => {
          const resp = await res.data;
          console.log(resp);
          localStorage.setItem('user_token', resp.user_token);
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          this.alertError = 'E-mail ou senha incorretos';
          console.error(error);
        });
    }
  },
},
};
</script>

<style scoped>

.btn {
  background-color: #0E8388;
  color: white;
}

#container {
  background-color: #243f3f;
}

</style>