<template>
  <b-navbar v-if="isSmallScreen" sticky>
    <b-navbar-brand class="p-0">
      <b-img src="assets/logo.svg" alt="logo" width="100" height="25" class="mr-2"></b-img>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <i class="fas fa-bars"/>
        </template>
        <b-dropdown-item href="#">About</b-dropdown-item>
        <b-dropdown-item href="#">Squads</b-dropdown-item>
        <b-dropdown-item href="#">Tickets</b-dropdown-item>
        <b-dropdown-item href="#">Support</b-dropdown-item>
        <b-dropdown-item href="#">Membership</b-dropdown-item>
        <b-dropdown-item href="#">Contact</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
  <b-navbar v-else>
    <b-navbar-nav class="mr-auto ml-auto">
      <b-img src="assets/logo.svg" alt="logo" width="100" height="50" class="mr-2"></b-img>
      <b-nav-item href="#">About</b-nav-item>
      <b-nav-item href="#">Squads</b-nav-item>
      <b-nav-item href="#">Tickets</b-nav-item>
      <b-nav-item href="#">Support</b-nav-item>
      <b-nav-item href="#">Membership</b-nav-item>
      <b-nav-item href="#">Contact</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="mr-auto">
      <b-img src="assets/facebook.svg" alt="facebook-logo" width="20" height="50" class="mr-2"></b-img>
      <b-img src="assets/instagram.svg" alt="instagram-logo" width="20" height="50" class="mr-2"></b-img>
      <b-img src="assets/twitter.svg" alt="twitter-logo" width="20" height="50" class="mr-2"></b-img>
      <b-img src="assets/linkedin.svg" alt="linkedin-logo" width="20" height="50"></b-img>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        windowWidth: window.innerWidth,
      }
    },
    computed: {
      isSmallScreen() {
        return this.windowWidth <= 800
      },
    },
    methods: {},
    mounted() {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    },
  }
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 5px 5px 8px;
    background-color: #284b63;
    justify-content: center;

    > .navbar-nav {
      align-items: end;

      > .nav-item {
        > .nav-link:hover {
          color: wheat;
          font-size: 14px;
        }
      }
    }

    /deep/ .nav-link {
      color: white;
      font-size: 14px;
    }

    /deep/ .nav-link:hover {
      color: white;
    }
  }

  @media screen and (max-width: 800px) {
    .navbar {
      padding: 4px 4px 5px;

      /deep/ .nav-link {
        font-size: 18px;
        outline: none;
        padding: 5px 5px 0 0;
      }
    }
  }

</style>