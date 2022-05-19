<template lang="html">
  <section>
    <div class="" v-for="(items, name) in body" :key="name">
      <div class="style__styledContainer" v-if="items.sys.contentType.sys.id === 'callToActionSection'" >
        <div class="style__CircleBorder"></div>
            <div class="style__Container" >
              <div class="style__Row">
                <div class="style__StyledColumn">
                  <img class="image" :src="items.fields.image.fields.file.url" alt="">
                  <h2 class="style__H2">{{ items.fields.title }}</h2>
                  <p class="style__P">{{ items.fields.description }}</p>
                  <div class="styleButtonContainer" v-if="items.fields.callToAction">
                    <a :href="items.fields.callToAction.fields.url" class="style__A">
                      <span class="style__span">{{items.fields.callToAction.fields.label}}</span>
                    </a>
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
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  background-color: rgb(63, 142, 252);
  position: relative;
  overflow: hidden;
  margin-right: calc((100% - 1500px) / 2.2 + 80px);
  margin-left: calc((100% - 1500px) / 2.2 + 80px);
}
.style__CircleBorder{
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
.style__Container{
  padding-left: 56px;
  padding-right: 56px;
}
.style__Row{
  margin: calc(-16px);
}
.style__StyledColumn{
  padding: calc(16px);
  width: calc(41.6667%);
}
.image{
  position: absolute;
  right: 0px;
  top: 0px;
  width: calc((100% - 1500px) / 2 + 875px);
  height: 100%;
  object-fit: cover;
}
.style__H2{
  position: relative;
  color: rgb(255, 255, 255);
  z-index: 1;
  font-size: 4.6rem;
  line-height: 1.2;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
}
.style__P{
  margin-bottom: 2rem;
  position: relative;
  color: rgb(255, 255, 255);
  z-index: 1;
}
.style__A{
  padding: 0.6rem 3.2rem;
  min-height: 5.6rem;
  font-size: 1.6rem;
  z-index: 1;
  background-color: rgb(42, 39, 46);
  border-radius: 0.6rem;
  border: 2px solid rgb(42, 39, 46);
  font-family: "TT Interfaces";
  font-weight: 400;
  color: rgb(255, 255, 255);
  cursor: pointer;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
}
.style__span{
  position: relative;
  width: 100%;
  font-weight: 700;
}
</style>
