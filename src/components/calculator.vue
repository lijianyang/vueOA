<template>
	<div class='calculator'>
		<div class='result'>
			<input type="text" placeholder="0" v-model='data' disabled>
		</div>
		<table>
			<tr>
				<td @click='inputNum("7")'>7</td>
				<td @click='inputNum("8")'>8</td>
				<td @click='inputNum("9")'>9</td>
				<td @click='deleteNum()'>←</td>
				<td @click='clear()'>C</td>
			</tr>
			<tr>
				<td @click='inputNum("4")'>4</td>
				<td @click='inputNum("5")'>5</td>
				<td @click='inputNum("6")'>6</td>
				<td @click='operate("multiply")'>*</td>
				<td @click='operate("divide")'>/</td>
			</tr>
			<tr>
				<td @click='inputNum("1")'>1</td>
				<td @click='inputNum("2")'>2</td>
				<td @click='inputNum("3")'>3</td>
				<td @click='operate("add")'>+</td>
				<td @click='operate("subtract")'>-</td>
			</tr>
			<tr>
				<td @click='inputNum("0")'>0</td>
				<td @click='inputNum("00")'>00</td>
				<td @click='inputNum(".")'>.</td>
				<td @click='operate("complementation")'>%</td>
				<td @click='operate()'>=</td>
			</tr>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				data: 0,
				operMode: null,
				operData: 0,
				inputNewData: true
			}
		},
		methods: {
			inputNum(num){

				console.log(this.operMode)
				//if input a new number,clear the old value and re-enter
				if(this.inputNewData){
					this.operData = this.data;
					this.data = num
					this.inputNewData = false
				}else{ //else join the input
					this.data = this.data + num
				}
			},
			operate(mode){
				console.log(this.operData)
				this.data = parseFloat(this.data)
				if(this.operMode){
					switch (this.operMode){
						case 'add':
							this.data = this.operData + this.data;
							break;
						case 'subtract':
							this.data = this.operData - this.data;
							break;
						case 'divide':
							this.data = this.operData / this.data;
							break;
						case 'multiply':
							this.data = this.operData * this.data;
							break;
						case 'complementation':
							this.data = this.operData % this.data;
							break;
					}
				}
				this.operMode = mode ? mode : null;
				this.inputNewData = true
			},
			clear(){
				this.data = 0;
				operMode = null
				inputNewData = true
			},
			deleteNum(){
				var dataString = this.data.toString()
				this.data = dataString.substring(0,dataString.length-1)
			}
		}
	}
</script>
<style type="text/css" scoped lang="scss">
	.calculator{
		width: 300px;
		height: 400px;
		margin: 0 auto;
		margin-top: 50px; 
		background-color: #ccc;
		border-radius: 10px;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.result{
		text-align: center;
		input{
			text-align: right;
			display: inline-block;
			width: 260px;
			border: 0;
			height: 40px; 
			border-radius: 5px;
			margin-top: 50px;
			font-size: 30px;
		}
	}
	table{
		margin: 0 auto; 
		margin-top: 30px;
		td{
			display: inline-block;
			width: 40px; 
			height: 40px;
			border-radius: 5px;
			text-align: center;
			font-size: 20px;
			margin: 10px 5px; 
			background-color: gray;
			color: #fff;
			box-shadow: 2px 2px 5px gray;
			line-height: 40px;
			cursor: pointer;
		}
	}
</style>