export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (item) => {
    return {
        type: ADD_FEATURE,
        payload: item
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (item) => {
    return {
        type: REMOVE_FEATURE,
        payload: item
    }
}

export const ADD_TOTAL = 'ADD_TOTAL';
export const addTotal = (item) => {
    return {
        type: ADD_TOTAL,
        payload: item
    }
}