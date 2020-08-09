<template>
  <q-page class="column items-center justify-evenly">
    <example-table title="Example table" active/>
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