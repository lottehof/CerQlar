<template lang="html">
  <div class="style__styledContainer">
    <div class="style__Container">
      <div class="style__Row" v-for="(employee, name) in items" :key="">
        <div class="style__StyledColumn left">
          <img class="style__ImageContainer"
          :src="employee.fields.image.fields.file.url" :alt="employee.fields.heading" v-if="employee.fields.image">
          <h3 class="style__H3">Timo Pentner {{employee.fields.employeeName}}</h3>
          <p class="style__P">Managing Director {{employee.fields.role}}</p>
        </div>

        <div class="style__StyledColumn middle">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/49u1JHazmT7zpKp8lo6eGw/c847ea3bee7ab298a5ce38d63e52130c/DSC_0154.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Martin Edling Andersson</h3>
          <p class="style__P">Principal Product Manager</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/4pG07t0W7mocrPaLuFIJSi/099662ce1a599c8897f146b3c43993cc/DSC_0187.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Anton Fedorov</h3>
          <p class="style__P">Software Architect</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/3uGG6iDWGr0zgo5qrttT8O/250d2bdb58db3aeedbf8c1c3f68f2655/Goldfisher.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Daniel Goldfisher</h3>
          <p class="style__P">Legal Counsel</p>
        </div>

        <div class="style__StyledColumn middle">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/1XasCxgHiSavIkubT1TD2K/eeb25c0168c6ac7811fa8a14b31e4f80/The_real_Darren.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Darren Macdonald</h3>
          <p class="style__P">Product Manager</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/G1Hp97vfOiNzxccVHjVtb/7ba6163cd5ef47223813e45f60cc5bf2/Foto_TKrabbe.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Thomas Krabbe</h3>
          <p class="style__P">Financial Director</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/3skcjRMyNe8VxbWY6d9zQX/a06895db44d79b50df9b74ce47eb31bd/image0.jpeg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Helena Dolabela</h3>
          <p class="style__P">Product Manager</p>
        </div>

        <div class="style__StyledColumn middle">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/2iOFYSaf7kZ1Yd1Rqgkfsu/ed5577cc5efb3994f375a5999a11c548/GY.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">GYoung Van</h3>
          <p class="style__P">UX Designer</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/11Hu9NqHPTzTaBOfxaYarX/d4ba90ba4758185a90f77ae4d11e4e81/Alex.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Alex Tcvetkov</h3>
          <p class="style__P">Backend Software Engineer</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/22pNXl3FRQgM3xKrrGkYXo/c8906822bb8533accb0d79434d1fba8a/DSC_0172.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Vitalii Stepchyk</h3>
          <p class="style__P">Backend Software Engineer</p>
        </div>

        <div class="style__StyledColumn middle">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/5kTg3n2SBwd9Dck8aYLmRR/f0821ab68e833cb6b59acb49a620ecd5/Ivan_Kar.JPG?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Ivan Kar</h3>
          <p class="style__P">Backend Software Engineer</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/7Ha2DNU7NbsdWxVKibwK7J/08a690f298ed0e5e93f6745f9b9dd5d6/IMG-1624.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Keegan Alexander</h3>
          <p class="style__P">Business & Data Analyst</p>
        </div>

        <div class="style__StyledColumn left">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/7IwcqkdqmugOZTe4eR93E8/cfd9a267d2a6853559bcce0d7f61c97b/DSC_0205.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Manuel Montoya</h3>
          <p class="style__P">Frontend Software Engineer</p>
        </div>

        <div class="style__StyledColumn middle">
          <img class="style__ImageContainer" src="https://images.ctfassets.net/6pku8kt5azac/6Rdxf1RejhpITNeNDnzQmc/572ab3694e8aacc79da751b4b1a8b706/DSC_0198.jpg?w=840&fm=webp&q=75" alt="">
          <h3 class="style__H3">Rustam Kireev</h3>
          <p class="style__P">Frontend Software Engineer</p>
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
  margin: calc(-20px);
  display: flex;
  flex-wrap: wrap;
}
.style__StyledColumn{
  width: calc(33.3333%);
  padding: calc(20px);
  margin-top: 4rem;
}
.left{
  margin-top: 4rem;
}
.middle{
  transform: translateY(-4.8rem);

}
.style__ImageContainer{
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
}
.style__H3{
  margin: 1.2rem 0px 0px;
  font-size: 3.2rem;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.3;
  color: rgb(40, 38, 41);
}
.style__P{
  color: rgb(141, 141, 141);
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0px 0px 1.2rem;
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-style: normal;
  line-height: 1.63;
}
</style>
