<script>
	import List from '../../components/List.svelte';
	let items1 = [
		{id:1, title: 'I', type: 'light'},
		{id:2, title: 'Am', type: 'light'},
		{id:3, title: 'Yoda', type: 'light'}
	];
	let items2 = [
		{id:4, title: 'Luke', type: 'light'},
		{id:5, title: 'Skywalker', type: 'light'}
	];
	let items3 = [
		{id:1, title: 'Emperor', type: 'dark'},
		{id:2, title: 'Palpatine', type: 'dark'},
		{id:3, title: 'Death', type: 'dark'},
		{id:4, title: 'Star', type: 'dark'}
	];
</script>
<h3>You can't mix the light side and the dark side</h3>
<hr>
<List items={items1} type='light'/>
<hr>
<List items={items2} type='light'/>
<hr>
<List items={items3} type='dark'/>
