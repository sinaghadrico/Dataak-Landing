export const commaSeperator = (digit) => {
    if (!digit || digit === 0) return 0;
    return digit?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};