<script>
    import { createEventDispatcher } from "svelte";
    const dispatch =  createEventDispatcher();
    import { navigate } from 'svelte-routing';

    export let id;
    export let city;
    export let country;
    export let description;
    export let group_id;
    export let house_nr;
    export let street;
    export let time;
    export let title;

    let showDescription = false;
    const toggleShowDescription = () => (showDescription = !showDescription);

    // change time formatting from 2021-05-20T18:00:00.000Z to 20.05.2021 20:00:00 on mount
    $: time = new Date(time).toLocaleString();


    function onDetails() {
        location.href = `#/events/${id}/details`;
    }
</script>

<style>

</style>

<div class="card event-card">
    <h1>
        {title}
    </h1>
    <button class="btn" on:click={onDetails}>Show details about the event</button>
    <p></p>
    <!-- <h4>Event id: {id}</h4> -->
    <p>Takes places in {city}, {country}, at {street} {house_nr} </p>
    <p>Time: {time}</p>
</div>