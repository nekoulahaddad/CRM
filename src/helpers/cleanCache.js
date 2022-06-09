export const cleanCache = () => {
    caches.keys().then((names) => {
        names.forEach(name => {
            caches.delete(name);
        })
    });
}