<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-checkbox v-model="checado" :label="side_label" @input="changeCategoriesFilter({'category': side_label, 'checked': checado, 'name': name})"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

const { useMutations } = createNamespacedHelpers('car')
export default defineComponent({
  name: 'EssentialLink',
  props: {
    side_label: {
      type: String,
      default: '#'
    },
    name: {
      type: String,
      default: '#'
    }
  },
  setup (props) {
    const checado = ref(false)
    const { changeCategoriesFilter } = useMutations(['changeCategoriesFilter'])
    return { checado, changeCategoriesFilter }
  },
})
</script>
