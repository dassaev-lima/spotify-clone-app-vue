<template>
    <div class="flex flex-row grow items-center justify-start space-x-8 h-20 shrink-0 sm:w-full md:w-5/6 lg:w-1/4 rounded-md bg-gradient-to-b from-neutral-500 to-neutral-700">
        <img src="https://seed-mix-image.spotifycdn.com/v6/img/romantic/5vXZDaOrGiU7bvoqJiDo0m/pt/default"
        alt="Imagem álbum da música" class="object-fit w-20 rounded-tl-md rounded-bl-md" >
        <h4 class="text-white font-semibold text-sm tracking-wide">Gisele Nascimento</h4>
        <div class="h-12 w-12 bg-green-500 rounded-full text-black flex justify-center items-center">
            <img src="../assets/icon-play.png" alt="Ícon play" class="w-5 h-5">
        </div>
    </div>
</template>
<script>
export default {
    name: "HorizontalCard",
    data() {
        return {}
    }
}
</script>