<script>

    import Sidebar from "../../components/Sidebar.svelte";
    import AddEvent from "../../components/events/CreateEvent.svelte";
    import {getContext} from "svelte";

    const geckoService = getContext("GeckoService");

    // initialize the array to store events on the page
    let events = [];

    // adding new event
    const addEvent = (e) => {
        // get the parameters from form
        const eventToCreate = e.detail;
        // save the event
        let post_event_response = geckoService.postEvent(eventToCreate);
        post_event_response.then(result => {
            // console.log("result of post_event_response:");
            // console.log(result);

            // redirect to events website
            location.href = `#/events`;
        });
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
