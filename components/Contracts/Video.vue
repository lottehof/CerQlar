<template lang="html">
  <div class="style__StyledContainer">
    <div class="style__Container">
      <div class="style__row">
        <div class="style__StyledColumn">
          <h2 class="style__H2">Contract</h2>
          <p class="style__P">Manage your trade agreements on the CerQlar platform</p>
        </div>
        <div class="styledColumn">
          <div class="style__StyledMediaContainer">
            <iframe src="https://play.vidyard.com/ooEpa6xXMosL6eMJV6nKKm?modestbranding=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="style__StyledVideo"></iframe>
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
