<template lang="html">
  <section>
    <!-- <Menu /> -->
    <main>
      <Landing
      v-for="landing in landings"
      :key="landing.id"
      :id="landing.id"
      :title="landing.title"
      :subtitle="landing.subtitle"
      :landingImage="landing.landingImage"  />
      <Context />
    </main>
    <Footer />
  </section>

</template>

<script>
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'
import Context from '@/components/Privacy/Context'
export default {
  components: {
    Menu,
    Landing,
    Footer,
    Context
  },
  data(){
    return{
      landings: [
       {
         title: "Privacy Policy",
         subtitle: "",
         landingImage: '',
         id: "privacy"
       },
     ]
   }
  }
}
</script>

<style lang="css" scoped>
</style>
