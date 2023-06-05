<script>
    import { createEventDispatcher } from "svelte";
    const dispatch =  createEventDispatcher();

    let event = {
        city: '',
        country: '',
        description: '',
        group_id: 0,
        house_nr: 0,
        street: '',
        time: 0,
        title: ''

    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch("addevent", event);
        // reset the event variables
        event = event = {
            city: '',
            country: '',
            description: '',
            group_id: 0,
            house_nr: 0,
            street: '',
            time: 0,
            title: ''
        };
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

<div id="addEventForm">
    <h2 id="form-title">Create new event</h2>
    <form on:submit={onSubmit} class="grid-3">
        <label class="form-label" >Event details:</label>
        <input type="text" placeholder="title" bind:value={event.title}/>
        <input type="text" placeholder="description" bind:value={event.description}/>
        <label class="" >Group id:</label>
        <input type="number" placeholder="group_id" bind:value={event.group_id}/>

        <label class="form-label" >Event location and time:</label>
        <input type="text" placeholder="city" bind:value={event.city}/>
        <input type="text" placeholder="country" bind:value={event.country}/>
        <input type="text" placeholder="street" bind:value={event.street}/>
        <label class="" >House number:</label>
        <input type="number" placeholder="house_nr" bind:value={event.house_nr}/>

        <label class="" >Time:</label>
        <input type="number" placeholder="time" bind:value={event.time}/>

        <input type="submit" class="btn" value="Add Event">
    </form>
</div>
