<script lang="ts">

    import Container from "$lib/components/Containers/Container.svelte";
    import FlexContainer from "$lib/components/Containers/FlexContainer.svelte";
    import StatusCard from "$lib/components/Cards/StatusCard.svelte";

    // TODO: Get armed status from T.W.A.T.S, this is only a mock
    let armedStatus = $state(false);

    //This one can actually just be a state variable
    let showActivityLog = $state(true);

    //TODO: I assume these would be in a DB somewhere
    const activityLogs = [
        {
            date: new Date(),
            message: "Back Door Sensor activated!"
        },
        {
            date: new Date(),
            message: "Alarm activated!"
        },
        {
            date: new Date(),
            message: "Bad things about to happen!"
        },
        {
            date: new Date(),
            message: "Abandon All Hope!"
        }
    ];
</script>

<Container>
    <FlexContainer>
        <div class = "flex items-center">
            <h1 class="text-2xl font-bold">Current System Status: <span class= {armedStatus ? "text-green-500" : "text-red-500"}>{armedStatus ? "Online" : "Offline"}</span></h1>
            <button type="button" class={armedStatus ? "btn preset-filled-error-500 mx-16" : "btn preset-outlined-success-500 mx-16"}>{armedStatus ? "Disarm System" : "Arm System"}</button>
        </div>
        <p class="text-sm text-gray-500">Last updated: 12:00 PM</p>
    </FlexContainer>
    <div class="mt-4">
        <div class="w-full p-4 bg-surface-100-900 rounded-lg">
            <FlexContainer>
                <p class="text-lg">Activity Log:</p>
                <button type="button" class="btn" onclick={() => showActivityLog = !showActivityLog}>{showActivityLog ? "(Hide)" : "(Show)"}</button>
            </FlexContainer> 
            <p class="border-t-2"></p>
            <div class = "w-full p-4 bg-surface-100-900 rounded-lg" hidden={!showActivityLog}>
                {#each activityLogs as log}
                    <StatusCard date={log.date} message={log.message} />
                {/each}
            </div>
        </div>
    </div>
</Container>
