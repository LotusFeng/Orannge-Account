import {ref} from 'vue';

export const useBool = (initialValue: boolean) => {
  const bool = ref(initialValue)
  return {
    ref: bool,
    toogle: () => bool.value = !bool.value,
    on: () => bool.value = true,
    off: () => bool.value = false
  }
}