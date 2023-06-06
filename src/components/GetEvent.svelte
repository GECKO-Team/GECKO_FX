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

</script>

<style>
    .event-card{
        border-radius: 20px;
        background-color: #bae1ee;
        margin: 1em;
        padding: 1em;
    }
</style>

<div class="card event-card">
    <h1>
        {title}
    </h1>

    <h2>Event id: {id}</h2>
    <p>Takes places in {city}, {country}, at {street} {house_nr} </p>
    <p>Time: {time}</p>
    <p>group_id: {group_id}</p>

    <button on:click={toggleShowDescription}>
        {#if showDescription}Hide description{:else}Show description{/if}
    </button>
    {#if showDescription}
        <p>description: {description}</p>
    {/if}
</div>