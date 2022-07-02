<template>
    <div class="flex flex-col h-auto w-56 pt-4 pr-4 pl-4 pb-6 bg-card rounded-md"
    ref="cardVertical"
    @mouseover="showIconPlay = !showIconPlay" @mouseout="showIconPlay = !showIconPlay">
            <img src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO0X1Nwj-default.jpg" alt="Anderson Freire" class="rounded-md">
            <div v-show="hasIconPlay" class="relative bottom-16 left-32 h-12 w-12 bg-green-500 rounded-full text-black flex justify-center
            items-center shadow-xl hide transition-all pl-1 hide">
                <img src="../assets/icon-play.png" alt="Ícon play" class="w-5 h-5">
            </div>
            <span v-if="hasIconPlay" class="text-lg font-semibold text-white" style="margin-top:-2rem">Stand up</span>
            <span v-else class="text-lg font-semibold text-white mt-6" >Stand up</span>
            <span class="text-base font-normal text-stone-400">Stand up</span>
    </div>     
</template>
<script>
export default {
    name: "VerticalCard",
    data() {
        return {
            showIconPlay: false,
        }
    },
    props: ["hasIconPlay"],
    methods: {
        toggleIconPlay() {
            if (this.showIconPlay) {
                this.$refs.cardVertical.children[1].classList.remove("hide");
            } else {      
                this.$refs.cardVertical.children[1].classList.add("hide");
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
.bg-card {
    background-color: #181818 !important;
}
.bg-card:hover {
    background-color: #282828 !important;
    transition: background-color 0.5s ease;
}

.hide {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear;
}

</style>