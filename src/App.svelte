<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/SignUp.svelte"
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";

  import { setContext } from 'svelte';
  import {geckoService} from "./services/geckoService.js";


  // for localhost testing
  setContext("GeckoService", new geckoService());

  // for deployed usage

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main
  }
</script>

<Navbar/>
<Router {routes}/>




