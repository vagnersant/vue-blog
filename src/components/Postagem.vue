<script setup>
    import Post from './Post.vue'
    import imgPost1 from '../assets/post1.webp'
    import imgPost2 from '../assets/post2.webp'
    import imgPost3 from '../assets/post3.webp'
</script>

<template>
    <div>
        <Post 
            :imagem="imgPost1" 
            titulo = "Aqui haverá o título 1." 
            texto = "Aqui haverá o texto 1. 
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim lectus in tempus. Phasellus quis porttitor leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ac turpis sit amet augue tristique eleifend. Sed id ligula eu augue pretium lobortis. Mauris vehicula, orci ac dignissim congue, eros ligula efficitur enim, vel placerat odio justo sollicitudin sem. Morbi et eros imperdiet, semper urna non, ultrices ligula. Praesent luctus blandit lacus quis elementum. Nunc ornare scelerisque magna nec tempor. Mauris ornare ut nisi ac vehicula.

            Quisque porta rutrum ante auctor hendrerit. Suspendisse ornare lectus at ante iaculis semper. Donec et ullamcorper neque. Suspendisse vitae nunc orci. Aenean iaculis nisi sed neque facilisis iaculis. Donec lacus quam, tempor vitae posuere id, hendrerit in urna. Integer nec massa nisl. Pellentesque pharetra mauris id orci mollis pretium. Donec aliquam quis nisi commodo efficitur. Donec sollicitudin vestibulum sem nec sagittis. Nullam congue lacus vitae nisl placerat, non aliquet leo scelerisque. Fusce ornare est vitae posuere cursus.

            Nam at dapibus neque, id lacinia quam. Donec eleifend eleifend lorem sit amet blandit. Suspendisse vitae commodo massa, a eleifend velit. Proin in interdum arcu. Pellentesque vulputate sapien tristique ex gravida, ac suscipit lorem."
            autor="Vagner dos Santos"/>
        <Post
            :imagem="imgPost2" 
            titulo="Aqui haverá o título 2." 
            texto="Aqui haverá o texto 2. Loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, blandit nunc nec, lacinia turpis. Nullam sit amet ex auctor, aliquet tortor nec, vehicula neque"
            autor="Vagner dos Santos"/>
        <Post    
            :imagem="imgPost3" 
            titulo="Aqui haverá o título 3." 
            texto="Aqui haverá o texto 3. Loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, blandit nunc nec, lacinia turpis. Nullam sit amet ex auctor, aliquet tortor nec, vehicula neque"
            autor="Vagner dos Santos"/>
    </div>
</template>