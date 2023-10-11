import { writable } from "svelte/store";

export const region = writable('Africa');

export let theme = writable('dark');

if (window.localStorage.getItem('theme')) {
    theme.set(window.localStorage.getItem('theme'))
} 

theme.subscribe(function themeSubscription(value) {
    
    window.localStorage.setItem('theme', value);
    
    if (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

});

