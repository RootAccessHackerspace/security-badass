<script lang="ts">
    import { MoveLeft } from "@lucide/svelte";
    import { Paths } from "$lib/consts/paths";
    import Container from "$lib/components/Containers/Container.svelte";
</script>

<Container>
    <a class="flex items-center" href={Paths.dashboard.index}><MoveLeft /><span class="text-xs ml-4">Back To Dashboard</span></a>
</Container>