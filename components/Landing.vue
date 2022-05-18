<template lang="html">
  <div class="IntroblockContainer" >
    <div class="IntroBlock" >
      <span class="span-1">
        <span class="span-2">
          <img class="intro-image" src="@/assets/img/orb-secondary.webp" alt="">
        </span>
      </span>
    </div>
    <div class="style-container">
      <div class="style-row">
        <div class="style-column">
          <div class="introBlockBody" >
            <h1 class="style-h1">{{title}} </h1>
            <p class="style-p">{{subtitle}}</p>
          </div>
        </div>
        <div class="style-column">
          <div class="">
            <img class="styled-image" :src="landingImage" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    landingImage: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },


},

}
</script>

<style lang="css" scoped>
.IntroblockContainer{
  background-color: rgb(86, 227, 159);
  overflow: hidden;
  position: relative;
  padding: 16.5rem 0px 7.5rem
}
.IntroBlock{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate(-75%, -50%);
}
.span-1{
  box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
    position: relative
}
.span-2{
  box-sizing: border-box;
display: block;
width: initial;
height: initial;
background: none;
opacity: 1;
border: 0;
margin: 0;
padding: 0;
padding-top: 100%;
}
.IntroBlock img{
  position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
}
.intro-image{
    animation: 45s linear 0s infinite normal forwards running spin;
}
@keyframes spin {
  100%{
        transform: rotate(360deg);
  }
}
.style-container{
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
  padding-left: 80px;
  padding-right: 80px;
}
.style-row{
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
}
.style-column{
  padding: calc(20px);
  width: calc(50%);
}
.introBlockBody{
  color: rgb(255, 255, 255)
}
.style-h1{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 4rem;
  line-height: 1.16;
  font-size: 5.6rem;
  line-height: 1.1;
  color: rgb(255, 255, 255);
}
.style-p{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(255, 255, 255);
  margin-top: 1rem;
}
.styled-image{
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
}
</style>
