// Debounce and Throttle.

function debounce(fn, delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId) // Cancel the last call
        timerId = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const search = (query) => {
    console.log(`Searching for`, query)
}

const searchWithDebounce  = debounce(search,1000)

searchWithDebounce('Ha')
searchWithDebounce('Har')
searchWithDebounce('Hard')
searchWithDebounce('Hard ')
searchWithDebounce('Hard J')
searchWithDebounce('Hard JS')