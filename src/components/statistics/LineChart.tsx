import {defineComponent, onMounted, PropType, ref} from 'vue';
import s from './LineChart.module.scss';
import * as echarts from 'echarts';

export const LineChart = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refDiv = ref<HTMLElement>()
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
    return () => (
      <div ref={refDiv} class={s.wrapper}></div>
    );
  }
});