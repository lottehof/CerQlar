<template lang="html">
  <section>
    <div class="" v-for="(items, name) in body" :key="name">
      <div class="style__StyledContainer" v-if="items.sys.contentType.sys.id === 'faqSection'">
        <div class="style__Container">
          <div class="style__Row">
            <div class="style__StyledColumnone">
              <div class="style__StyledHeader">
                <h2 class="style__H2">{{items.fields.title}}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="style__Container" v-for="(faqitem) in items.fields.items">
          <div class="style__Row row-item">
            <div class="style__StyledColumn">
              <div class="styled__container">
                <button @click="faqitem.fields.title = !faqitem.fields.title" class="style__Button" type="button" name="button">
                  <h4 class="style__H4">{{faqitem.fields.name}}</h4>
                  <span class="style__Span" :class="{ boxone: boxone}">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
                  </span>
                </button>
                <div class="style__RichTextContainer" v-if="!faqitem.fields.title">
                  <p class="style__P" v-html="$options.filters.markdown(faqitem.fields.description)"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
    boxone: false,
    }
  },
  props: {
    body: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="css" scoped>
.style__StyledContainer{
  background: transparent;
  position: relative;
  margin: 6rem 0px;
  padding: 4rem 0px;
}
.style__StyledContainer::before{
  right: calc((100% - 1500px) / 2.2 + 80px);
  left: calc((100% - 1500px) / 2.2 + 80px);
  content: "";
  background-color: rgb(245, 245, 241);
  border-radius: 0.6rem;
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: -1;
}
.style__Container{
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
}
.style__Row{
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;

}
.row-item{
  margin-bottom: 1.6rem;
}
.style__StyledColumnone{
  padding: calc(20px);
  width: calc(66.6667%);
      margin-left: calc(16.6667%);
}
.style__StyledHeader{
  text-align: center;
  margin-bottom: 4rem;
}
.style__H2{
  font-size: 4.6rem;
  line-height: 1.2;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: rgb(40, 38, 41);
}
.style__StyledColumn{
  padding: 0px 4rem;
  width: calc(100%);
}
.styled__container{
  margin-left: 0px;
  margin-right: 0px;
  position: relative;
  background-color: rgb(255, 255, 255);
  margin-bottom: 1.6rem;
  border-radius: 0.6rem;
}
.style__Button{
  padding: 3.2rem 10.2rem 3.2rem 4rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  background: none;
}
.style__H4{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 2.4rem;
  line-height: 1.3;
  color: rgb(40, 38, 41);
}
.style__Span{
  fill: rgb(63, 142, 252);
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  position: absolute;
  right: 4rem;
  top: 3.6rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transform: rotate(180deg);
  display: inline-block;
  height: 2.4rem;
  line-height: 1;
}
.style__Span svg{
  display: inline-block;
  vertical-align: middle;
  height: 100%;

}
.boxone svg{
    transform: rotate(180deg);
}
/* .boxtwo svg{
    transform: rotate(180deg);
} */
.style__RichTextContainer{
  padding: 0px 4rem 3.2rem;
}
.style__P{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
}
.style__span{
  position: absolute;
  left: 0px;
  top: 0px;
  height: 2.4rem;
  fill: rgb(86, 227, 159);
  line-height: 1;
  color: rgb(255, 255, 255);
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  /* transform: rotate(180deg); */

}
.style__span svg{
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.style__StyledUL{
  box-sizing: border-box;
  margin-top: 2.4rem;
  list-style: none;
}
.style__StyledIL{
  padding-left: 3.6rem;
  position: relative;
  color: rgb(255, 255, 255);
  margin-bottom: 2.4rem;
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
}

</style>
