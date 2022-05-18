<template lang="html">
  <section>
    <div class="Styled__container" >
      <div>
        <contentSection :body="body"/>
        <EmployeesSection :body="body" />
        <FAQ :body="body" />
        <callToActionSection :body="body" />
    </div>
  </div>
  </section>
</template>

<script>
import CallToAction from '@/components/callToActionSection'
import contentSection from '@/components/contentSectionSecond'
import EmployeesSection from '@/components/EmployeesSection'
import FAQ from '@/components/FAQ'

export default {
  components:{
    CallToAction,
    contentSection,
    EmployeesSection,
    FAQ,
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
