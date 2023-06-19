<script>

    import Sidebar from "../../components/Sidebar.svelte";
    import AddEvent from "../../components/events/CreateEvent.svelte";
    import {getContext} from "svelte";
    import {push} from "svelte-spa-router";

    const geckoService = getContext("GeckoService");

    // initialize the array to store events on the page
    let events = [];

    // adding new event
    const addEvent = async (e) => {
        // get the parameters from form
        const eventToCreate = e.detail;
        // save the event
        let post_event_response = await geckoService.postEvent(eventToCreate);
        // if the event was saved successfully
        if (post_event_response.status === 200) {
            // add the event to the array
            events.push(eventToCreate);
            push("/events")
        }
    };


</script>

<style>

</style>

<div class="tile is-ancestor content">

    <div class="tile is-parent" id="sidebar">
        <Sidebar />
    </div>

    <div class="tile is-parent is-9" id="main-content">
        <div class="container">

            <AddEvent on:addevent={addEvent} />

        </div>
    </div>
</div>
