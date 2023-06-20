<script>
    import Sidebar from "../../components/Sidebar.svelte";

    import {getContext} from "svelte";
    import {UserName} from "../../services/stores.js";
    import {push} from "svelte-spa-router";

    const geckoService = getContext("GeckoService");

    let description = "";
    let name = "";

    let username = "";
    UserName.subscribe(value => {
        username = value;
        // alert(username)
    });



    async function createGroup() {
        const res = await geckoService.createGroup(username, name, description);
        if(res){
            alert("Group created successfully");
            push("/")
        }else{
            alert("Error creating group");
        }
    }



</script>

<div class="tile is-ancestor content">

    <div class="tile is-parent" id="sidebar">
        <Sidebar />
    </div>

    <div class="tile is-parent is-9" id="main-content">
        <div class="container">
            <div id="events-list" class="container">
                <h3 id="events-list-title">Create a Group</h3>
                <div class = "card event-card">
                    <form on:submit|preventDefault={createGroup}>
                        <div class="field">
                            <label class="label">Group name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Text input" bind:value={name}>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Group Description</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea" bind:value={description}></textarea>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-success is-rounded" type="submit">Save</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>