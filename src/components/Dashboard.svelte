<script>
    // This file will display all events found
    import {getContext, onMount} from "svelte";
    import WelcomePage  from "../components/WelcomePage.svelte";

    const geckoService = getContext("GeckoService");

    // WARNING: SOME IDE'S may throw an error with $: in Svelte. Ignore - this function is tested and valid.
    $: events = [];

    // on Mount get all events
    onMount(async () => {
        events = await geckoService.getEvents();
        console.log(events);
    });

    // eliminate all events in list, that have already happened

    $: events = events.filter(event => {
        let eventTime = new Date(event.time);
        let currentTime = new Date();
        return eventTime > currentTime;
    });


    // reformat time to be more readable
    $: events = events.map(event => {
        let eventTime = new Date(event.time);
        event.time = eventTime.toLocaleString();
        return event;
    });

    // check if user is logged in
    import {LoggedIn} from "../services/stores.js";

    let stat;
    LoggedIn.subscribe(value => {
        stat = value;
    });

</script>

<div id="EventContainer" class="has-content-centered">


    <div class="desc">
        Following events are upcoming:
    </div>
    {#each events as event}
        <div class="card has-background-primary-light">
            <div class="card-content">
                <div class="main-content">
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
        color: cadetblue;
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