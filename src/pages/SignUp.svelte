<script>

    import {getContext} from "svelte";
    import {push} from "svelte-spa-router";

    const geckoService = getContext("GeckoService");

    let email = "";
    let password = "";
    let passwordRepeat = "";
    let username = "";
    $: errorMessage = "";


    async function signup() {

        // check if password and passwordrepeat are the same
        if (password !== passwordRepeat) {
            console.log("Passwords are not equal ");
            return;
        }

        try {
            let res = await geckoService.signup(username, email, password);
            console.log(res);
            if (res.status === "success") {
                push("/login");
            } else {
                errorMessage = res.message;
            }
            // push("/login");
        } catch (e) {
            console.log(e);
        }
    }


</script>

<div class="hero-body">
    <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
            <h3 class="title has-text-black">Sign Up</h3>
            <hr class="login-hr">
            <p class="subtitle has-text-grey">Please sign up to proceed.</p>
            <div class="box">
                <form on:submit|preventDefault={signup}>
                    <div class="field">
                        <div class="control">
                            <input bind:value={email} class="input is-large" type="email" placeholder="Your Email" autofocus="">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input bind:value={username} class="input is-large" type="text" placeholder="Your Username" autofocus="">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input bind:value={password} type="password" class="input is-large" placeholder="Your Password">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <input bind:value={passwordRepeat} type="password" class="input is-large" placeholder="Repeat Password">
                        </div>

                        <button class="button is-block is-info is-large is-fullwidth">Sign up <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
            <p class="has-text-grey">
                <a href="/#/login">Login</a>
            </p>
        </div>
        <!-- place for errormessages -->
        {#if errorMessage !== ""}
        <div class="card">
                    <p class="has-text-danger">{errorMessage}</p>
        </div>
        {/if}
    </div>
</div>