<script>
    import {createEventDispatcher, onMount} from "svelte";
    const dispatch =  createEventDispatcher();
    import {UserName} from "../../services/stores.js";
    import {getContext} from "svelte";

    const geckoService = getContext("GeckoService");

    $: available_groups = [];

    // on mount get all groups
    onMount(async () => {
        available_groups = await geckoService.getAllGroups();
    });


    let event = {
        city: '',
        country: 'Germany',
        description: '',
        group_id: 1,
        house_nr: '',
        street: '',
        time: '',
        title: '',
        creator: ''

    }

    let username = "";
    UserName.subscribe(value => {
        username = value;
        // alert(username)
    });

    const onSubmit = (e) => {
        e.preventDefault();
        event.id = Math.floor(Math.random() * 10000000) + 10;
        event.creator = username;
        dispatch("addevent", event);
        // reset the event variables

        /*
        event = {
            city: '',
            country: 'Germany',
            description: '',
            group_id: 1,
            house_nr: '',
            street: '',
            time: '',
            title: '',
            creator: ''
        };

         */



    };

</script>

<style>

</style>

<div id="addEventForm">
    <h2 id="form-title">Create new event</h2>
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
        <label class="" >Group:</label>
        <select bind:value={event.group_id}>
            {#each available_groups as group}
                <option value={group.id}>{group.name}</option>
            {/each}
        </select>

        <label class="" >Time:</label>
        <br>
        <input type="datetime-local" id="myInput" step="1" bind:value={event.time} />

        <input type="submit" class="btn" value="Add Event">
    </form>
</div>
