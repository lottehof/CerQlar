<template lang="html">
  <div class="style__styledContainer">
    <div class="style__Container">
      <div class="style__row">
        <div class="style__StyledColumnone">
          <div class="style__StyledHeader">
            <h2 class="style__H2">Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="style__Container">
      <div class="style__row">
        <div class="style__StyledColumn">
          <div class="styled__container">
            <button @click="boxone = !boxone" class="style__Button" type="button" name="button">
              <h4 class="style__H4">How quick is the onboarding?</h4>
              <span class="style__Span" :class="{ boxone: boxone}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
              </span>
            </button>
            <div class="style__RichTextContainer" v-if="boxone">
              <p class="style__P">Once you've received an invitation to join the CerQlar platform, you can get ready to capture trades quickly by:</p>
              <ul class="style__StyledUL">
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">adding organisational information like address & banking details</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">add users and assign roles</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">configure the approval process for your organisation</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">set up your registries in order to run your first inventory upload</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">define signatories and manage your counterparties</p>
                </li>
              </ul>
              <p class="style__P">As part of the onboarding process we can help you upload your existing forward book on the platform, eliminating the need to run multiple solutions in parallel.</p>
            </div>
          </div>

          <div class="styled__container">
            <button @click="boxtwo = !boxtwo" class="style__Button" type="button" name="button">
              <h4 class="style__H4">What markets do you cover?</h4>
              <span class="style__Span" :class="{ boxone: boxtwo}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
              </span>
            </button>
            <div class="style__RichTextContainer" v-if="boxtwo">
              <p class="style__P">We've started with GO's (European Guarantees of Origin) and are currently working on adding many of the most frequently used and mature environmental commodities to the CerQlar platform.</p>
              <p class="style__P">EUAs and EUAAs will be added next and we want to expand further by covering the US RECs and RINs markets as well. Other products like VERs and White certificates are next in line.</p>
              <p class="style__P">We've started with GO's (European Guarantees of Origin) and are currently working on adding many of the most frequently used and mature environmental commodities to the CerQlar platform.</p>
              <p class="style__P">Contact us for more info on timelines and expansion plans.</p>
            </div>
          </div>

          <div class="styled__container">
            <button @click="boxthree = !boxthree" class="style__Button" type="button" name="button">
              <h4 class="style__H4">How is my data protected</h4>
              <span class="style__Span" :class="{ boxone: boxthree}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
              </span>
            </button>
            <div class="style__RichTextContainer" v-if="boxthree">
              <p class="style__P">The CerQlar platform uses a variety of datastores for storage & safety, using best practices architecture for safety & recovery. Data stored in the CerQlar platform is hosted in the Google Cloud & replicated to multiple data centers: If a server in one data center fails, the processing is switched to a replica server in another data center with minimal service interruptions. To manage customers information, we employ multiple levels of data protection:</p>
              <ul class="style__StyledUL">
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">We encrypt all data transmissions with SSL security</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">We use secondary in-database encryption for extra security</p>
                </li>
              </ul>
              <p class="style__P">Best practices security are embedded into our services at multiple levels. From at-rest & in-transit encryption, to authenticated APIs at each layer, we ensure the protection of customer data.</p>
            </div>
          </div>

          <div class="styled__container">
            <button @click="boxfour = !boxfour" class="style__Button" type="button" name="button">
              <h4 class="style__H4">What is your pricing model?</h4>
              <span class="style__Span" :class="{ boxone: boxfour}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
              </span>
            </button>
            <div class="style__RichTextContainer" v-if="boxfour">
              <p class="style__P">We want to help create a more efficient market and make it accessible to every market participant, no matter their size or activity level. We offer a low cost entry model, an "a la carte" price list that allows active market participants to grow into the platform and a professional solution that offers all the services and features you need to manage your environmental commodities portfolio. Contact us to discuss which approach works best for your business.</p>
            </div>
          </div>

          <div class="styled__container">
            <button @click="boxfive = !boxfive" class="style__Button" type="button" name="button">
              <h4 class="style__H4">Do you contribute to climate change?</h4>
              <span class="style__Span" :class="{ boxone: boxfive}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
              </span>
            </button>
            <div class="style__RichTextContainer" v-if="boxfive">
              <p class="style__P">At CerQlar, we want to contribute to a world where sustainability is no longer just an ambition & where organisations have the tools to take climate action at their disposal. We enable businesses of all sizes to contribute to solving global warming & meet/exceed their regulatory targets by utilising the different environmental products available within the carbon emission avoidance & absorptions schemes, by:</p>
              <ul class="style__StyledUL">
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">connecting the disjointed service landscape</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">minimising the administrative burden</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">making the process more efficient</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">reducing the barrier of entry by lowering the cost & raising the level of knowledge</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="styled__container">
            <button @click="boxsix = !boxsix" class="style__Button" type="button" name="button">
              <h4 class="style__H4">What tech stack do you use?</h4>
              <span class="style__Span" :class="{ boxone: boxsix}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
              </span>
            </button>
            <div class="style__RichTextContainer" v-if="boxsix">
              <ul class="style__StyledUL">
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">The application is written in Kotlin and React, and uses the Google Kubernetes Engine (GKE).</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">Everything is hosted on the Google Cloud Platform (GCP) & the CerQlar platform utilises many different managed services from GCP, such as: Google Compute Engine (GCE), GKE, Cloud PubSub, Cloud Secret Manager, Cloud Storage, etcetera.</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">To support the scalability of the platform we use MongoDB Atlas as our primary storage for certificates.</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">We deploy Auth0 to handle all the numerous aspects of signing in to the CerQlar platform, to ensure the best possible user experience.</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="styled__container">
            <button @click="boxseven = !boxseven" class="style__Button" type="button" name="button">
              <h4 class="style__H4">Is my data & platform access secure?</h4>
              <span class="style__Span" :class="{ boxone: boxseven}">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
              </span>
            </button>
            <div class="style__RichTextContainer" v-if="boxseven">
              <ul class="style__StyledUL">
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">Customer passwords are handled by Auth0 (https://auth0.com/security), which controls platform access & is configured to enforce MFA.</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">Customer data is located in data centers operated by GCP (Google Cloud Platform), which provides high standards when it comes to information and physical security), & trusted vendor cloud environments.</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">The CerQlar platform uses Firewalls, IAP, BeyondCorp, amongst others, to ensure only allowed individuals/services have access to the platform.</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">To provide data encryption at rest and in transit, features of GCP are being utilised. mTLS is used whenever the CerQlar platform's own services communicate.</p>
                </li>
                <li class="style__StyledIL">
                  <span class="style__span">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.034 10.615H3l4.045 5.016 1.483-1.872-2.494-3.144zM17.966 5l-5.865 7.262-3.843 4.866L9.742 19l1.483-1.872 5.865-7.337L21 5h-3.034z"></path></svg>
                  </span>
                  <p class="style__P">When working with renewable energy certificates registries that have an API, customers provide credentials for those registries that CerQlar platform stores. We use Google Secrets Manager in order to store them securely. To guarantee extra security, CerQlar’s source code is automatically scanned for common security vulnerabilities.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
  return{
  boxone: false,
  boxtwo: false,
  boxthree: false,
  boxfour: false,
  boxfive: false,
  boxsix: false,
  boxseven: false,

  }
}
}
</script>

