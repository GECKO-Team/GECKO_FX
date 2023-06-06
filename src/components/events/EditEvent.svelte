<script>
    import { createEventDispatcher } from "svelte";
    const dispatch =  createEventDispatcher();

    export let id;
    export let city;
    export let country;
    export let description;
    export let group_id;
    export let house_nr;
    export let street;
    export let time;
    export let title;


    let event = {
        id: id,
        city: city,
        country: country,
        description: description,
        group_id: group_id,
        house_nr: house_nr,
        street: street,
        time: time.slice(0,16), //adjust the date so it fits into the form
        title: title
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch("editevent", event);
    };

    const onDelete = (e) => {
        e.preventDefault();
        dispatch("deleteevent", event);
    }

</script>

<style>

</style>

<div id="editEventForm">
    <form on:submit={onSubmit} class="grid-3">
        <label class="form-label" >Event details:</label>
        <input type="text" placeholder="title" bind:value={event.title}/>
        <input type="text" placeholder="description" bind:value={event.description}/>

        <label class="form-label" >Event location and time:</label>
        <input type="text" placeholder="city" bind:value={event.city}/>
        <input type="text" placeholder="country" bind:value={event.country}/>
        <input type="text" placeholder="street" bind:value={event.street}/>
        <label class="" >House number:</label>

        <!--       TODO: house number should be probably a number not a string-->
        <input type="text" placeholder="house_nr" bind:value={event.house_nr}/>

        <label class="" >Time:</label>
        <br>
        <input type="datetime-local" id="myInput" step="1" bind:value={event.time} />

        <input type="submit" class="btn" value="Save event">
        <button class="btn btn-danger" on:click={onDelete}>Delete event</button>

    </form>
</div>
