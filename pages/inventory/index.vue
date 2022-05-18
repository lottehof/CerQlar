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
      :landingImage="landing.landingImage" />

      <Context />
      <Video  />
      <CtA
      v-for="CtA in CtAs"
      :key="CtA.name"
      :title="CtA.title"
      :name="CtA.name"
      :callToActions="CtA.callToActions"
      :description="CtA.description"
      :Image="CtA.Image"/>
    </main>
    <Footer/>
  </section>
</template>

<script>
import { createClient } from '../../plugins/contentful';
const contentfulClient = createClient();
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'
import Context from '@/components/Inventory/Context'
import CtA from '@/components/CtA'
import Video from '@/components/Inventory/Video'
export default {
  components: {
    Menu,
    Landing,
    Context,
    Video,
    CtA,
    Footer
  },
  data(){
    return{
      landings: [
       {
         title: "Inventory",
         subtitle: "Manage all your certificates in one platform",
         landingImage: 'https://images.ctfassets.net/6pku8kt5azac/5iAiaOtNEQZS0tHsMxhhgA/7964036b5b21f0a7cf617d97fee48cc5/CRQ_icons_group.svg?w=1300&fm=webp&q=75',
         id: "inventory"
       },
     ],
     CtAs: [
      {
        callToActions: {
          name: "cTA inventory",
          label: "Request more info",
          url: 'https://info.cerqlar.com/contact'
        },
        description: "Use one platform to assign, transfer and redeem your certificates",
        Image: "https://images.ctfassets.net/6pku8kt5azac/49mTc8ksGPOu4htkUSeXBD/191572b37ad9b4de71d35939ddf70972/markus-spiske-d7FbDJkJSFw-unsplash.jpg?w=1230&fm=webp&q=75",
        name: "CtA inventory",
        title: "Settlement without hassle",

      },
    ],
   }
  }

}
</script>

<style lang="css" scoped>
</style>
