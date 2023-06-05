<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/SignUp.svelte"
  import Events from "./pages/Events.svelte"
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";

  import { setContext } from 'svelte';
  import {geckoService} from "./services/geckoService.js";


  // for localhost testing
  //setContext("GeckoService", new geckoService("http://localhost:3000"));

  // for deployed usage
  setContext("GeckoService", new geckoService("https://gecko-6r6e687i3-testteamforgecko.vercel.app/"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/events": Events
  }
</script>

<Navbar/>
<Router {routes}/>




