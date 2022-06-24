<template>
    <div class="w-56 h-80 pt-4 pr-4 pl-4 pb-6 flex flex-col bg-card rounded-md space-y-1 grow">
            <img src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO0X1Nwj-default.jpg" alt="Anderson Freire" class="rounded-md">
            <span class="text-lg font-semibold text-white pt-4">Stand up</span>
            <span class="text-base font-normal text-stone-400">Stand up</span>
    </div>
</template>
<script>
export default {
    name: "VerticalCard",
    data() {
        return {}
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
</style>