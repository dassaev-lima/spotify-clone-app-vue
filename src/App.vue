<template>
  <div>
    <SideBar/>
    <BarReproduction/>
  </div>
</template>
<script>
import BarReproduction from './components/BarReproduction.vue'
import SideBar from './components/SideBar.vue'
export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    BarReproduction,
    SideBar
  }

}
</script>