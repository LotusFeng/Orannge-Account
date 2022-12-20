import {defineComponent} from 'vue';
import s from './First.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import {RouterLink} from 'vue-router';

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={cloud}/>
          <h2>会挣钱<br/>还要会省钱</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">跳过</RouterLink>
          <RouterLink to="/start">下一页</RouterLink>
          <RouterLink class={s.fale} to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  }
});
