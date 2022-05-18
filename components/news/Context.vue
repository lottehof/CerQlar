<template lang="html">
  <div class="row-fluid-wrapper">
    <div class="row-fluid">
      <div class="widget-span second">
        <div class="row-fluid-third">
          <div class="span12">
            <span class="hs_cos_wrapper-second">
              <div class="form">
                <div class="form" id="hubspotForm" v-once></div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div class="widget-span">
        <div class="row-depth">
          <div class="hs_cos_wrapper">
            <span>
              <h2>News update</h2>
              <p class="style__P">
                If you'll subscribe to our news updates, we're able to keep you in the loop on developments with our platform and CerQlar news in general.
              </p>
              <p class="style__P">
                Our platform manages the trade workflow in an effective, efficient way. It saves time, minimises errors & all registry tasks can be handled in a fully or semi-automated way.
              </p>
              <p class="style__P">
                Thank you for subscribing!
              </p>
            </span>
          </div>
        </div>
        <div class="row-fluid-second">
          <div class="widgetspan">
            <div class="hs_cos_wrapper_widget">
              <div class="">
                <img src="https://info.cerqlar.com/hs-fs/hubfs/3-1%20inventory%20assign.png?width=3136&amp;height=2056&amp;name=3-1%20inventory%20assign.png" class="hs-image-widget" width="3136" height="2056" style="max-width: 100%; height: auto;" alt="3-1 inventory assign" title="3-1 inventory assign" loading="lazy" srcset="https://info.cerqlar.com/hs-fs/hubfs/3-1%20inventory%20assign.png?width=1568&amp;height=1028&amp;name=3-1%20inventory%20assign.png 1568w, https://info.cerqlar.com/hs-fs/hubfs/3-1%20inventory%20assign.png?width=3136&amp;height=2056&amp;name=3-1%20inventory%20assign.png 3136w, https://info.cerqlar.com/hs-fs/hubfs/3-1%20inventory%20assign.png?width=4704&amp;height=3084&amp;name=3-1%20inventory%20assign.png 4704w, https://info.cerqlar.com/hs-fs/hubfs/3-1%20inventory%20assign.png?width=6272&amp;height=4112&amp;name=3-1%20inventory%20assign.png 6272w, https://info.cerqlar.com/hs-fs/hubfs/3-1%20inventory%20assign.png?width=7840&amp;height=5140&amp;name=3-1%20inventory%20assign.png 7840w, https://info.cerqlar.com/hs-fs/hubfs/3-1%20inventory%20assign.png?width=9408&amp;height=6168&amp;name=3-1%20inventory%20assign.png 9408w" sizes="(max-width: 3136px) 100vw, 3136px"></div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="">

    </div>
  </div>
</template>

<script>
import Form from '@/components/contact/Form'
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
.row-fluid-wrapper{
  background-color: rgba(248, 250, 252, 1) !important;
  padding: 80px 0px;
  display: block;
  height: 120vh;
}
.row-fluid{
  max-width: none !important;
  padding-left: 80px;
  padding-right: 80px;
}
.widget-span{
  margin-left: 0;
  width: 48.717948718%;
  padding: 0 20px;
  display: block;
  float: left;
  min-height: 1px;
  background-color: rgba(248, 250, 252, 1) !important;
}
.second{
  margin-left: 2.564102564%;
  background-color: rgba(0, 0, 0, 0.03) !important;
}
.row-depth{
  margin-left: 0;
}
.row-fluid{
  width: 100%;
}
.row-fluid-third{
  /* display: flex !important; */
flex-direction: row;
}
.hs_cos_wrapper{
  display: block !important;
  padding-top: 0px !important;
  box-sizing: border-box;
}
.hs_cos_wrapper-second{
  background-color: rgba(255,255,255,0.0);
  display: block;
}
.span-12{
  padding: 0 20px;
}
.style__P{
  font-size: 16px;
  font-weight: 0 0 1.4rem;
}
.hs_cos_wrapper_widget{
  max-width: 100%;
  flex-shrink: 0 !important;
}
.hs-image-widget{
  max-width: 100%;
  height: auto;
  width: 3136px;
  aspect-ratio: auto 3136 / 2056;
}
h2 {
    font-family: TT Interfaces;
    font-size: 40px;
    color: #000;
    font-weight: 400;
    line-height: 1.2;

}
</style>
