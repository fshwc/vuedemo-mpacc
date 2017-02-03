<template>
	<div :class="['new_boxs', box.class]">
		<div :class="{title:true, title_1:box.left, title_2:!box.left}">
			<span>{{box.title}}</span>
			<a Whref="javascript:;">MORE</a>
		</div>
		<ul>
			<li v-for="article in box.articles">
				<span>{{article.time}}</span>
				{{article.title}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'homePage',
	props: ['box']
}
</script>
