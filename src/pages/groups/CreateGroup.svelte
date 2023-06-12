<script>
    import Sidebar from "../../components/Sidebar.svelte";
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
                    <div class="field">
                        <label class="label">Group name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Text input">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Choose the type of group</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                    <option>Sports</option>
                                    <option>Culture and Art</option>
                                    <option>Language</option>
                                    <option>Cooking and Baking</option>
                                    <option>Book</option>
                                    <option>Travel</option>
                                    <option>Gaming</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Group Description</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox">
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-success is-rounded">Save</button>
                        </div>
                        <div class="control">
                            <button class="button is-link is-light is-rounded">Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>