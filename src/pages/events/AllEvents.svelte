<script>

    import Sidebar from "../../components/Sidebar.svelte";
    import EventShort from "../../components/events/EventShort.svelte";
    import {getContext} from "svelte";

    const geckoService = getContext("GeckoService");

    // initialize the array to store events on the page
    let events = [];

    // get events
    let get_events_response = geckoService.getEvents();
    get_events_response.then(result => {
        result.forEach(item => {
            events = [...events, item];
        });
    });

</script>

<style>

</style>

<div class="tile is-ancestor content">

    <div class="tile is-parent" id="sidebar">
        <Sidebar />
    </div>

    <div class="tile is-parent is-9" id="main-content">
        <div class="container">
            <div id="events-list" class="container">
                <h3 id="events-list-title">All created events</h3>
                {#if events.length === 0}
                    <p>Loading...</p>
                {:else}
                    {#each events as event}
                        <EventShort id={event.id}
                               city={event.city}
                               country={event.country}
                               description={event.description}
                               group_id={event.group_id}
                               house_nr={event.house_nr}
                               street={event.street}
                               time={event.time}
                               title={event.title}
                        />
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div>
