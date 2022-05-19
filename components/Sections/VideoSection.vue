<template lang="html">
  <section>
    <client-only>
    <div class="" v-for="(items, name) in body" :key="name">
      <div class="style__StyledContainer" v-if="items.sys.contentType.sys.id === 'videoSection'">
        <div class="style__Container">
          <div class="style__row">
            <div class="style__StyledColumn">
              <h2 class="style__H2">{{items.fields.title}}</h2>
              <p class="style__P">{{items.fields.description}}</p>
            </div>
            <div class="styledColumn">
              <div class="style__StyledMediaContainer">
                <iframe :src="items.fields.video.fields.file.url" :alt="items.fields.heading" v-if="items.fields.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="style__StyledVideo"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </client-only>
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
.style__StyledContainer{
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
  margin: 0px auto;
  max-width: 1500px;
}
.style__row{
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
}
.style__StyledColumn{
  padding: calc(20px);
  width: calc(50%);
  margin-left: calc(25%);
}
.style__H2{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 4.6rem;
  line-height: 1.2;
  text-align: center;
}
.style__P{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
  text-align: center;
  margin-top: 2rem;
}
.styledColumn{
  width: calc(83.3333%);
  margin-left: calc(8.33333%);
  padding: calc(20px);
}
.style__StyledMediaContainer{
  padding-bottom: 62.5%;
  position: relative;
}
.style__StyledVideo{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
