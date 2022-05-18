<template lang="html">
  <footer class="styledFooter">
    <div class="style_container">
      <div class="style_row">
        <div class="styledColumn">
          <a href="/" class="style_A">
            <div class="styledLogo">
              <img class="style_imageContainer" src="https://www.cerqlar.com/logo-inverted.svg?w=160&fm=webp&q=75" alt="">
            </div>
          </a>
          <div class="style_styledContactInfo">
            <address class="style_StyleAddress">
              Strawinskylaan 3127<br>
              1077 ZX Amsterdam<br>
              The Netherlands
            </address>
          </div>
        </div>
        <div class="style_styledColumn">
          <ul class="style_LinkList">
            <li class="style_LinkListItem">
              <a href="/solution" class="style_A">Solution</a>
            </li>
            <li class="style_LinkListItem">
              <a href="/careers" class="style_A">Careers</a>
            </li>
          </ul>
        </div>
        <div class="style_style_styledColumn">
          <ul class="style_LinkList">
            <li class="style_LinkListItem">
              <a href="/subscribe" class="style_A">Sign up for news</a>
            </li>
            <li class="style_LinkListItem">
              <a href="/contact" class="style_A">Contact us</a>
            </li>
          </ul>
        </div>
        <div class="style_style_styledColumn">
          <small class="style_small">Follow us:</small>
          <ul class="style_LinkListUl">
            <li class="style_BottomListItem">
              <a class="style_A two" href="https://www.linkedin.com/company/cerqlar/">
                <img class="" src="https://images.ctfassets.net/6pku8kt5azac/3X90LlbVmFUUyjS0XP7kxF/206c3afc44795d1d3d86447976f6d58a/LI.png?w=24&fm=webp&q=75" alt="">
              </a>
            </li>
            <li class="style_BottomListItem">
              <a class="style_A two" href="https://twitter.com/CerQlar">
                <img class="" src="https://images.ctfassets.net/6pku8kt5azac/ZdQIcdPF4dEr0u573dyex/27ad3af2b984e7f83d2c5b2d6fab81bf/TWTR2.png?w=24&fm=webp&q=75" alt="">
              </a>
            </li>
          </ul>
        </div>

        <div class="style_bottomItems">
          <ul class="styleBottomList">
            <li class="BottomItem">
              <a href="/privacy" class="style_A three">
                Privacy
              </a>
            </li>
            <li class="BottomItem">
              <a href="/terms-and-conditions" class="style_A three">
                Terms
              </a>
            </li>
            <small class="style_smallsecond">	&copy; CerQlar 2021</small>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      upHere : false,
      upHeretwo: false
    }
  },
}
</script>

<style lang="css" scoped>
.styledFooter{
  background-color: rgb(42, 39, 46);
  padding: 7.5rem 0px 3.2rem;
  text-align: left;
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
.styledColumn{
  padding: calc(20px);
  width: calc(16.6667%);
}
.style_A{
  text-decoration: none;
}
.styledLogo{
  width: 10rem;
}
.style_imageContainer{
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
}
.style_StyleAddress{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.63;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  margin: 2.4rem 0px 0px;
}
.style_styledColumn{
  display: flex;
  flex-direction: column;
  padding: calc(16px);
  width: calc(25%);
  margin-left: calc(8.33333%);
}
.style_style_styledColumn{
  display: flex;
  flex-direction: column;
  padding: calc(16px);
  width: calc(25%);
}
.style_LinkList{
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 0px 0px 0px 3.2rem;
  margin: -1.2rem;
  display: flex;
}
.style_LinkListItem{
  padding: 0.8rem;
}
.style_A{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.63;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
}
.style_small{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-style: normal;
  line-height: 1.63;
  font-size: 1.2rem;
  width: auto;
  margin-right: 0.4rem;
  margin-top: -4px;
  color: rgb(255, 255, 255);
  font-weight: 500;
}
.style_BottomListItem{
  padding: 0.8rem 1.6rem 0.8rem 0px;
}
.two{
  color: rgb(141, 141, 141);
}
.style_LinkListUl{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
.style_bottomItems{
  flex-direction: row;
  margin: 0px 0px 0px auto;
  padding: 1.6rem 2rem 2rem;
  width: calc(25%);
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}
.styleBottomList{
  -webkit-box-align: center;
  align-items: center;
  margin: -1.2rem -1.2rem -1.2rem 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}
.BottomItem{
  padding: 0.8rem 1.6rem 0.8rem 0px;
}
.three{
  color: rgb(141, 141, 141);
}
.style_smallsecond{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.63;
  font-size: 1.2rem;
  padding: 0.8rem;
  color: rgb(141, 141, 141);
}
ul li{
  list-style: none;
}
</style>
