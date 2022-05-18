<template lang="html">
  <section>
    <main>
      <Landing
      v-for="landing in landings"
      :key="landing.id"
      :id="landing.id"
      :title="landing.title"
      :subtitle="landing.subtitle"
      :landingImage="landing.landingImage"/>
      <Context />
    </main>
    <footer></footer>
  </section>
</template>

<script>
import Landing from '@/components/Landing'
import Context from '@/components/news/Context'
export default {
  components: {
    Landing,
    Context,
  },
  data(){
    return{
      landings: [
       {
         title: "Sign up for news",
         landingImage: 'https://images.ctfassets.net/6pku8kt5azac/5iAiaOtNEQZS0tHsMxhhgA/7964036b5b21f0a7cf617d97fee48cc5/CRQ_icons_group.svg?w=1300&fm=webp&q=75',
         id: "news"
       },
     ]
   }
  }
}
</script>

<style lang="css" scoped>
footer{
  background-color: rgba(42,39,46,1.0);
  color: rgba(255,255,255,1.0);
  padding: 8.5rem 0px 3.2rem;
  text-align: left;
}

</style>
