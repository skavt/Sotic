<template>
  <div id="menu-content-wrapper">
    <navbar/>
    <div id="content">
      <home/>
      <footer-layout/>
    </div>
  </div>
</template>

<script>
  import Navbar from "../navbar/Navbar";
  import Home from "@/modules/home/Home";
  import FooterLayout from "@/core/components/footer/FooterLayout";

  export default {
    name: "DefaultLayout",
    components: {FooterLayout, Home, Navbar},
  }
</script>

<style lang="scss">

  #app {
    height: 100%;
    display: flex;
    overflow: hidden;
    margin-top: 0;
  }

  #menu-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  #content {
    flex: 1;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>