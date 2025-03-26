<script lang="ts">
    import Container from '$lib/components/Containers/Container.svelte';
    import FlexContainer from '$lib/components/Containers/FlexContainer.svelte';
    import MenuOptionLink from '$lib/components/Links/MenuOptionLink.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { Paths } from '$lib/consts/paths';
	import '../../app.css';

	let { children } = $props();
</script>

<Container>
    <FlexContainer>
        <FlexContainer>
            <p class="text-2xl font-bold">B.A.D.A.S.S</p>
            <div class="ml-24">
                <ul class="flex items-center space-x-16">
                    <MenuOptionLink><a href={Paths.dashboard.cameras.index}>Cameras</a></MenuOptionLink>
                    <MenuOptionLink><a href={Paths.dashboard.system}>System Information</a></MenuOptionLink>
                    <MenuOptionLink><a href={Paths.logout}>Logout</a></MenuOptionLink>
                </ul>
            </div>
        </FlexContainer>
        <FlexContainer> 
            <p class="mx-4">Powered by: </p>
            <Logo size={8}/>
        </FlexContainer>
    </FlexContainer>
</Container>

{@render children()}
