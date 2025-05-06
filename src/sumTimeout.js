export const sumTimeout = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};