<template lang="html">
 <div class="form">
   <div class="form" id="hubspotForm" v-once></div>
 </div>

</template>

<script>
export default {
  mounted() {
   const script = document.createElement("script");
   script.src="https:////js-eu1.hsforms.net/forms/shell.js";
   document.body.appendChild(script);
   script.addEventListener("load", () => {
     if (window.hbspt) {
       window.hbspt.forms.create({
         portalId: "25759902",
         formId: "d5cc6e86-b858-4896-9b2d-18ddce5f3c54",
         target: "#hubspotForm"
       })
     }
   })
 }
}
</script>

<style lang="css" scoped>
.form{
  width: 50%;
}


</style>
