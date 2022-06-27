<template>
    <div class="flex flex-row grow items-center justify-start space-x-8 h-20 shrink-0 sm:w-full md:w-5/6 lg:w-1/4 
    rounded-md bg-neutral-700 hover:bg-neutral-500  transition-colors duration-300 pr-4"
    ref="cardHorizontal"
    @mouseover="showIconPlay = !showIconPlay" @mouseout="showIconPlay = !showIconPlay">
        <img src="https://seed-mix-image.spotifycdn.com/v6/img/romantic/5vXZDaOrGiU7bvoqJiDo0m/pt/default"
        alt="Imagem álbum da música" class="object-fit w-20 rounded-tl-md rounded-bl-md flex-none" >
        <h4 class="text-white font-semibold text-sm tracking-wide grow">Gisele Nascimento</h4>
        <div class="h-12 w-12 bg-green-500 rounded-full text-black flex justify-center items-center shadow-xl hide transition-all">
            <img src="../assets/icon-play.png" alt="Ícon play" class="w-5 h-5">
        </div>
    </div>
</template>
<script>
export default {
    name: "HorizontalCard",
    data() {
        return {
            showIconPlay: false
        }
    },
    methods: {
        toggleIconPlay() {
            if (this.showIconPlay) {
                this.$refs.cardHorizontal.children[2].classList.remove("hide");
            } else {
                this.$refs.cardHorizontal.children[2].classList.add("hide");        
            }
        }
    },
    watch: {
        showIconPlay() {
            this.toggleIconPlay();
        }
    }
}
</script>
<style scoped>
.hide {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.5s linear;
}
</style>