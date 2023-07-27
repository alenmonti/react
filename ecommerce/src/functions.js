export function formatPrice(price) {
    return (price * 500).toLocaleString("es", { maximumFractionDigits: 2 });
}

export function textLimit(text, limit){
    if (text.length > limit) {
        return text.slice(0, limit) + "...";
    } else {
        return text;
    }
};