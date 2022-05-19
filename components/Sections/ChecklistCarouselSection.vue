<template lang="html">
  <section>
    <div class="" v-for="(items, name) in body" :key="name">
      <div class="style_styledContainer" v-if="items.sys.contentType.sys.id === 'checklistCarouselSection'">

        <div class="style_container">
          <div class="style_row">
            <div class="style_column">
              <div class="style_header">
                <h2 class="style_h2">{{items.fields.title}}</h2>
                <p class="style_p">{{items.fields.description}}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="style_container">
            <ul class="styledLabelList">
              <li class="styledListItem"  v-for="(item) in items.fields.items">
                <button  type="button" name="button" class="styledLabel">{{item.fields.label}}</button>
              </li>
            </ul>
        </div>

        <div class="StyledSideSliderContainer">
          <div class="style_container_two">

          <ssr-carousel  paginate-by-slide >
            <slide class="slide one" :index='1'  name="slider" >
              <div class="style__row" >
                <div class="styled__column">
                  <h2 class="style__h2">Trade Management</h2>
                  <ul class="styledUL" >
                    <li class="styledListItems" >
                      <span class="style_span">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                      </span>
                      <strong class="style__Strong" @mouseover="mouseOver" :class="{ active: hover }">Capture trades faster and without errors.</strong>
                    </li>

                    <li class="styledListItems">
                      <span class="style_span">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                      </span>
                      <strong class="style__Strong" @mouseover="mouseOverSecond" :class="{ active: hovertwo }">Work with a clear overview of all your trades and contracts.</strong>
                    </li>

                    <li class="styledListItems">
                      <span class="style_span">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                      </span>
                      <strong class="style__Strong" @mouseover="mouseOverThird" :class="{ active: hoverthree }">Don't miss delivery and payment obligations with our automated notifications.</strong>
                    </li>
                  </ul>
                  <a href="/trades" class="style_a">
                    <span class="span-a">Learn more</span>
                  </a>
                </div>

                <div class="styled__column_second" v-if="image_one">
                  <div class="imagewrapper">
                    <img class="image one" src="https://images.ctfassets.net/6pku8kt5azac/5HOpCaVGWQfMdEnyegU9DE/95d55cc7f5f689af43487eac3d9cd583/1-1_Capture_trade.png?w=1760&fm=webp&q=75" alt="">
                  </div>
                </div>

                <div class="styled__column_second" v-if="image_two">
                  <div class="imagewrapper">
                    <img class="image one" src="https://images.ctfassets.net/6pku8kt5azac/7wVwF88ww4MgGB7mVF0MkX/14781d3f77de1e5f478bbf3147d85e89/1-2_Trade_overview___status.png?w=1760&fm=webp&q=75" alt="">
                  </div>
                </div>

                <div class="styled__column_second" v-if="image_three">
                  <div class="imagewrapper">
                    <img class="image one" src="https://images.ctfassets.net/6pku8kt5azac/zcJT1Hqq7SaV6EXBK69iu/d1adecd1b6dc3982a847e953b0541774/1-3_trades_notification.png?w=1760&fm=webp&q=75" alt="">
                  </div>
                </div>
              </div>
            </slide>

            <slide class="slide two" :index='2' name="slider">
              <div class="style__row" >
                <div class="styled__column">
                  <h2 class="style__h2">Contract Management</h2>
                    <ul class="styledUL">
                      <li class="styledListItems">
                        <span class="style_span">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                        </span>
                        <strong class="style__Strong" @mouseover="mouseOver" :class="{ active: hover }">Invite counterparties & create trade agreement templates for future trades.</strong>
                      </li>

                      <li class="styledListItems">
                        <span class="style_span">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                        </span>
                        <strong class="style__Strong" @mouseover="mouseOverSecond" :class="{ active: hovertwo }">Use GoO trade agreements based on the RECS International template and automate the approval and signature process.</strong>
                      </li>
                    </ul>
                    <a href="/trades" class="style_a">
                      <span class="span-a">Learn more</span>
                    </a>
                  </div>

                  <div class="styled__column_second" v-if="image_one">
                    <div class="imagewrapper">
                      <img class="image one" src="https://images.ctfassets.net/6pku8kt5azac/5BWbhJJ9ZlRX8RsOL6QUQV/feaaf1114f7f7884e9a80f33dd722d7a/2-1_invite_counterparty.png?w=1760&fm=webp&q=75" alt="">
                    </div>
                  </div>

                  <div class="styled__column_second" v-if="image_two">
                    <div class="imagewrapper">
                      <img class="image one" src="https://images.ctfassets.net/6pku8kt5azac/1hLig5O94FcieNmhq0cVFT/f9d7728219759e35375d5dce141b2fff/2-2_contract.png?w=1760&fm=webp&q=75" alt="">
                    </div>
                  </div>
                </div>
              </slide>

              <slide class="slide" :index='3'  name="slider">
                <div class="style__row" >
                  <div class="styled__column">
                    <h2 class="style__h2">Inventory Management</h2>
                    <ul class="styledUL">
                      <li class="styledListItems">
                        <span class="style_span">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                        </span>
                        <strong class="style__Strong" @mouseover="mouseOver" :class="{ active: hover }">Sync up your inventory from your registry account & assign certificates to your trades & transfer them to other registry accounts.</strong>
                      </li>

                      <li class="styledListItems">
                        <span class="style_span">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                        </span>
                        <strong class="style__Strong" @mouseover="mouseOverSecond" :class="{ active: hovertwo }">Notifications sent by the CerQlar platform alert you to upcomming settlement dates and expiring certificates.</strong>
                      </li>
                    </ul>
                    <a href="/trades" class="style_a">
                      <span class="span-a">Learn more</span>
                    </a>
                  </div>

                  <div class="styled__column_second" v-if="image_one">
                    <div class="imagewrapper">
                      <img class="image one" src="https://images.ctfassets.net/6pku8kt5azac/7lDscVyvtfP1SrNsdvfSyB/1ca4922ad006b0c42ec4b808de06ed0f/Inventory.png?w=1760&fm=webp&q=75" alt="">
                    </div>
                  </div>

                  <div class="styled__column_second" v-if="image_two">
                    <div class="imagewrapper">
                      <img class="image one" src="https://images.ctfassets.net/6pku8kt5azac/5ZTQlsIxriTjseRW1YPrjR/6e0bfa1997328fdb96ac17e075f849c6/5_Assign_Inventory.png?w=1760&fm=webp&q=75" alt="">
                    </div>
                  </div>
                </div>
              </slide>
            </ssr-carousel>
          </div>
        </div>
        <!-- <div class="content">


        <vueper-slides :arrows="false" :bullets="false">
          <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
        </vueper-slides>
    </div> -->

      </div>
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  props: {
    body: {
      type: Array,
      require: true,
    },
  },
  components: {
    VueperSlides, VueperSlide
  },
  data() {
    return {
      hover: true,
      hovertwo: false,
      hoverthree: false,
      row_one: true,
      row_two: true,
      row_three: false,
      image_one: true,
      image_two: false,
      image_three: false,
      buttonone: true,
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    },

    goto(index){
      this.currentSlide = index;
      console.log(index);
},
    mouseOver: function(){
        this.hover = true;
        this.hovertwo = false;
        this.hoverthree = false;
        this.image_one = true;
        this.image_two = false;
        this.image_three = false;
    },
    mouseOverSecond: function(){
        this.hover = false;
        this.hovertwo = true;
        this.hoverthree = false;
        this.image_one = false;
        this.image_two = true;
        this.image_three = false;
    },
    mouseOverThird: function(){
        this.hover = false;
        this.hovertwo = false;
        this.hoverthree = true;
        this.image_one = false;
        this.image_two = false;
        this.image_three = true;
    },
    description(){
      this.row_one = true;
      this.row_two = false;
      this.row_three = false;
    },
    description_two(){
      this.row_one = false;
      this.row_two = true;
      this.row_three = false;
    },
    description_three(){
      this.row_one = false;
      this.row_two = false;
      this.row_three = true;
    },
},
}
</script>

