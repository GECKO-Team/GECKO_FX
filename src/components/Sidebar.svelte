<script>

    import {LoggedIn} from "../services/stores.js";

    let stat;
    LoggedIn.subscribe(value => {
        stat = value;
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
                Groups
            </p>
            <ul class="menu-list">
                <li><a href="#/createGroup">Create a Group</a></li>
            </ul>
        {/if}



    </aside>
