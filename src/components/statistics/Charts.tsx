import {defineComponent, onMounted, PropType, ref} from 'vue';
import s from './Charts.module.scss';
import {FormItem} from '../../shared/Form';
import * as echarts from 'echarts';

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
    }
  },

  setup: (props, context) => {
    const category = ref('expenses')
    const refDiv = ref<HTMLElement>()
    const refDiv2 = ref<HTMLElement>()
    onMounted(()=>{
      if (refDiv.value === undefined) {return}
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(refDiv.value);
// 绘制图表
      myChart.setOption({
        grid: [
          {left: 0 , top: 0, right: 0, bottom: 20}
        ],
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    })
    onMounted(()=>{
      if (refDiv2.value === undefined) {return}
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(refDiv2.value);
// 绘制图表
      myChart.setOption({
        grid: [
          {left: 0 , top: 0, right: 0, bottom: 20}
        ],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    })
    return () => (
      <div class={s.wrapper}>
        <FormItem label='类型' type="select" options={[
          { value: 'expenses', text: '支出'},
          { value: 'income', text: '收入'}
        ]} v-model={category.value}/>
        <div ref={refDiv} class={s.demo}></div>
        <div ref={refDiv2} class={s.demo}></div>
      </div>
    );
  }
});