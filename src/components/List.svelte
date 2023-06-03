<style>
	div {
		height: 1.5em;
		width: 10em;
		text-align: center;
		border: 1px solid black;
		margin: 0.2em;
		padding: 0.3em;
	}
	section {
		min-height: 12em;
    width: 12em;
	}
</style>
<script>
	import {dndzone} from 'svelte-dnd-action';
	import {flip} from 'svelte/animate';


  import {setDebugMode} from "svelte-dnd-action";
setDebugMode(true);


	const flipDurationMs = 200;
	
	export let items = [];
	export let type;

  let dropTargetStyle;
	
	function handleSort(e) {
		items = e.detail.items;
    dropTargetStyle = {
      "border": items[0]?.type === type ? '2px solid green' : '2px dotted red',
      'background-color': type === "light" ? 'white' : 'black'
    }
	}
</script>
<section use:dndzone={{items, flipDurationMs, type, dropTargetStyle}} on:consider={handleSort} on:finalize={handleSort}>
	{#each items as item(item.id)}
		<div id='item{item.id}' style={type === 'dark'? 'background-color:rgba(0,0,0,0.7); color: white': ''} animate:flip={{duration:flipDurationMs}}>
			{item.title}	
		</div>
	{/each}


</section>