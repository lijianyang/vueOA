<template>
	<div>
		<div id='chart'>chart</div>
	</div>
</template>
<script type="text/javascript">
	import echarts from 'echarts'

	export default {
		data(){
			return {
				myChart: null
			}
		},
		mounted(){
			// 基于准备好的dom，初始化echarts实例
			this.myChart = echarts.init(document.getElementById('chart'));
			// 绘制图表
			this.myChart.setOption({
			    title: { text: '点名次数统计', padding: [5, 0, 5, 250] },
			    tooltip: {},
			    xAxis: {
			        data: this.names
			    },
			    yAxis: {},
			    series: [{
			        name: '点名次数',
			        type: 'bar',
			        data: this.lucknum
			    }]
			});
		},
		computed: {
			data(){
				return this.$store.state.studentsData
			},
			names(){
				return this.AttrToArray(this.$store.state.studentsData,'name')
			},
			lucknum(){
				return this.AttrToArray(this.$store.state.studentsData,'luckynum')
			}
		},
		methods: {
			AttrToArray(arr,attr){
				var arrResult = []
				for(var i = 0; i < arr.length; i++){
					arrResult.push(arr[i][attr])
				}
				return arrResult
			}
		},
		watch:{
			lucknum(newVal){
				 this.myChart.setOption({
			        series: [{
				        data: newVal
				    }]
			    });
			}
		}
	}
	
</script>
<style type="text/css">
	#chart{
		width: 600px;
		height: 300px;
	}
</style>