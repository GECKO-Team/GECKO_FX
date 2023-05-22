import { writable } from "svelte/store";
export const LoggedIn = writable(false);
export const UserName = writable(null);