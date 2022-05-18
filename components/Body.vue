<template lang="html">
  <section>
    <div class="Styled__container" >
      <div class="style__container">
        <contentSection :body="body"/>
        <FAQ :body="body" />
        <callToActionSection :body="body" />
    </div>
  </div>
  </section>
</template>

<script>

import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import CallToAction from '@/components/callToActionSection'
import contentSection from '@/components/contentSectionSecond'
import FAQ from '@/components/FAQ'

export default {
  components:{
    CallToAction,
    contentSection,
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
.style__container{
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
}
.style__row{
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row-reverse;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;

}
.isReversed{
  flex-direction: row;
}
.isCentered{
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row-reverse;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.style__StyledColumn{
  padding: calc(20px);
  width: calc(50%);
}
.style__image{
  display: flex;
    width: 100%;
    height: auto;
    border-radius: 0.6rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 10%) 0px 4px 6px -4px;
}
.style__H2{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 4.6rem;
  line-height: 1.2;
  color: rgb(40, 38, 41);
  margin-bottom: 2rem;
}
.style__RichTextContainer{
  box-sizing: content-box;
  margin: initial;
  padding: initial;
}
.flex{
  padding: calc(16px);
  width: calc(66.6667%);
}
.style__P{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.45rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
}
.style__A{
  background-color: transparent;
  border-radius: 0px;
  border: none;
  font-family: "TT Interfaces";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: rgb(63, 142, 252);
  padding: 0px;
  cursor: pointer;
  position: relative;
  text-align: center;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  min-height: 5.6rem;
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1);
}
.style__label{
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6;
  font-family: "TT Interfaces";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.56rem;
  color: rgb(63, 142, 252);
  cursor: pointer;
  text-align: center;
}
.style__span{
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  fill: rgb(63, 142, 252);
  height: 1.6rem;
  display: flex;
  margin-left: 1rem;
  line-height: 1;

}
</style>
