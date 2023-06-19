<script>

    import {LoggedIn} from "../services/stores.js";
    import {getContext, onMount} from "svelte";

    let groups = [];

    const geckoService = getContext("GeckoService");

    let stat;
    LoggedIn.subscribe(value => {
        stat = value;
    });

    // on mount get all groups
    onMount(async () => {
        groups = await geckoService.getAllGroups();

    });




</script>


    <aside class="menu">

        {#if !stat}
            Please login to access more items.

            <br>
        {/if}


        <p class="menu-label">
            Events
        </p>
        <ul class="menu-list">
            <li><a href="#/events">All events</a></li>
            {#if stat}
                <li><a href="#/events/create">Create an event</a></li>
            {/if}
        </ul>
        {#if stat}
            <p class="menu-label">
                Existing Groups
            </p>
            <!-- for all items in groups, create a link to the group -->
            <ul class="menu-list">
                {#each groups as group}
                    <li><a href="#/group/{group.id}">{group.name}</a></li>
                {/each}
            </ul>
        {/if}

        <p class="menu-label">
            Create your own!
        </p>
        <ul class="menu-list">
            <li><a href="#/createGroup">Create a Group</a></li>
        </ul>



    </aside>
