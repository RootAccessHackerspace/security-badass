<script lang="ts">
    import { MoveLeft } from "@lucide/svelte";

    export let path: string;
    export let text: string;
</script>

<a class="flex items-center" href={path}><MoveLeft /><span class="text-xs ml-4">{text}</span></a>