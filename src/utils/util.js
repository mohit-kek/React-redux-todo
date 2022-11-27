export const getClass = (classes) => {
    classes.filter((item) => item !== '')
    .join(' ')
    .trim();
}