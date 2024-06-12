<script>
    import { data } from 'jquery';
    import Post from './Post.vue';
    import Postagem from './Postagem.vue';
    import { userService } from '../servicos/userService.js';

    export default {
        name: 'Login',
        components: {
            Post,
            Postagem
        },
        data() {
            return {
                usuario: '',
                senha: ''
            }
        },

        methods: {
            fazerLogin() {
                console.log('Iniciando procedimento de entrada de usuário');

                // se o email e senha forem iguais ao email e senha do usuário, então o usuário está logado e deve ser iniciado o componente Postagem.vue
                if ( this.usuario === this.senha ) {
                    // serviço para manter o usuário logado
                    userService.setUsuario(this.usuario);
                    
                    console.log('Usuário logado: ' + userService.getUsuario());
                    this.$router.push('/postagem');
                } else {
                    alert('Usuário ou senha incorretos!');
                }
            },
        }
    }
</script>

<template>
    <div>
        <form class="form-group">
            <label for="email">E-mail:</label>
            <input v-model="usuario" type="email" class="form-control" id="email" name="email" required>
            <small id="emailHelp" class="form-text text-muted">usuario@dominio.com.br</small>

            <label for="senha">Senha:</label>
            <input v-model="senha" type="password" class="form-control" id="senha" name="senha" required>
            <button type="submit" class="btn btn-primary" v-on:click.prevent="fazerLogin">Entrar</button>
        </form>
    </div>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        font-size: 1.2em;
    }

    button {
        text-align: center;
        background-color: #ffffff;
        color: rgb(0, 0, 0);
        border: 1px solid white;
        padding: 5px 10px;
        cursor: pointer;
        margin: 10px;
    }

    button:hover {
        background-color: rgb(255, 255, 255);
        color: #ff9d00;
    }
</style>