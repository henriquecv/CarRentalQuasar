<template>
  <q-layout view="hhh LpR lFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" id="title">Car Rental</router-link>
        </q-toolbar-title>
        <q-btn to="/table" label="login" outline color="white" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home page" exact />
        <q-route-tab to="/table" label="Rent here!" exact />
        <q-route-tab to="/table" label="My rentals" exact />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list>
        <q-item-label header class="text-gray-8">Categories</q-item-label>
        <EssentialLink v-for="category in categoriesGetter" :key="category" v-bind:side_label="category"/>
        <q-item-label header class="text-gray-8">Brands</q-item-label>
        <EssentialLink v-for="brand in brandsGetter" :key="brand" v-bind:side_label="brand" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script lang="ts">
import EssentialLink from "components/EssentialLink.vue";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const {
  useState,
  useActions,
  useMutations,
  useGetters,
} = createNamespacedHelpers("car");

import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "MainLayout",
  components: { EssentialLink },
  setup() {
    const { cars } = useState(["cars"]);
    const left = ref(true);
    const checked = ref(true);
    const { categoriesGetter, brandsGetter } = useGetters([
      "categoriesGetter",
      "brandsGetter",
    ]);
    //const essentialLinks = ref(linksData)

    return { left, cars, categoriesGetter, checked, brandsGetter };
  },
});
</script>

<style scoped>
#title {
  color: white;
  text-align: center;
  text-decoration: none;
}
</style>

