<script>

    import Navbar from "../components/Navbar.svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Event from "../components/Event.svelte";
    import AddEvent from "../components/AddEvent.svelte";

    // don't know if the function works
    function getEventsFromDatabase() {
        let databaseURL = 'something';
        let endpointURL = databaseURL + '/api/events'; // endpoint URL of the backend
        const options = {
            method: 'GET', // Specify the HTTP method
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(endpointURL, options)
            .then(response => response.json())
            .then(data => {
                // Manipulate the data and display it in your HTML
                console.log("Received data:");
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data from the database.', error);
            });
    }

    // get events from json:
    // in the future Events should be taken from the database
    let events = [
        {
            id: 0,
            city: 'Regensburg',
            country: 'Germany',
            description: 'Volleyball players meeting. Come and join us!',
            group_id: 0,
            house_nr: 23,
            street: 'Weiherweg',
            time: 1685948155,
            title: 'Volleyball playing'
        },
        {
            id: 1,
            city: 'Nuremberg',
            country: 'Germany',
            description: 'Drinking games and fun for all evening!',
            group_id: 1,
            house_nr: 41,
            street: 'Breitstrasse',
            time: 1685948345,
            title: 'Barbeque and beer'
        }
    ];

    const addEvent = (e) => {
        // get the parameters
        const newEvent = e.detail;
        events = [...events, newEvent];
    };

</script>

<style>
    #events-list {
        background-color: #a6cedc;
        border-radius: 20px;
    }

    #events-list-title {
        font-weight: bold;
        font-size: 2em;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0.5em;
    }
</style>

<div class="tile is-ancestor content">

    <div class="tile is-parent" id="sidebar">
        <Sidebar />
    </div>

    <div class="tile is-parent is-9" id="main-content">
        <div class="container">

            <AddEvent on:addevent={addEvent} />

            <div id="events-list" class="container">
                <h3 id="events-list-title">Created events</h3>
                {#if events.length === 0}
                    <p>No events</p>
                {:else}
                    {#each events as event}
                        <Event id={event.id}
                               city={event.city}
                               country={event.country}
                               description={event.description}
                               group_id={event.group_id}
                               house_nr={event.house_nr}
                               street={event.street}
                               time={event.time}
                               title={event.title}
                        />
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div>
