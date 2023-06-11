<script>
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

    function onEdit() {
        location.href = `#/events/${id}`;
    }
</script>

<style>

</style>

<div class="card event-card event-details-card">
    <button class="btn" on:click={onEdit}>Edit event</button>

    <h1>
        {title}
    </h1>

    <!-- <h2>Event id: {id}</h2> -->
    <p>Takes places in {city}, {country}, at {street} {house_nr} </p>
    <p>Time: {time}</p>
    <p>Gruppe: {group_id}</p>

    <button class="btn" on:click={toggleShowDescription}>
        {#if showDescription}Hide description{:else}Show description{/if}
    </button>
    {#if showDescription}
        <p>{description}</p>
    {/if}
</div>