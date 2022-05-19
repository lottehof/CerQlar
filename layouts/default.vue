<template>
  <div>
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  import Menu from '@/components/Menu'
  import Footer from '@/components/Footer/Footer'

  export default {
    components: {
      Menu,
      Footer
    },
  }
</script>
<style>

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1{
  display: block;
  font-size: 2em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: "Neue Haas Grotesk", Verdana, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 1.63;
    color: rgb(40, 38, 41);
}
ul{
  list-style-image: url('~/assets/img/Vector.png');
  box-sizing: content-box;
  margin-top: 2.4rem;
}
li{
  position: relative;
  margin-bottom: 1.6rem;
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
}
p{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
}
</style>
