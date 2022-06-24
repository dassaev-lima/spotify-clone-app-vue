<template>
  <div>
    <div class="flex flex-row w-full sm:space-x-72">
      <SideBar/>
      <!-- <h2 class="text-white font-semibold text-lg">Programas para conhecer</h2> -->
      <div class="grow h-screen flex flex-row flex-wrap bg-gradient gap-4 p-8">
        <VerticalCard v-for="card,index in 8" :key="index"/>
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
    BarReproduction,
  }
}
</script>
<style scoped>
.bg-gradient{
  background-image: linear-gradient(to bottom, rgb(8,87,39), rgb(24,24,24), rgb(18,18,18));
}
</style>
