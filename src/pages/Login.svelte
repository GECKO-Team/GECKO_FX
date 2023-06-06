<script>
    import {push} from "svelte-spa-router";
    import {getContext} from "svelte";

    const geckoService = getContext("GeckoService");

    let password = "";
    let email = "";

    async function login() {
        // TODO capture username
        let success = await geckoService.login(email, password)
        if (success) {
            await push("/")
        } else {
            email = "";
            password = "";
        }
    }


</script>

<div class="hero-body">
    <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
            <h3 class="title has-text-black">Login</h3>
            <hr class="login-hr">
            <p class="subtitle has-text-grey">Please login to proceed.</p>
            <div class="box">
                <form on:submit|preventDefault={login}>
                    <div class="field">
                        <div class="control">
                            <input bind:value={email} class="input is-large" type="email" placeholder="Your Email" autofocus="">
                        </div>
                    </div>



                    <div class="field">
                        <div class="control">
                            <input bind:value={password} class="input is-large" type="password" placeholder="Your Password">
                        </div>
                    </div>
                    <div class="field">
                        <label class="checkbox">
                            <input type="checkbox">
                            Remember me
                        </label>
                    </div>
                    <button class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                </form>
            </div>
            <p class="has-text-grey">
                <a href="/#/signup">Sign Up</a>
            </p>
        </div>
    </div>
</div>