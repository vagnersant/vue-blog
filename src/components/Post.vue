<script>
    export default {
        props: ['imagem', 'titulo', 'texto', 'autor'],
        methods: {
            truncate(value, length) {
                if (value.length > length) {
                    return value.substring(0, length) + "...";
                } else {
                    return value;
                }
            }
        }
    }
</script>

<template>
    <div id="postagem">
        <img :src="imagem" alt="Imagem da postagem" width="100%"/>
        <div>
            <div id="titulo">
                <h2>{{ titulo }}</h2>
            </div>
            <div id="texto">
                <p>{{ truncate(texto, 200) }}</p>
            </div>
            <div id="autor">
                <p>{{ autor }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #postagem {
        background-color: #f1f1f1;
        padding: 10px;
        margin: 20px 0;
    }

    #titulo {
        text-align: left;
    }

    #texto {
        text-align: justify;
        font-size: 1.2em;
    }

    #autor {
        text-align: right;
    }
</style>