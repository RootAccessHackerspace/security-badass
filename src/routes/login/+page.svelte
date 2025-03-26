<script lang="ts">
    import { Paths } from "$lib/consts/paths";
    import Container from "$lib/components/Containers/Container.svelte";
	import Logo from "$lib/components/Logo.svelte";
</script>

<Container>
    <Logo classes={"h-12 w-auto"} />
    <p class="text-2xl font-bold">Login</p>
    <div class="items-center justify-between p-4">
        <input type="text" class="input p-4 m-4" placeholder="Username" required/>
        <input type="password" class="input p-4 m-4" placeholder="Password" required/>
        <button type="button" class="btn preset-filled-primary-500 m-4" onclick={
            ()=> {
                //TODO: Actual authentication logic
                window.location.href = Paths.dashboard.index;
            }
        }>Login</button>
    </div>
</Container>