<style lang="css" scoped>
.style__styledContainer{
  background: transparent;
  position: relative;
  margin: 6rem 0px;
  padding: 4rem 0px;
}
.style__styledContainer::before{
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
.style__StyledColumnone{
  padding: calc(20px);
  width: calc(66.6667%);
      margin-left: calc(16.6667%);
}
.style__StyledHeader{
  text-align: center;
  margin-bottom: 4rem;
}
.style__H2{
  font-size: 4.6rem;
  line-height: 1.2;
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: rgb(40, 38, 41);
}
.style__StyledColumn{
  padding: 0px 4rem;
  width: calc(100%);
}
.styled__container{
  margin-left: 0px;
  margin-right: 0px;
  position: relative;
  background-color: rgb(255, 255, 255);
  margin-bottom: 1.6rem;
  border-radius: 0.6rem;
}
.style__Button{
  padding: 3.2rem 10.2rem 3.2rem 4rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  background: none;
}
.style__H4{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 2.4rem;
  line-height: 1.3;
  color: rgb(40, 38, 41);
}
.style__Span{
  fill: rgb(63, 142, 252);
  transition: all 0.3s cubic-bezier(0.45, 0, 0.55, 1) 0s;
  position: absolute;
  right: 4rem;
  top: 3.6rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transform: rotate(180deg);
  display: inline-block;
  height: 2.4rem;
  line-height: 1;
}
.style__Span svg{
  display: inline-block;
  vertical-align: middle;
  height: 100%;

}
.boxone svg{
    transform: rotate(180deg);
}
/* .boxtwo svg{
    transform: rotate(180deg);
} */
.style__RichTextContainer{
  padding: 0px 4rem 3.2rem;
}
.style__P{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
}
.style__span{
  position: absolute;
  left: 0px;
  top: 0px;
  height: 2.4rem;
  fill: rgb(86, 227, 159);
  line-height: 1;
  color: rgb(255, 255, 255);
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  /* transform: rotate(180deg); */

}
.style__span svg{
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.style__StyledUL{
  box-sizing: border-box;
  margin-top: 2.4rem;
  list-style: none;
}
.style__StyledIL{
  padding-left: 3.6rem;
  position: relative;
  color: rgb(255, 255, 255);
  margin-bottom: 2.4rem;
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
}

</style>
