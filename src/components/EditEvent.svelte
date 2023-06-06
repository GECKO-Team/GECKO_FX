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

</script>

<style>
    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=number], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    #addEventForm {
        border-radius: 20px;
        background-color: #f2f2f2;
        margin: 1em;
        padding: 1em;
    }

    .form-label {
        font-weight: bolder;
        font-size: 1.2em;
    }

    #form-title {
        font-weight: bold;
        font-size: 1.8em;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
</style>

<div id="editEventForm">
    <h2 id="form-title">Edit event</h2>
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
    </form>
</div>
