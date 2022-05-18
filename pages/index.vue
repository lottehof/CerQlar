<template>
  <div class="container">
    <!-- <Menu /> -->
    <main>
      <Landing
      v-for="landing in landings"
      :key="landing.id"
      :id="landing.id"
      :title="landing.title"
      :subtitle="landing.subtitle"
      :landingImage="landing.landingImage"/>
      <uspsSection
      v-for="uspSection in uspSection"
      :key="uspSection.name"
      :name="uspSection.name"
      :title="uspSection.title"
      :description="uspSection.description"
      :items="uspSection.items"
      />
      <CtA
      v-for="CtA in CtAs"
      :key="CtA.name"
      :title="CtA.title"
      :name="CtA.name"
      :callToActions="CtA.callToActions"
      :description="CtA.description"
      :Image="CtA.Image"/>
      <How />
    </main>
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Landing from '@/components/Landing'
import uspsSection from '@/components/uspsSection'
import CtA from '@/components/CtA'
import How from '@/components/LandingPage/HowItWorks'
import Footer from '@/components/Footer'
export default {
   components: {
     Menu,
     Landing,
     uspsSection,
     CtA,
     How,
     Footer
   },
   data(){
     return{
       landings: [
        {
          title: "Automating the GO certficates process",
          subtitle: "for energy producers & suppliers",
          landingImage: 'https://images.ctfassets.net/6pku8kt5azac/5tvZj9DC1LFPml4X62Vhv0/37391f7558a62ff1c6464fa768618a5a/CRQ_interface_full_transparent_extraspace.svg?w=1300&fm=webp&q=75',
          id: "landingPage"
        },
      ],
      uspSection: [
        {
          name: "Homepage benefits USPS",
          title: "The benefits of our platform",
          description: "Manage the trade workflow in an effective, efficient way with the CerQlar platform. It is easy to use, saves time & minimises the errors that come with manual processes. All registry tasks can be handled on the platform in a fully or semi-automated way.",
          items:
          [
            {
              name: " Capture trades easily",
              title: "Capture trades easily",
              description: "Trade details are easily captured so you can manage your trades online for further processing",
              icon: "trades",
            },
            {
              name: "Speed up approvals",
              title: "Speed up approvals",
              description: "Automatic push notifications for specific users, like risk officers who need to approve a trade.",
              icon: "notifications",
            },
            {
              name: "Use our contract templates",
              title: "Use our contract templates",
              description: "Contract creation & management based on standard or customised trade contracts.",
              icon: "contract",
            },
            {
              name: "Digital signing",
              title: "Digital signing",
              description: "Contract templates are auto-populated with all trade details & can be digitally signed.",
              icon: "digital",
            },
            {
              name: "Manage your inventory",
              title: "Manage your inventory",
              description: "Reconcile inventory & process transfers of inventory with your trading partners.",
              icon: "manage",
            },
            {
              name: "Transfer Certificates",
              title: "Transfer Certificates",
              description: "Certificates can be transferred automatically or manually. Notifications will alert you for settlement requirements & expiring certificates.",
              icon: "certificate",
            },
          ]

        },
      ],
      CtAs: [
       {
         callToActions: {
           name: "cTA landing",
           label: "Contact us",
           url: 'https://info.cerqlar.com/contact'
         },
         description: "Manage your trades, contracts and certificates without hassle",
         Image: "https://images.ctfassets.net/6pku8kt5azac/49mTc8ksGPOu4htkUSeXBD/191572b37ad9b4de71d35939ddf70972/markus-spiske-d7FbDJkJSFw-unsplash.jpg?w=1230&fm=webp&q=75",
         name: "CtA landing",
         title: "Want to know more?",

       },
     ],
    }
   }
}
</script>

<style>

</style>
