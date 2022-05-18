<template lang="html">
  <div class="style_styledContainer">
    <div class="style_CircleBorder"></div>
    <div class="style_Container">
      <div class="style_row">
        <div class="style_styledColumn">
          <img class="image" :src="Image" alt="">
          <h2 class="style_h2">{{ title }}</h2>
          <p class="style_p">{{ description }}</p>
          <div class="styleButtonContainer">
            <a :href="callToActions.url" class="style_A">
              <span class="style_span">{{ callToActions.label}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:{
    callToActions:{
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true
    },

  },
  // data(){
  //   callToActions: [
  //     {
  //       name: "HR cTA",
  //       label: "Contact us",
  //       url: 'https://info.cerqlar.com/contact'
  //     }
  //   ]
  // }
}
</script>

<style lang="css" scoped>
.style_styledContainer{
  background-color: rgb(63, 142, 252);
  padding: 0px 0px 4.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  margin-bottom: 6rem;
  text-align: left;
  border-radius: 0.6rem;
  margin-right: calc((100% - 1500px) / 2.2 + 80px);
  margin-left: calc((100% - 1500px) / 2.2 + 80px);
}
.style_CircleBorder{
  width: 500px;
  height: 500px;
  background-color: rgb(63, 142, 252);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: 1;

}
.style_Container{
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
  padding-left: 80px;
  padding-right: 80px;
}
.style_row{
  display: flex;
  flex-wrap: wrap;
  margin: calc(-20px);
}
.style_styledColumn{
  padding: calc(20px);
  width: calc(41.6667%);
}
.image{
  position: absolute;
  right: 0px;
  top: 0px;
  width: calc((100% - 1500px) / 2 + 875px);
  margin-left: 0px;
  height: 100%;
  object-fit: cover;
  border-radius: 0.6rem;
  margin-bottom: 5.6rem;
}
.style_h2{
  position: relative;
  color: rgb(255, 255, 255);
  margin-bottom: 1.6rem;
  z-index: 1;
  font-size: 4.4rem;
  line-height: 1.2;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
}
.style_p{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  position: relative;
  color: rgb(255, 255, 255);
  margin-bottom: 2rem;
  z-index: 1;
}
.styleButtonContainer{
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
}
.style_A:hover{
  background-color: white;
  border-radius: 0.6rem;
  border: 2px solid white;
  color:rgb(63, 142, 252);
}
.style_A{
  background-color: rgb(42, 39, 46);
  border-radius: 0.6rem;
  border: 2px solid rgb(42, 39, 46);
  font-family: "TT Interfaces";
  font-weight: 400;
  color: rgb(255, 255, 255);
  cursor: pointer;
  position: relative;
  text-align: center;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  padding: 0.6rem 3.2rem;
  min-height: 5.6rem;
  font-size: 1.6rem;
  line-height: 1.6;
  z-index: 1;
  text-decoration: none;
}
.style_span{
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6;
  font-family: "TT Interfaces";
  cursor: pointer;
  text-align: center;

}
</style>
