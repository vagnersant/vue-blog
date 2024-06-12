<script>
</script>

<template>
    <div>
        <!-- Aqui haverá o formulário de login -->
        <div id="login">
            <form>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail">
                    <label for="senha">Senha:</label>
                    <input type="password" class="form-control" id="senha" placeholder="Digite sua senha">
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    #login {
        margin: 0 auto;
        width: 50%;
    }

    form {
        margin-top: 20px;
    }

    .form-group {
        margin: 10px 0;
    }

    label {
        margin-top: 10px;
    }

    input {
        width: 100%;
        padding: 5px;
    }

    button {
        width: 100%;
        padding: 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: #ff9d00;
    }
</style>