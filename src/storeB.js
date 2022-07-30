import { writable } from 'svelte/store'

function createCount() {
    const { subscribe, set, update } = writable({
        value: 0,
        isLoading: false
    })

    const fetchCount = () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 100))
            }, 5_000);
        });

    const fetch = async () => {
        console.log("fetchB starting...")
        update(({value}) => ({value, isLoading: true}))
        const number = await fetchCount()

        console.log("fetchB done...")
        update(_ => ({value:number, isLoading: false}))
    }
    
    return {
        subscribe,
        increment: () => update(d => ({value:d.value + 1, isLoading: false})),
        decrement: () => update(d => ({value:d.value - 1, isLoading: false})),
        fetch,
        reset: () => set({value: 0, isLoading: false})
    };
}

export const count = createCount();