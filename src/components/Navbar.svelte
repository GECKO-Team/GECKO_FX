<script>

    import {LoggedIn} from "../services/stores.js";
    import {getContext} from "svelte";

    const geckoService = getContext("GeckoService");

    let stat;
    LoggedIn.subscribe(value => {
        stat = value;
    });

    function logout(){
        geckoService.logout();
    }



</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="./">
            <img src="/images/pinki%201.png" width="30" height="30">
            GECKO
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                Home
            </a>

            <a class="navbar-item">
                Other stuff.
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    More other stuff.
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Jobs
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        Report an issue
                    </a>
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    {#if !stat}
                        <a class="button is-light" href="/#/login">
                            Log in
                        </a>
                        <a class="button is-light" href="/#/signup">
                            Sign up
                        </a>
                        <a class="button is-light" href="/#/userSettings"> <img src="/images/userSettings.png" alt="gear"/>
                        </a>
                    {/if}
                    {#if stat}
                        <div id="welcome" class="tag is-light">
                            <p><i class="fa fa-hand-peace-o" aria-hidden="true"></i> Hallo!</p>
                        </div>

                        <div>
                            <a class="navbar-item" href="/#/usersettings">
                                <i class="fa fa-cog" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div>
                            <button id="logout" class="button is-light" on:click|once={logout}>
                                Log Out
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</nav>