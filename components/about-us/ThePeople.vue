<template lang="html">
  <div class="style__styledContainer">
    <div class="style__Container">
      <div class="style__Row">
        <div class="style__StyledColumn">
          <h2 class="style__H2">The CerQlar People</h2>
          <div class="style__RichTextContainer">
            <p class="style__P">Creating a solution from the ground up requires vision, discipline and focus. We are building a team of experts who all contribute to our common goal in bringing the highest level of efficiency to the Environmental Attribute Certificates market.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.style__styledContainer{
  position: relative;
  margin: 6rem 0px;
}
.style__Container{
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
}
.style__Row{
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
  width: calc(66.6667%);
}
.style__H2{
  margin-bottom: 2rem;
  font-size: 4.6rem;
  line-height: 1.2;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
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
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
}

</style>
