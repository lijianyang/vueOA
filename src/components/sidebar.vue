<template>
	<div class='sidebar'>
		<ul>
			<li v-bind:class='{active: activeLi === "calculator"}' @click='changeActive("calculator")'>
				<router-link :to='{ name: "calculator"}'>calculator</router-link>
			</li>
			<li  v-bind:class='{active: activeLi === "content"}' @click='changeActive("content")'>
				<router-link :to='{ name: "content", params: { id: 123 }}'>content</router-link>
			</li>
			<li  v-bind:class='{active: activeLi === "rollcall"}' @click='changeActive("rollcall")'>
				<router-link :to='{ name: "rollcall"}'>rollcall</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				activeLi: 'calculator'
			}
		},
		// computed: {
		// 	activeLi(){
		// 		console.log('111')
		// 		return location.hash.split('/')[1]
		// 	}
		// },
		methods: {
			changeActive: function(activeLI){
				console.log(activeLI)
				this.activeLi = activeLI;
			}
		}
	}
</script>
<style scoped lang="scss">
	.sidebar{
		width: 100px;
		position: absolute;
		left: 0;
		overflow: auto;
		z-index: 1000;
	}
	ul{
		width: 100%;
		overflow: auto;

		li{
			list-style: none;
			line-height: 40px;
			margin-top: 20px;
			padding: 3px 5px;
			border-radius: 5px;
			text-align: center;
			background: -webkit-linear-gradient(#768D95, #54686E);
			background: -o-linear-gradient(#768D95, #54686E);
			background: -moz-linear-gradient(#768D95, #54686E);
			background: linear-gradient(#768D95, #54686E);
		
			a{
				text-decoration: none;
				color: #fff;
				display: inline-block;
				width: 100%;
				height: 100%;

				&:focus{
					outline:none;
				}
			}

			&:hover,
			&:active,
			&.active{
				&{
					background: -webkit-linear-gradient(#1AE3FB, #259DC2);
					background: -o-linear-gradient(#1AE3FB, #259DC2);
					background: -moz-linear-gradient(#1AE3FB, #259DC2);
					background: linear-gradient(#1AE3FB, #259DC2);
				}
				a{
					border: 0;
				}
			}
		}
	}
</style>