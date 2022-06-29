<template>
  <div>
    <div class="flex flex-row w-full md:space-x-64">
      <SideBar/>
      <router-view></router-view>
    </div>
    <SideBarMobile/>
    <BarReproduction/>
  </div>
</template>
<script>
import SideBar from "./components/SideBar.vue";
import SideBarMobile from "./components/SideBarMobile.vue";
import BarReproduction from "./components/BarReproduction.vue";

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    SideBar,
    SideBarMobile,
    BarReproduction,
  },
}
</script>