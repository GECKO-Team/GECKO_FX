<script>
    // This file will display all events found
    import {getContext, onMount} from "svelte";
    import WelcomePage  from "../components/WelcomePage.svelte";

    const geckoService = getContext("GeckoService");

    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();

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

    // delete all events in events list, that are not within group id
    $: events = events.filter(event => {
        return event.group_id == id;
    });


    // check if user is logged in
    import {LoggedIn} from "../services/stores.js";
    import Sidebar from "../components/Sidebar.svelte";
    import Dashboard from "../components/Dashboard.svelte";

    let stat;
    LoggedIn.subscribe(value => {
        stat = value;
    });

</script>

<div class="tile is-ancestor content">
    <div class="tile is-parent" id="sidebar">
        <Sidebar />
    </div>
    <div class="tile is-parent is-9" id="main-content">

        <div id="EventContainer" class="has-content-centered">
            <div class="desc">
                Welcome to group {id}
                <br>
                Following events are upcoming within this group:
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
    </div>

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