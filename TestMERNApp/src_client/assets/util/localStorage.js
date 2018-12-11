export function getLocalStorage(key) {
    const value = localStorage.getItem(key)?localStorage.getItem(key):'';
    console.log(key, value);
    return value;
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(key, value);
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
    console.log(key);
}
