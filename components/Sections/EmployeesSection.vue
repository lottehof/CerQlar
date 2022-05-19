<template lang="html">
  <section>
    <client-only>
    <div class="style__styledContainer" v-for="(items, name) in body" :key="name">
      <div class="style__Container" v-if="items.sys.contentType.sys.id === 'employeesSection'">
        <div class="style__Row" >
          <div class="style__StyledColumn" v-for="(employee) in items.fields.items">
            <img class="style__ImageContainer"
            :src="employee.fields.image.fields.file.url" :alt="employee.fields.heading" v-if="employee.fields.image">
            <h3 class="style__H3">{{employee.fields.employeeName}}</h3>
            <p class="style__P">{{employee.fields.role}}</p>
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
.style__StyledColumn:nth-child(odd){
    margin-top: 4rem;
}

.style__StyledColumn:nth-child(even){
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
