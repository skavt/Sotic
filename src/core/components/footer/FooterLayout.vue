<template>
  <div class="footer-wrapper">
    <footer class="page-footer font-small blue pt-4 ml-auto mr-auto">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-4 mt-md-0 mt-3">
            <h5 class="text-uppercase font-weight-bold">Address:</h5>
            <p class="mb-1">Second Floor</p>
            <p class="mb-1">James Williams House</p>
            <p class="mb-1">9 Museum PI</p>
            <p class="mb-1">Cardiff</p>
            <p>CF10 3BD</p>
          </div>
          <div class="col-md-4 mb-md-0 mb-3">
            <h5 class="text-uppercase font-weight-bold">Email:</h5>
            <p class="mt-1">example@sotic.net</p>
            <h5 class="text-uppercase font-weight-bold">Telephone:</h5>
            <p class="mt-1">020 123 456</p>
          </div>
          <div class="col-md-4 mb-md-0 mb-3">
            <h5 class="text-uppercase font-weight-bold">Sign Up:</h5>
            <b-input-group class="mt-3">
              <b-form-input placeholder="Your Email"></b-form-input>
              <b-input-group-append>
                <b-button class="append-button" variant="primary">Sign Up</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "FooterLayout"
  }
</script>

<style lang="scss" scoped>
  .footer-wrapper {
    background: #455b7c;
    color: #FFFFFF;
  }

  .page-footer {
    width: 55%;
  }

  .append-button {
    border-radius: unset;
  }

  @media screen and (max-width: 400px) {
    .page-footer {
      width: 100%;
    }
  }
</style>