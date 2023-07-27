export function formatPrice(price) {
    return (price * 500).toLocaleString("es", { maximumFractionDigits: 2 });
}