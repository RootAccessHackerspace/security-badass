<script lang="ts">
    import { Paths } from "$lib/consts/paths";
    import Container from "$lib/components/Containers/Container.svelte";
	import BackLink from "$lib/components/Links/BackLink/BackLink.svelte";
</script>

<Container>
    <BackLink path={Paths.dashboard.index} text="Back To Dashboard" />
</Container>