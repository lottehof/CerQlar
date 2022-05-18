<template lang="html">
  <section>
    <!-- <Menu /> -->
    <main>
      <Landing
      <Landing
      v-for="landing in landings"
      :key="landing.id"
      :id="landing.id"
      :title="landing.title"
      :subtitle="landing.subtitle"
      :landingImage="landing.landingImage"/>
      <Context />
    </main>
    <Footer />
  </section>


</template>

<script>
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'
import Context from '@/components/Terms/Context'
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
         title: "Terms & Conditions",
         subtitle: "",
         landingImage: '',
         id: "terms"
       },
     ]
   }
  }
}
</script>

<style lang="css" scoped>
</style>
