export const categoryColors = {
    decoracao: '#A855F7',
    utilidades: '#3B82F6',
    cozinha: '#F97316',
    organizacao: '#14B8A6',
    banheiro: '#06B6D4',
    quarto: '#EC4899',
    jardim: '#22C55E',
    iluminacao: '#FACC15',
    presentes: '#EF4444',
    outros: '#6B7280'
}

function getCategorySlug(category) {
    return category
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

export function getCategoryColor(category) {
    return categoryColors[getCategorySlug(category)] || '#6B7280';
}