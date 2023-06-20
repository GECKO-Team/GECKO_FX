<script>

    import Sidebar from "../components/Sidebar.svelte";
    import Dashboard  from "../components/Dashboard.svelte";
    import WelcomePage from "../components/WelcomePage.svelte";

    // check if user is logged in
    import {LoggedIn} from "../services/stores.js";

    let stat;
    LoggedIn.subscribe(value => {
        stat = value;
    });
</script>

{#if !stat}
    <WelcomePage />
{:else}
    <div class="tile is-ancestor content">
            <div class="tile is-parent" id="sidebar">
                <Sidebar />
            </div>
            <div class="tile is-parent is-9" id="main-content">
                <Dashboard />
            </div>

    </div>
{/if}

