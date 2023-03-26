const allFieldsAreErrorFree = (obj) => {
    const propValues = Object.values(obj);
    return propValues.every(x => x.length === 0);
}

export default allFieldsAreErrorFree;

export const allFieldsAreNotEmpty = (obj) => {
    const propValues = Object.values(obj);
    return propValues.every(x => x.length !== 0)
}

