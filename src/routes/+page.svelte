<script>

import { draggable } from '@neodrag/svelte'

let lastDropZone;

console.log('lastDropZone', lastDropZone)
</script>

<style>
#d1{
  height: 200px;
  width: 300px;
  background-color: red;
}

#d2{
  height: 200px;
  width: 300px;
  background-color: blue;
}

</style>

<h2>Home Page</h2>
<div id="d1"
  on:pointerenter={(e) => {
    lastDropZone = "d1";
    console.log("enter + " )
  }}>
  <div class="draggable" use:draggable={{

  }}
    on:neodrag:end={(e) => {
      console.log("let go on " + lastDropZone);
    }}>

    Hello
  </div>
</div>


  <!-- right now, these trigger twice when we drag into the drag zone
  I think this is because of the div being under the pointer
  we can still probably use it as detection over the drop zones -->
<div id="d2" 
  on:pointerenter={(e) => {
    // const dragging = document.querySelector(".neodrag-dragging")
    // dragging.style.color = 'green';
    console.log('enter')
    lastDropZone = "d2"
    console.log(lastDropZone)
  }}
  on:pointerleave={(e) => {
    // const dragging = document.querySelector(".neodrag-dragging")
    // dragging.style.color = 'white';
    console.log('leave')
  }}>

</div>
