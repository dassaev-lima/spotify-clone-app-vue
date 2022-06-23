<template>
  <div>
    <SideBar/>
    <SideBarMobile/>
    <BarReproduction/>
  </div>
</template>
<script>
import SideBar from './components/SideBar.vue'
import SideBarMobile from './components/SideBarMobile.vue'
import BarReproduction from './components/BarReproduction.vue'

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    SideBar,
    SideBarMobile,
    BarReproduction,
  }
}
</script>