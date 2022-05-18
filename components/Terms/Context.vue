<template lang="html">
  <div class="style__StyledContainer">
    <div class="style__Container">
      <div class="style__Row">
        <div class="style__StyledColumn">
          <div class="style__RichTextContainer">
            <h1 class="style__H1">Heading 1</h1>
            <p class="style__P">
              Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit.</b> Alias aspernatur at dolorem enim magni nisi placeat porro recusandae unde voluptates! Beatae consequatur doloribus, est eveniet excepturi laborum quasi temporibus voluptas
            </p>
            <h2 class="style__H2">Heading 2</h2>
            <p class="style__P">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at dolorem enim magni nisi placeat porro recusandae unde voluptates! Beatae consequatur doloribus, est eveniet excepturi laborum quasi temporibus voluptas.
            </p>
            <h3 class="style__H3">Heading 3</h3>
            <p class="style__P">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at dolorem enim magni nisi placeat porro recusandae unde voluptates! Beatae consequatur doloribus, est eveniet excepturi laborum quasi temporibus voluptas.
            </p>
            <h4>Heading 4</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <h5>Heading 5</h5>
            
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
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  margin: calc(-20px);
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
  color: rgb(40, 38, 41);
}
.style__RichTextContainer{
  box-sizing: content-box;
  margin: initial;
  padding: initial;
}
.style__H1{
  margin-bottom: 2.4rem;
  font-size: 5.6rem;
  line-height: 1.1;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: rgb(40, 38, 41);
}
.style__H3{
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
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
