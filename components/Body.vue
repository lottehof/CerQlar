<template lang="html">
  <section>
    <div class="Styled__container" >
      <div>
        <uspsSection :body="body"/>
        <contentSection :body="body"/>
        <EmployeesSection :body="body" />
        <CareerSection :body="body"/>
        <VideoSection :body="body"/>
        <FAQSection :body="body"/>
        <CallToActionSection :body="body" />
        <ChecklistCarouselSection :body="body"/>
    </div>
  </div>
  </section>
</template>

<script>
import uspsSection from '@/components/Sections/uspsSection'
import contentSection from '@/components/Sections/contentSection'
import EmployeesSection from '@/components/Sections/EmployeesSection'
import CareerSection from '@/components/Sections/CareerSection'
import VideoSection from '@/components/Sections/VideoSection'
import FAQSection from '@/components/Sections/FAQSection'
import CallToActionSection from '@/components/Sections/callToActionSection'
import ChecklistCarouselSection from '@/components/Sections/ChecklistCarouselSection'

export default {
  components:{
    uspsSection,
    contentSection,
    EmployeesSection,
    CareerSection,
    VideoSection,
    FAQSection,
    CallToActionSection,
    ChecklistCarouselSection
  },
  props: {
    body: {
      type: Array,
      require: true,
    },
    callToAction: {
      type: Array,
      require: true,
    },
    cTas:{
      type: Array,
      require: true,
    }
  },
  methods: {
  debug (items) {
    console.log(items)
  }
}



}
</script>

<style lang="css" scoped>
.Styled__container{
  position: relative;
  margin: 6rem 0px;
}


</style>
