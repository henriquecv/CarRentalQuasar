<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ prop ? 'YES' : 'NO' }}</p>
    <p>Clicks on todos: {{ count }}</p>
    <q-btn label="TESTE" color="primary" @click="changeCount(1); changeProp()"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import { Todo, Meta } from './models'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

const { useState, useActions, useMutations, useGetters } = createNamespacedHelpers('car')

function useClickCount () {
  const clickCount = ref(0)
  function increment () {
    clickCount.value += 1
    return clickCount.value
  }

  return { clickCount, increment }
}

function useDisplayTodo (todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length)
  return { todoCount }
}

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: (Array as unknown) as PropType<Todo[]>,
      default: () => []
    },
    meta: {
      type: (Object as unknown) as PropType<Meta>,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup (props) {
    const { count, prop } = useState(['count', 'prop'])
    const { changeCount, changeProp } = useMutations(['changeCount', 'changeProp'])
    const { categoriesGetter } = useGetters(['categoriesGetter'])
    return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')), count, changeCount, prop, changeProp, categoriesGetter }
  },
});
</script>

