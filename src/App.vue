<template>
  <div>
    <div class="flex flex-row w-full md:space-x-72">
      <SideBar/>
      <!-- <h2 class="text-white font-semibold text-lg">Programas para conhecer</h2> -->
      <div class="flex flex-col flex-nowrap bg-gradient gap-4 p-8 grow h-screen space-y-6">
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
          <VerticalCard v-for="card,index in 6" :key="index"/>
        </div>
        <a href="#">
          <h3 class="text-white font-semibold text-2xl">
            Feitos para Dassaev
          </h3>
        </a>
         <div class="flex flex-row flex-wrap gap-8">
          <VerticalCard v-for="card,index in 6" :key="index"/>
        </div>
      </div>  
    </div>
    <SideBarMobile/>
    <BarReproduction/>
  </div>
</template>
<script>
import SideBar from './components/SideBar.vue'
import SideBarMobile from './components/SideBarMobile.vue'
import VerticalCard from './components/VerticalCard.vue'
import HorizontalCard from './components/HorizontalCard.vue'
import BarReproduction from './components/BarReproduction.vue'

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    SideBar,
    SideBarMobile,
    VerticalCard,
    HorizontalCard,
    BarReproduction,
  }
}
</script>
<style scoped>
.bg-gradient{
  background: rgba(12,12,12,1);
  /* background: linear-gradient(180deg, rgb(4, 55, 24), rgba(8,87,39,1), rgba(24,24,24,1)); */
  /* background-size: 160%; */
}
</style>
