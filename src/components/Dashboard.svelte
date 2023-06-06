<script>
    // This file will display all events found
    import {getContext} from "svelte";
    import {onMount} from "svelte";

    const geckoService = getContext("GeckoService");

    $: events = [];

    // on Mount get all events
    onMount(async () => {
        events = await geckoService.getEvents();
        console.log(events);
    });

    // eliminate all events in list, that have already happened
    /*
    $: events = events.filter(event => {
        let eventTime = new Date(event.time);
        let currentTime = new Date();
        return eventTime > currentTime;
    });
    */

    // reformat time to be more readable
    $: events = events.map(event => {
        let eventTime = new Date(event.time);
        let timeString = eventTime.toLocaleString();
        event.time = timeString;
        return event;
    });


</script>


<div id="EventContainer" class="has-content-centered">
    <div class="desc">
        Follwing events are upcoming:

    </div>
    {#each events as event}
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <h2><a href="#/events/{event.id}/details"> {event.title}</a> </h2>
                    <p>{event.description}</p>

                    <p>Time: {event.time}</p>

                </div>

            </div>
        </div>
    {/each}

</div>

<style>

    #EventContainer {
        margin-top: 50px;
        align-items: center;
        width: 100%;
    }

    .card {
        height: 150px;
        margin-bottom: 10px;
    }

    .desc   {
        margin-bottom: 20px;
        font-size: larger;
        font-weight: bold;
    }

    a{
        color: black;

    }

</style>