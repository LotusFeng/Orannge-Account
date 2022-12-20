import {defineComponent} from 'vue';
import s from './First.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import {RouterLink} from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout';

export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={cloud}/>,
          title: () => <h2>会挣钱<br/>还要会省钱</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            <RouterLink to="/start">下一页</RouterLink>
            <RouterLink class={s.fale} to="/start">跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    );
  }
});
