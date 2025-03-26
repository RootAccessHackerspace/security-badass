<script lang="ts">
    import Container from "$lib/components/Containers/Container.svelte";
    import FlexContainer from "$lib/components/Containers/FlexContainer.svelte";

    export let message: string;
    export let date: Date;
</script>

<Container>
    <FlexContainer>
        <p>{message}</p>
        <p>{date.toLocaleTimeString()}</p>
    </FlexContainer>
</Container>
