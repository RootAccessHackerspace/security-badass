<script lang="ts">
    import Container from '$lib/components/Containers/Container.svelte';
    import FlexContainer from '$lib/components/Containers/FlexContainer.svelte';
    import MenuOptionLink from '$lib/components/Links/MenuOptionLink.svelte';
	import '../../app.css';
    import './dashboard.css';

	let { children } = $props();
</script>

<Container>
    <FlexContainer>
        <FlexContainer>
            <p class="text-2xl font-bold">B.A.D.A.S.S</p>
            <div class="ml-24">
                <ul class="flex items-center space-x-16">
                    <MenuOptionLink><a href="/dashboard/cameras">Cameras</a></MenuOptionLink>
                    <MenuOptionLink><a href="/dashboard/system">System Information</a></MenuOptionLink>
                    <MenuOptionLink><a href="/login/?logout">Logout</a></MenuOptionLink>
                </ul>
            </div>
        </FlexContainer>
        <FlexContainer> 
            <p class="mx-4">Powered by: </p>
            <img src="/rootaccess-logo-color.svg" alt="Root Access S.H.I.E.L.D" class="h-8 w-auto" />
        </FlexContainer>
    </FlexContainer>
</Container>

{@render children()}
