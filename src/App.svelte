<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/SignUp.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import UserSettings from "./pages/UserSettings.svelte";
  import AllEvents from "./pages/events/AllEvents.svelte";
  import EditEvent from "./pages/events/EditEvent.svelte";
  import CreateEvent from "./pages/events/CreateEvent.svelte";
  import EventDetails from "./pages/events/EventDetails.svelte";
  import Router, {push} from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import CreateGroup from "./pages/groups/CreateGroup.svelte";
  import Group_Events from "./pages/Group_Events.svelte";
  import {wrap} from 'svelte-spa-router/wrap'


  import { setContext } from 'svelte';
  import {geckoService} from "./services/geckoService.js";
  import {LoggedIn} from "./services/stores.js";


  // for localhost testing
  // setContext("GeckoService", new geckoService("http://localhost:3000"));

  // for deployed usage
  setContext("GeckoService", new geckoService("https://gecko-bx-tau.vercel.app"));


  let authenticated = false
  LoggedIn.subscribe(value => {
      authenticated = value;
  })


  let routes = {
      "/": Main,
      "/login": Login,
      "/signup": Signup,
      "/main": Main,
        "/dashboard": Dashboard,
      "/userSettings": UserSettings,
      "/events": AllEvents,
      "/events/create": CreateEvent,
      [`/events/:id`]: EditEvent,
      [`/events/:id/details`]: EventDetails,
      "/createGroup": wrap({
          // Use a dynamically-loaded component for this
          asyncComponent: () => import('./pages/groups/CreateGroup.svelte'),
          conditions: [
              async () => {
                  // Return true to continue loading the component, or false otherwise
                  if (authenticated) {
                      return true
                  }
                  else {
                      alert("You must be loggedin to access this page");
                      push("/login")
                      return false
                  }
              }
          ]
      }),
      "/group/:id": Group_Events
  }
</script>

<Navbar/>
<Router {routes}/>




