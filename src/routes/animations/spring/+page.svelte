<script>
    import { spring } from 'svelte/motion';
	import { elasticOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    let visible = true;
    let status = 'waiting...';

    let coords = spring({ x: 50, y: 50 }, {
        stiffness: 0.1,
        damping: 0.25
    });
	let size = spring(10);

/* -- TYPEWRITER FUNCTION -- */
    function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}
		const text = node.textContent;
		const duration = text.length / (speed * 0.01);
		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

    function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`
			}
		};
	}
</script>

<style>
    svg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
	}

	circle {
		fill: #ff3e00;
	}

	.controls {

		width: 200px;
		user-select: none;
        z-index: 2;
        position: relative;
	}

	.controls input {
		width: 100%;
	}

    /* .centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	} */
</style>

<svg
    on:mousemove={(e) => {
        coords.set({ x: e.clientX, y: e.clientY });
    }}
    on:mousedown={() => size.set(30)}
    on:mouseup={() => size.set(10)}
>
    <circle
        cx={$coords.x}
        cy={$coords.y}
        r={$size}
    />
</svg>

<div class="controls">
    <h2>Spring controls</h2>
    <label>
        <h3>stiffness ({coords.stiffness})</h3>
        <input
            bind:value={coords.stiffness}
            type="range"
            min="0"
            max="1"
            step="0.01"
        />
    </label>

    <label>
        <h3>damping ({coords.damping})</h3>
        <input
            bind:value={coords.damping}
            type="range"
            min="0"
            max="1"
            step="0.01"
        />
    </label>
    <label>
        
        <h3>Transitions</h3>
        
        <input
            type="checkbox"
            bind:checked={visible}
        />

    </label>
    
    <p>status: {status}</p>
    
    {#if visible} 
        <p transition:fade>Fades in and</p> 

        <p transition:fly={{y: 200, duration: 2000}}>
            Flies in and out
        </p>

        <p in:fly={{ y: 200, duration: 2000 }} out:fade>
            Flies in, fades out
        </p>

        <p transition:typewriter>
            The quick brown fox jumps over the lazy dog
        </p>

        <div
            class="centered"
            in:spin={{ duration: 8000 }}
            out:fade
        >
            <span>transitions!</span>
        </div>
        <p
            transition:fly={{ y: 200, duration: 2000 }}
            on:introstart={() => status = 'intro started'}
            on:outrostart={() => status = 'outro started'}
            on:introend={() => status = 'intro ended'}
            on:outroend={() => status = 'outro ended'}
        >
            Flies in and out, reports dom events
        </p>

    {/if}
</div>