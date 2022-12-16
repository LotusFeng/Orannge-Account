import {Foo} from '../views/Foo';
import {Bar} from '../views/Bar';
import {Welcome} from '../views/Welcome';
import {RouteRecordRaw} from 'vue-router';
import {First} from '../views/First';
import {Second} from '../views/Second';
import {Third} from '../views/Third';
import {Forth} from '../views/Forth';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Foo },
  { path: '/Bar', component: Bar },
  {path: '/welcome',
  component: Welcome,
  children: [
    {path:'1', component: First},
    {path:'2', component: Second},
    {path:'3', component: Third},
    {path:'4', component: Forth},
  ]}
]