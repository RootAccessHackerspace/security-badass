<script lang="ts">
    import { Menu } from '@lucide/svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 p-4 m-4 text-left">
    <div class="flex items-center justify-between">
        <div class="flex items-center justify-between">
            <Menu class="mr-4"/>
            <p class="text-2xl font-bold">B.A.D.A.S.S</p>
        </div>
        <div class="flex items-center justify-between"> 
            <p class="mx-4">Powered by: </p>
            <img src="/rootaccess-logo-color.svg" alt="Root Access S.H.I.E.L.D" class="h-8 w-auto" />
        </div>
        
    </div>
  </div>

{@render children()}
