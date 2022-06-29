<template>
   <div class="flex flex-col flex-nowrap bg-gradient-to-b from-neutral-800 to-neutral-900 gap-4 p-8 
      grow h-auto space-y-6 pb-40">
        <h2 class="text-white font-semibold text-3xl">Boa tarde</h2>
        <div class="flex flex-row flex-wrap gap-8">
          <HorizontalCard v-for="card,index in 6" :key="index"/>
        </div>
        <a href="#">
          <h3 class="text-white font-semibold text-2xl">
            Programas para conhecer
          </h3>
        </a>
        <div class="flex flex-row flex-wrap gap-8">
          <VerticalCard v-for="card,index in 6" :key="index" :hasIconPlay="false"/>
        </div>
        <a href="#">
          <h3 class="text-white font-semibold text-2xl">
            Feitos para Dassaev
          </h3>
        </a>
         <div class="flex flex-row flex-wrap gap-8">
          <VerticalCard v-for="card,index in 6" :key="index" :hasIconPlay="true"/>
        </div>
    </div>   
</template>
<script>
import VerticalCard from "../components/VerticalCard.vue";
import HorizontalCard from "../components/HorizontalCard.vue";
export default {
  name: "Home",
  data() {
    return {}
  },
  components: {
    VerticalCard,
    HorizontalCard,
  },
}
</script>