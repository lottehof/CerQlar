<template lang="html">
  <section>
    <div class="" v-for="(items, name) in body" :key="name">
      <div class="styled_container" v-if="items.sys.contentType.sys.id === 'uspsSection'">
        <div class="style_container">
          <div class="style_row">
            <div class="styled_column">
              <div class="styledHeader">
                <h2 class="style_h2">{{ items.fields.title }}</h2>
                <p class="style_p">{{ items.fields.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="style_container_text">
          <div class="style_row_second">
            <div class="style_Column" v-for="item in items.fields.items">
              <div class="style_style_container">
                <span class="style_span">
                    <img :src="require(`~/assets/img/${item.fields.icon}.png`)"alt="">
                </span>
                <h5 class="style_h5">
                  {{item.fields.name}}
                </h5>
                <p class="style_p">
                  {{ item.fields.description}}
                </p>
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
  props: {
    body:{
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="css" scoped>
.styled_container{
  background: transparent;
  position: relative;
  margin: 6rem 0px;
  padding: 4rem 0px;
}
.styled_container::before{
  content: "";
  background-color: rgb(245, 245, 241);
  border-radius: 0.6rem;
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: -1;
  right: calc((100% - 1500px) / 2.2 + 80px);
  left: calc((100% - 1500px) / 2.2 + 80px);
}
.style_container{
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
}
.style_row{
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
}
.style_row_second{
  display: flex;
  flex-wrap: wrap;
}
.styled_column{
  padding: calc(20px);
  width: calc(66.6667%);
  margin-left: calc(16.6667%);
}
.styledHeader{
  margin-bottom: 4rem;
  text-align: center;
}
.style_h2{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.2;
  color: rgb(40, 38, 41);
  font-size: 50px;
}
.style_p{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
  margin-top: 2rem;
}
.style_container_text{
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
}
.style_Column{
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: calc(33.3333%);
  padding: calc(20px);
}
.style_style_container{
  max-width: 75%;
  text-align: center;
}
.style_span{
  display: inline-block;
  height: 7.1rem;
  fill: rgb(40, 38, 41);
  line-height: 1;
  text-align: center;
}
.style_span img{
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.style_h5{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: bolder;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 1.3;
  color: rgb(40, 38, 41);
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.style_p{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 26.08px;
  color: rgb(40, 38, 41);
  width: 100%;
}
</style>
