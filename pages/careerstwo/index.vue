<!-- <template lang="html">
  <section>

    <main>
      <Landing
      v-for="landing in landings"
      :key="landing.name"
      :id="landing.id"
      :title="landing.title"
      :landingImage="landing.landingImage"/>
      <Context />
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
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'
import Context from '@/components/careers/Context'
import CtA from '@/components/CtA'
export default {
  components: {
    Menu,
    Landing,
    Context,
    CtA,
    Footer
  },
  data(){
    return{
      CtAs: [
       {
         callToActions:
         {
           name: "HR cTA",
           label: "Contact us",
           url: 'https://info.cerqlar.com/contact'
         },
         description: "Ask recruitment for more info on current or unlisted job openings",
         Image: "https://images.ctfassets.net/6pku8kt5azac/EmZyULGZFxPdK0expsTpC/669e97daf8d3bfced3f0976f62200774/Atrium.png?w=1230&fm=webp&q=75",
         name: "HR CtA",
         title: "Interested?",

       },
     ],
     landings: [
      {
        title: "Automating the GO certficates process",
        subtitle: "for energy producers & suppliers",
        landingImage: 'https://images.ctfassets.net/6pku8kt5azac/5tvZj9DC1LFPml4X62Vhv0/37391f7558a62ff1c6464fa768618a5a/CRQ_interface_full_transparent_extraspace.svg?w=1300&fm=webp&q=75',
        id: "landingPage"
      },
    ]

   }
  }
}
</script>

<style lang="css" scoped>
</style> -->
