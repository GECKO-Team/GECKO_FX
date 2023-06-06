<script>
    import { createEventDispatcher } from "svelte";
    const dispatch =  createEventDispatcher();

    import Sidebar from "../../components/Sidebar.svelte";
    import Event from "../../components/events/EventShort.svelte";
    import EditEvent from "../../components/events/EditEvent.svelte";
    import { navigate } from 'svelte-routing';

    import {getContext} from "svelte";
    import GetEvent from "../../components/events/EventDetails.svelte";

    const geckoService = getContext("GeckoService");

    const currentURL = window.location.href;
    const id = currentURL.split("/").pop();
    // initialize the array to store events on the page
    let events = [];
    let noEventsHandler = false;

    // get events
    let get_event_response = geckoService.getEvent(id);
    get_event_response.then(result => {
        // console.log("get_event_response:");
        // console.log(result);
        if (result !== false) {
            let newEvent = result.data;
            events = [...events, newEvent];
        }
        else {
            noEventsHandler = true;
        }
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

    const deleteEvent = e => {
        // delete from database
        let event_to_delete = e.detail;
        let delete_event_response = geckoService.deleteEvent(event_to_delete.id);

        // redirect to events website
        location.href = `#/events`;
    }

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
                {#if noEventsHandler === true}
                    <h3 id="noEventsHandler" >The event with this id does not exist!</h3>
                {:else}
                    <h3 id="events-list-title">Edit event</h3>
                    {#if events.length === 0}
                        <p>Loading...</p>
                    {:else}
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
                                on:deleteevent={deleteEvent}

                                on:editevent={editEvent}
                        />
                        {/each}
                    {/if}
                {/if}
            </div>
        </div>
    </div>
</div>
