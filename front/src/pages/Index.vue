<template>
  <q-page class="column items-center justify-evenly">
    <ExampleComponent
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></ExampleComponent>
    <q-btn to="/table" label="Table" outline color="purple" />
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/CompositionComponent.vue'
import ExampleTable from 'components/ExampleTable.vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent, ExampleTable },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ])
    const meta = ref<Meta>({
      totalCount: 1200
    })
    return { todos, meta }
  }
})
</script>
