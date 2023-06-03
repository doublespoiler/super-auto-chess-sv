<script>
	export let data;
</script>

<h1>blog post "{data.post.slug}"</h1>
<h2>{data.post.title}</h2>
<div>{@html data.post.content}</div>