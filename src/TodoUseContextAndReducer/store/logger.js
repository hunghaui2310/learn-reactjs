function logger (reducer) {
    return (prev, action) => {
        console.group(action.type);
        console.log('Prev state = ', prev);

        const nextState = reducer(prev, action);

        console.log('Prev state = ', nextState);
        console.groupEnd();
        return nextState;
    }
}

export { logger }