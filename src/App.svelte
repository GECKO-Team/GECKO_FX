<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/SignUp.svelte";
  import UserSettings from "./pages/UserSettings.svelte";
  import AllEvents from "./pages/events/AllEvents.svelte";
  import EditEvent from "./pages/events/EditEvent.svelte";
  import CreateEvent from "./pages/events/CreateEvent.svelte";
  import EventDetails from "./pages/events/EventDetails.svelte";
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";

  import { setContext } from 'svelte';
  import {geckoService} from "./services/geckoService.js";


  // for localhost testing
  //setContext("GeckoService", new geckoService("http://localhost:3000"));

  // for deployed usage
  setContext("GeckoService", new geckoService("https://gecko-wspcu76nf-gecko-oth.vercel.app"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/userSettings": UserSettings,
    "/events": AllEvents,
    "/events/create": CreateEvent,
    [`/events/:id`]: EditEvent,
    [`/events/:id/details`]: EventDetails
  }
</script>

<Navbar/>
<Router {routes}/>




