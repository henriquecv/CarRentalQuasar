<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-checkbox v-model="checked" :label="side_label" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'EssentialLink',
  props: {
    side_label: {
      type: String,
      default: '#'
    }
  },
  setup (props) {
    const checked = ref(false)
    return { checked }
  },
})
</script>
