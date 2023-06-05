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
    <p>Time: {time}</p>
    <p>group_id: {group_id}</p>
    <p>Takes places at {city}, {country}, address {street} {house_nr} </p>
    <p>group_id: {group_id}</p>
    <p>description: {description}</p>
</div>