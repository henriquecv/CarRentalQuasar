<template>
  <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Model</th>
          <th class="text-center">Brand</th>
          <th class="text-center">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in filteredCars" :key="car">
          <td class="text-center">{{ car.model }}</td>
          <td class="text-center">{{ car.brand }}</td>
          <td class="text-center">{{ car.category }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import { Todo, Meta } from './models'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

const { useState, useActions, useMutations, useGetters } = createNamespacedHelpers('car')

export default defineComponent({
  name: 'ExampleTable',
  
  setup (props) {
    const { cars, categories_filter, brands_filter } = useState(['cars', 'categories_filter', 'brands_filter'])
    const { filteredCars } = useGetters(['filteredCars'])
    const { getCars, soma, zeraCount } = useActions(['getCars', 'soma', 'zeraCount'])
    const open = ref(true)
    return { cars, categories_filter, brands_filter, open, filteredCars, getCars } 
  },
  mounted () {
    this.$store.dispatch('car/getCars')
  }
});
</script>

<style scoped>
.text-center {
  font-size: 22px;
}
</style>
