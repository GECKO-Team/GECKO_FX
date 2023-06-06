<script>

    import Sidebar from "../components/Sidebar.svelte";
    import Event from "../components/Event.svelte";
    import AddEvent from "../components/AddEvent.svelte";
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

    // adding new event
    const addEvent = (e) => {
        // get the parameters
        const newEvent = e.detail;
        console.log(newEvent);
        events = [...events, newEvent];
    };

</script>

<style>
    #events-list {
        background-color: #a6cedc;
        border-radius: 20px;
    }

    #events-list-title {
        font-weight: bold;
        font-size: 2em;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0.5em;
    }
</style>

<div class="tile is-ancestor content">

    <div class="tile is-parent" id="sidebar">
        <Sidebar />
    </div>

    <div class="tile is-parent is-9" id="main-content">
        <div class="container">

            <AddEvent on:addevent={addEvent} />

            <div id="events-list" class="container">
                <h3 id="events-list-title">Created events</h3>
                {#if events.length === 0}
                    <p>No events</p>
                {:else}
                    {#each events as event}
                        <Event id={event.id}
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
