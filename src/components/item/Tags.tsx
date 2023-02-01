import {defineComponent, PropType} from 'vue';
import s from './Tags.module.scss';

export const Tags = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>$2</div>
    );
  }
});