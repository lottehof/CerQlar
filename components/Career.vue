<template lang="html">
  <section class="career">
    <div class="style__styledContainer" v-for="(items, name) in body" :key="name">
      <div class="style__Container" v-if="items.sys.contentType.sys.id === 'career'">
        <div class="style__Row second">
          <div class="style__StyledColumn">
            <div class="style__ContainerStyled">
              <h3 class="style__H3">{{items.fields.name}}</h3>
              <a class="style__A" :href="items.fields.url">
                <span class="style__Label">Apply now</span>
                <span class="style__Span">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
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
export default {
  props: {
    body: {
      type: Array,
      require: true,
    },
  }
}
</script>

<style lang="css" scoped>
.style__styledContainer{
  position: relative;
}
.style__Container{
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
}
.career{
    margin-bottom: 6rem;
}
.style__Row{
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row-reverse;
  -webkit-box-pack: center;
  justify-content: center;
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
}
.second{
    flex-direction: row;
}
.style__StyledColumn{
  padding: calc(20px);
  width: calc(66.6667%);
}
.style__H2{
  margin-bottom: 2rem;
  font-size: 4.6rem;
  line-height: 1.2;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: rgb(40, 38, 41);
}
.style__RichTextContainer{
  box-sizing: content-box;
  margin: initial;
  padding: initial;
}
.style__P{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
}
.style__ContainerStyled{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 5rem 0px;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.style__H3{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 3.2rem;
  line-height: 1.3;
  color: rgb(40, 38, 41);
}
.style__A{
  border-radius: 0.6rem;
  border: 2px solid rgb(63, 142, 252);
  font-family: "TT Interfaces";
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: rgb(255, 255, 255);
  padding: 0.6rem 3.2rem;
  cursor: pointer;
  position: relative;
  text-align: center;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  min-height: 5.6rem;
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  background-color: rgb(63, 142, 252);
  flex-shrink: 0;
  margin-left: 2.4rem;
  text-decoration: none;
  font-weight: 700;
}
.style__Label{
  position: relative;
  width: 100%;
  font-weight: 700;
}
.style__Span{
  margin-left: 1rem;
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  fill: rgb(255, 255, 255);
  height: 1.6rem;
  display: flex;
  line-height: 1;
  font-size: 1.6rem;
}
.style__A:hover{
  background-color: rgb(42, 39, 46);
  border-color: rgb(42, 39, 46);
}
.style__Span svg{
  display: inline-block;
  vertical-align: middle;
  height: 100%;

}
</style>
