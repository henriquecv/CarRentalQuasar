<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link to='/' id='title'>
            Car Rental
          </router-link>
        </q-toolbar-title>
        

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-gray-8">
          Categories
        </q-item-label>
        <EssentialLink
          v-for="category in categoriesGetter"
          :key="category"
          v-bind:side_label="category"
        />
        <q-item-label header class="text-gray-8">
          Brands
        </q-item-label>
        <EssentialLink
          v-for="brand in brandsGetter"
          :key="brand"
          v-bind:side_label="brand"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { createNamespacedHelpers } from 'vuex-composition-helpers'
const { useState, useActions, useMutations, useGetters } = createNamespacedHelpers('car')

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup () {
    const { cars } = useState(['cars'])
    const leftDrawerOpen = ref(false)
    const checked = ref(true)
    const { categoriesGetter, brandsGetter } = useGetters(['categoriesGetter', 'brandsGetter'])
    //const essentialLinks = ref(linksData)

    return { leftDrawerOpen, cars, categoriesGetter, checked, brandsGetter }
  }
})
</script>

<style scoped>
#title {
  color: white;
  text-align: center;
  text-decoration: none;
}
</style>