<style lang="css" scoped>
.content{
  width: 50%;
}
.style_styledContainer{
  position: relative;
  margin: 6rem 0px;
  background: transparent;
  padding: 4rem 0px;
}
.style_styledContainer::before{
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
.style_column{
  width: calc(66.6667%);
  margin-left: calc(16.6667%);
  padding: calc(20px);
}
.style_header{
  text-align: center;
  margin-bottom: 4rem;
}
.style_h2{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 5rem;
  line-height: 1.2;
  color: rgb(40, 38, 41);
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
.styledLabelList{
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.styledListItem{
  width: 100%;
  list-style: none;
}
.styledLabel{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: bolder;
  font-style: normal;
  font-size: 1.8rem;
  line-height: 1.3;
  color: rgb(40, 38, 41);
  text-align: center;
  padding-bottom: 2.4rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  border-bottom: 0.1rem solid rgb(141, 141, 141)
}
.underline::after{
  content: "";
display: block;
background: rgb(0, 0, 0);
height: 0.3rem;
position: absolute;
bottom: -0.2rem;
width: 100%;
}
.underline{
  border-bottom: 2px solid black;
}
.StyledSideSliderContainer{
  margin-top: 5.6rem;
}
.style_container_two{
  padding: 0px 96px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
}
.style__row{
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
}
.styled__column{
  padding: calc(20px);
  width: calc(33.3333%);
}
.style__h2{
  display: block;
  margin-bottom: 4.8rem;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: rgb(40, 38, 41);
  font-size: 4.4rem;
  line-height: 1.2;
}
.styledUL{
  margin-bottom: 4rem;
  list-style: none;
  padding: 0;
}
.styledListItems{
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
.style_span{
  position: absolute;
  left: 0px;
  top: 0px;
  height: 2.4rem;
  fill: rgb(86, 227, 159);
  line-height: 1;
  display: inline-block;
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
}
.style_span svg{
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  fill: rgb(86, 227, 159);
}
.style__Strong{
  font-weight: bold;
  color: rgb(141, 141, 141);
  cursor: pointer;
  transition: color 600ms ease 0s;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.63;
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
}
.active {
    color: rgb(40, 38, 41);
}
.style_a{
  border-radius: 0.6rem;
  border: 2px solid rgb(63, 142, 252);
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
  background-color: rgb(63, 142, 252);
  text-decoration: none;
  padding: 0.6rem 3.2rem;
  min-height: 5.6rem;
  font-size: 1.6rem;
  line-height: 1.6;
}
.span-a{
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6;
  font-family: "TT Interfaces";
  color: rgb(255, 255, 255);
  cursor: pointer;
  text-align: center;
}
.styled__column_second{
  padding: calc(20px);
  width: calc(66.6667%);
}
.imagewrapper{
  padding: 2rem;
cursor: pointer;
}
.image{
  width: 100%;
height: auto;
border-radius: 0.6rem;
box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 10%) 0px 4px 6px -4px;
}
</style>
