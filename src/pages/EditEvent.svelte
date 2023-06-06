<script>

    import Sidebar from "../components/Sidebar.svelte";
    import Event from "../components/Event.svelte";
    import EditEvent from "../components/EditEvent.svelte";
    import { navigate } from 'svelte-routing';

    import {getContext} from "svelte";

    const geckoService = getContext("GeckoService");

    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    // initialize the array to store events on the page
    let events = [];

    // get events
    let get_event_response = geckoService.getEvent(id);
    get_event_response.then(result => {
        // console.log("get_event_response:");
        // console.log(result);
        let newEvent = result.data;
        events = [...events, newEvent];
    });




    // edit existing event
    const editEvent = (e) => {
        // get the parameters from form
        const eventToEdit = e.detail;
        console.log("eventToEdit:");
        console.log(eventToEdit);

        // save the event
        let put_event_response = geckoService.putEvent(eventToEdit);
        put_event_response.then(result => {
            console.log("result of put_event_response:");
            console.log(result);

        // redirect to events website
        location.href = `#/events`;

        });
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

            <div id="events-list" class="container">
                {#each events as event}
                <EditEvent
                        id={event.id}
                        city={event.city}
                        country={event.country}
                        description={event.description}
                        group_id={event.group_id}
                        house_nr={event.house_nr}
                        street={event.street}
                        time={event.time}
                        title={event.title}

                        on:editevent={editEvent}
                />
                {/each}
            </div>
        </div>
    </div>
</div>
