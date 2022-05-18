<template lang="html">
  <div class="section">
    <!-- <Menu /> -->
    <main>
      <Landing
      v-for="landing in landings"
      :key="landing.id"
      :id="landing.id"
      :title="landing.title"
      :landingImage="landing.landingImage" />
      <Context
      v-for="contentSection in contentSection"
      :key="contentSection.name"
      :name="contentSection.name"
      :title="contentSection.title"
      :callToAction="contentSection.callToAction"
      :content="contentSection.content"
      :image="contentSection.image"
      :direction="contentSection.direction"
      class="test"
      :stylings="contentSection.stylings"
      />
      <FAQ />
      <CtA
      v-for="CtA in CtAs"
      :key="CtA.name"
      :title="CtA.title"
      :name="CtA.name"
      :callToActions="CtA.callToActions"
      :description="CtA.description"
      :Image="CtA.Image"/>
    </main>
    <Footer />
  </div>
</template>

<script>

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Landing from "@/components/Landing"
import CtA from '@/components/CtA'
import Context from '@/components/contentSectionSecond'
import FAQ from '@/components/Solutions/FAQ'
export default {
  components: {
    Menu,
    CtA,
    Landing,
    Context,
    FAQ,
    Footer
  },
  data(){
    return{
      landings: [
       {
         title: "Solution overview",
         landingImage: 'https://images.ctfassets.net/6pku8kt5azac/5tvZj9DC1LFPml4X62Vhv0/37391f7558a62ff1c6464fa768618a5a/CRQ_interface_full_transparent_extraspace.svg?w=1300&fm=webp&q=75',
         id: "solution overview"
       },
     ],
     contentSection: [
       {
         callToAction: {
           name: "Learn more",
           label: 'Learn more',
           url: "https://act-cerqlar.vercel.app/trades"
         },
         content: 'The CerQlar platform acts as the hub where all trade information can be captured, processed and managed. You can accept trades, send a trade you captured to your counterparty for approval, proceed to signing the contract, assign inventory to a trade. You can zoom in per trade for more details and view the key attributes for each certificate and missing delivery or payment obligations is a thing of the past with our platform generated tasks & alerts, like: “approve trade request”, “assign inventory to a trade”, "sign contract”.',
         image: 'https://images.ctfassets.net/6pku8kt5azac/1ZmlTCWRNdIfABf7nhLEy4/cff7a30f7177b6c8e929c386177a5b94/2_Trade_capture.png?w=1300&fm=webp&q=75',
         name: 'trades',
         title: 'Trades',
         stylings: false
       },
       {
         callToAction: {
           name: "Learn more",
           label: 'Learn more',
           url: "https://act-cerqlar.vercel.app/contracts"
         },
         content: 'The CerQlar platform provides a RECS International EECS GO trade agreement template or you can use your own custom trade agreement, auto-populated with all trade details entered during the trade capture. This not only saves time, it also minimises the risk of manual errors. You can assign colleagues who will need to approve & sign the contract. Based on this the CerQlar platform will send notifications and alerts to the users involved, to ensure the process will finish in a timely manner.',
         image: 'https://images.ctfassets.net/6pku8kt5azac/5fKzE8I6O8EyNC8oiMoW9W/f92ed39e2094832b910507fc80f65ec8/3_Alert.png?w=1300&fm=webp&q=75',
         name: 'Contracts',
         title: 'Contracts',
         stylings: true
       },
       {
         callToAction: {
           name: "Inventory",
           label: 'Learn more',
           url: "https://act-cerqlar.vercel.app/inventory"
         },
         content: 'The CerQlar platform can initiate certificate transfers and export and cancel certificates, in case of registries using an API. For non-API connected registries, the CerQlar platform offers a single overview of your total inventory by uploading your certificate data from the registry to the CerQlar platform. That way it will still coordinate the settlement process for you by generating tasks for users to complete the whole procedure. And to help you manage your inventory, automated notifications are being sent to users, regarding upcoming settlement dates, expiration dates, changes to inventory, etcetera',
         image: 'https://images.ctfassets.net/6pku8kt5azac/5ZTQlsIxriTjseRW1YPrjR/6e0bfa1997328fdb96ac17e075f849c6/5_Assign_Inventory.png?w=1300&fm=webp&q=75',
         name: 'inventory',
         title: 'Inventory',
         stylings: false
       },

     ],

     CtAs: [
      {
        callToActions: {
          name: "cTA Solution",
          label: "Contact us",
          url: 'https://info.cerqlar.com/contact'
        },
        description: "Let us know",
        Image: "https://images.ctfassets.net/6pku8kt5azac/6UEifPh7awxG5pzTUntJm5/f9dbe054d853394ef93445a5354d7394/american-public-power-association-513dBrMJ_5w-unsplash.jpg?w=1230&fm=webp&q=75",
        name: "Solution CtA",
        title: "Need more info on the CerQlar platform?",

      },
    ],
    customStyle: {

              'background-color' : 'red'
      }
   }
  }
}
</script>

<style lang="css" scoped>
.test:nth-of-type(2) {
  /* background-color: red; */
}




</style>
