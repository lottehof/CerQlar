<template lang="html">
  <header class="header">
    <div class="inner-header">
      <div class="menu">
        <a href="/" class="home">
          <div class="home-logo">
            <img class="logo" src="@/assets/img/logo.svg" alt="Cerqlar logo">
          </div>
        </a>
        <nav class="navbar">
          <ul class="navbar-ul">
            <li @mouseover="upHere = true" @mouseleave="upHere = false">
              <button type="button" name="button" class="styled-nav" >
                <p class="text-solutions">Solution</p>
                <span class="span-solutions" :class="{ upHere: upHere}">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
                </span>
              </button>
                <ul class="style-dropdown" v-show="upHere">
                  <li class="listitem" @mouseover="span = true" @mouseleave="span = false">
                    <a href="/solution" class="dropdown-a">
                      <div class="">
                        <p class="dropdown-p">Overview</p>
                        <p class="dropdown-p-2"></p>
                      </div>
                      <span class="span-dropdown" :class="{ span: span}">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
                      </span>
                    </a>
                  </li>

                  <li class="listitem" @mouseover="spantwo = true" @mouseleave="spantwo = false">
                      <a href="/trades" class="dropdown-a">
                        <div class="">
                          <p class="dropdown-p">Trades</p>
                          <p class="dropdown-p-2"></p>
                        </div>
                        <span class="span-dropdown" :class="{ span: spantwo}">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
                        </span>
                      </a>
                    </li>
                    <li class="listitem" @mouseover="spanthree = true" @mouseleave="spanthree = false">
                      <a href="/contracts" class="dropdown-a">
                        <div class="">
                          <p class="dropdown-p">Contracts</p>
                          <p class="dropdown-p-2"></p>
                        </div>
                        <span class="span-dropdown" :class="{ span: spanthree}">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
                        </span>
                      </a>
                    </li>
                    <li class="listitem" @mouseover="spanfour = true" @mouseleave="spanfour = false">
                      <a href="/inventory" class="dropdown-a">
                        <div class="">
                          <p class="dropdown-p">Inventory</p>
                          <p class="dropdown-p-2"></p>
                        </div>
                        <span class="span-dropdown" :class="{ span: spanfour}">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
                        </span>
                      </a>
                    </li>
                  </ul>
              </li>
              <li @mouseover="upHeretwo = true" @mouseleave="upHeretwo = false">
                <button type="button" name="button" class="styled-nav-about">
                  <p class="text-about">About</p>
                  <span class="span-solutions" :class="{ upHere: upHeretwo}">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M18.652 12.414L21 10.069v3.172l-2.348 2.345-2.917 2.828V15.24l2.917-2.827zM10.826 17.655V2h2.348v18.897L12.036 22 3 13.241V10.07l7.826 7.586z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(0 1 1 0 3 2)" d="M0 0h20v18H0z"></path></clipPath></defs></svg>
                  </span>
                </button>
                  <ul class="style-dropdown" v-show="upHeretwo">
                    <li class="listitem" @mouseover="spanfive = true" @mouseleave="spanfive = false">
                      <a href="/about-us" class="dropdown-a">
                        <div class="">
                          <p class="dropdown-p">About us</p>
                          <p class="dropdown-p-2"></p>
                        </div>
                        <span class="span-dropdown" :class="{ span: spanfive}">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
                        </span>
                      </a>
                    </li>
                    <li class="listitem" @mouseover="spansix = true" @mouseleave="spansix = false" >
                      <a href="/careers" class="dropdown-a">
                        <div class="">
                          <p class="dropdown-p">Careers</p>
                          <p class="dropdown-p-2"></p>
                        </div>
                        <span class="span-dropdown" :class="{ span: spansix}">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
                        </span>
                      </a>
                    </li>
                  </ul>
              </li>
            </ul>
            <div class="login-div">
              <a href="https://app.cerqlar.com//" class="login-a">
                <p class="text-login">Login</p>
                <span class="span-login">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.414 18.652L10.069 21h3.172l2.345-2.348 2.828-2.917H15.24l-2.827 2.917zM17.655 10.826H2v2.348h18.897L22 12.036 13.241 3H10.07l7.586 7.826z"></path></svg>
                </span>
              </a>

            </div>
          </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    data () {
      return {
        boxone: false,
        upHere : false,
        upHereone: false,
        upHeretwo: false,
        span: false,
        spantwo: false,
        spanthree: false,
        spanfour: false,
        spanfive: false,
        spansix: false,

      }
    },
  }
</script>

<style lang="css" scoped>
.header{
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 3;
  display: block;
}
.inner-header{
  background: transparent;
  width: 100%;
  height: 12.8rem;
}
.menu{
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  margin: 0px auto;
  max-width: 1500px;
}
.home{
  text-decoration: none;
}
.home-logo{
  display: block;
  width: 15.6rem;
}
.logo{
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
}
.navbar{
  display: flex;
  position: relative;
  padding: 0px;
  width: auto;
  margin: 0px 0px 0px auto;
  z-index: 2;
  max-width: 1500px;
  height: 50px;
}
.navbar-ul{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  list-style-type: none;

}
.styled-nav,
.styled-nav-about{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  background: none;
  border: none;
  text-align: unset;
  padding: 1.2rem;
  border-radius: 0.6rem;
}
.styled-nav{
  margin-right: 3rem;
}
.text-solutions,
.text-about{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1.63;
  color: rgb(255, 255, 255);
}
.span-solutions,
.span-login{
  display: inline-block;
  height: 1.6rem;
  fill: rgb(255, 255, 255);
  line-height: 1;
  margin-left: 1rem;
  position: relative;
}
.span-list{
  height: 2rem;
  fill: rgb(40, 38, 41);
  line-height: 1;
}
.styled-nav .span-solutions:focus{
  transform: rotate(180deg);
}
.span-solutions svg,
.span-login svg,
.span-dropdown svg{
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.span{
  display: block;
  height: 2rem;
  line-height: 1;
  fill: rgb(40, 38, 41);
  margin-right: 2.5rem;
}

.boxone svg,
.upHere svg{
    transform: rotate(180deg);
}
.login-div{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin-top: 0px;
}
.login-a{
  margin-top: 0px;
  margin-left: 3rem;
  padding-left: 3rem;
  border-left: 0.1rem solid rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
}
.text-login{
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(255, 255, 255);
}
.style-dropdown{
  position: absolute;
  top: 4.6rem;
  min-width: 38%;
  border-radius: 0.6rem;
  background: rgba(255, 255, 255, 0.92);
  /* padding: 0.6rem; */
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-shadow: rgb(62 78 134 / 10%) 0px 15px 80px;
  z-index: 2;
  padding: 1rem;

}
.listitem{
  padding-left: 1.2rem;
  list-style: none;
  border: none;
}
.listitem:hover{
  background: rgb(245, 245, 241);
  border-radius: 0.6rem;
}
.dropdown-a{
  text-decoration: none;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}
.dropdown-p{
  font-family: "TT Interfaces", Arial, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.63;
  color: rgb(40, 38, 41);
}
.dropdown-p-2{
  margin-top: 0.4rem;
  color: rgb(141, 141, 141);
  font-size: 1.2rem;
  font-family: "Neue Haas Grotesk", Verdana, sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.63;
}

</style>
