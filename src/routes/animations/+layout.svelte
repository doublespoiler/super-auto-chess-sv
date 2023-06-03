
<div class="layout">
	<main>
		<slot />
	</main>

	<aside>
		<h2>More anims</h2>
		<ul>

				<li><a href="/animations/tween">tween</a></li>
                <li><a href="/animations/spring">spring</a></li>
                <li><a href="/animations/local">local</a></li>

		</ul>
	</aside>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
    aside{
        /* position: relative; */
        z-index: 2;
    }
</style>