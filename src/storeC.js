import { writable } from 'svelte/store'

function createCount() {
    const { subscribe, set, update } = writable(0)

    const loadingStore = writable(false)

    const fetchCount = () =>
        new Promise((resolve, reject) => {
            loadingStore.set(true)
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 100))
                loadingStore.set(false)
            }, 5_000);
        });

    const fetch = async () => {

        console.log("fetchC starting...")
        const number = await fetchCount()

        console.log("fetchC starting...")
        set(number)
    }
    return {
        subscribe,
        loading: loadingStore,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        fetch,
        reset: () => set(0)
    };
}

export const count = createCount();