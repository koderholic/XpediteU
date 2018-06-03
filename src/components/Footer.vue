<template>
  <v-footer height="auto">
    <v-card flat tile class="flex">

      <v-card-title class="bg-info dark--text">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          dark
          class="mx-3"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="grey lighten-3">
        <v-container grid-list-md text-xs-center text-md-left>
          <v-layout row wrap>

            <v-flex xs12 sm6 md3>
              <h3 class="body-2">CONTACT</h3>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                New York, NY 10012, US
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                info@example.com
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                + 01 234 567 88
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                + 01 234 567 89
              </p>
            </v-flex>

            <v-flex xs12 sm6 md3>
              <h3 class="body-2">CONTACT</h3>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                New York, NY 10012, US
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                info@example.com
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                + 01 234 567 88
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                + 01 234 567 89
              </p>
            </v-flex>
            <v-flex xs12 sm6 md3>
              <h3 class="body-2">CONTACT</h3>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                New York, NY 10012, US
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                info@example.com
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                + 01 234 567 88
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                + 01 234 567 89
              </p>
            </v-flex>

            <v-flex xs12 sm6 md3>
              <h3 class="body-2">CONTACT</h3>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                New York, NY 10012, US
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                info@example.com
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                + 01 234 567 88
              </p>
              <p>
                <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                + 01 234 567 89
              </p>
            </v-flex>
          </v-layout>
        </v-container>

      </v-card-text>

      <v-card-actions class="bg-info justify-center white--text">
        &copy;2018 — <strong>XpediteU @ Kodedly</strong>
      </v-card-actions>

    </v-card>
  </v-footer>
</template>

<style>
  .body-2 {
    margin-left: 19px;
    margin-bottom: 20px;
    color: #b91b31;
  }
</style>

<script>
export default {
}
</script>
