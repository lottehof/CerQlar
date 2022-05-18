<template lang="html">
  <section>
    <!-- <Menu /> -->
    <main>
      <Landing
      v-for="landing in landings"
      :key="landing.id"
      :id="landing.id"
      :title="landing.title"
      :landingImage="landing.landingImage"
       />
      <Context />
      <ThePeople />
      <FlexPeople />
    </main>
    <Footer/>
  </section>
</template>

<script>
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'
import Context from '@/components/about-us/Context'
import ThePeople from '@/components/about-us/ThePeople'
import FlexPeople from '@/components/about-us/FlexPeople'
export default {
  components: {
    Menu,
    Landing,
    Context,
    ThePeople,
    FlexPeople,
    Footer
  },
  data(){
    return{
      landings: [
       {
         title: "About us",
         landingImage: 'https://images.ctfassets.net/6pku8kt5azac/5iAiaOtNEQZS0tHsMxhhgA/7964036b5b21f0a7cf617d97fee48cc5/CRQ_icons_group.svg?w=1300&fm=webp&q=75',
         id: "about-us"
       },
     ]
   }
  }

}
</script>

<style lang="css" scoped>
</style>
