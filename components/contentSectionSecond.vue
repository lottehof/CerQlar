<template lang="html">
  <section>
    <div class="Styled__container" v-for="(items, name) in body" :key="name">
      <div class="style__container" v-if="items.sys.contentType.sys.id === 'contentSection'">
        <div class="style__row"
        :class="['style__row', (items.fields.isReversed ? 'isReversed' : 'is-false'), (items.fields.isCentered ? 'isCentered' : 'is-false')]">
          <div class="style__StyledColumn" >
            <img class="style__image" :src="items.fields.image.fields.file.url" :alt="items.fields.heading" v-if="items.fields.image">
          </div>
          <div class="style__StyledColumn" :class="items.fields.isCentered ? 'flex' : 'is-false'">
            <h2 class="style__H2">{{ items.fields.name }}</h2>
            <div class="style__RichTextContainer" >
            <div class="product__description" ></div>
              <p class="style__P" v-html="$options.filters.markdown(items.fields.content)"></p>
            <a :href="items.fields.callToAction.fields.url" class="style__A" v-if="items.fields.callToAction">
                <span class="style__label">{{items.fields.callToAction.fields.label}}</span>
              <span class="style__span">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>

import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import CallToAction from '@/components/callToActionSection'

export default {
  components:{
    CallToAction,
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
  text-decoration: none;
  list-style: none;
}
.style__label{
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6;
  font-family: "TT Interfaces";
  font-size: 1.6rem;
  line-height: 2.56rem;
  color: rgb(63, 142, 252);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  list-style: none;
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
