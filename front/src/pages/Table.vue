<template>
  <q-page class="items-start q-pa-md">
    <h2>Our garage</h2>
    <div class="row">
      <div class="col-9">
        <example-table active/>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleTable from 'components/ExampleTable.vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleTable },
})
</script>

<style scoped>
h2 {
  font-weight: bold;
  font-size: 38px;
}
</style>
