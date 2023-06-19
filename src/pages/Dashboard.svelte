<script>

    import Sidebar from "../components/Sidebar.svelte";
    import Dashboard  from "../components/Dashboard.svelte";


</script>


<div class="tile is-ancestor content">
        <div class="tile is-parent" id="sidebar">
            <Sidebar />
        </div>
        <div class="tile is-parent is-9" id="main-content">
            <Dashboard />
        </div>

</div>

