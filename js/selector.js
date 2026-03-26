// ========================================
// GLOBAL VARIABLES - XV Años Clara Susana
// ========================================
const photos = [
    "imagenes/DSC_2776.webp","imagenes/DSC_2777.webp","imagenes/DSC_2778.webp","imagenes/DSC_2779.webp","imagenes/DSC_2780.webp",
    "imagenes/DSC_2781.webp","imagenes/DSC_2782.webp","imagenes/DSC_2783.webp","imagenes/DSC_2784.webp","imagenes/DSC_2785.webp",
    "imagenes/DSC_2786.webp","imagenes/DSC_2787.webp","imagenes/DSC_2788.webp","imagenes/DSC_2789.webp","imagenes/DSC_2790.webp",
    "imagenes/DSC_2791.webp","imagenes/DSC_2792.webp","imagenes/DSC_2793.webp","imagenes/DSC_2794.webp","imagenes/DSC_2795.webp",
    "imagenes/DSC_2796.webp","imagenes/DSC_2797.webp","imagenes/DSC_2798.webp","imagenes/DSC_2799.webp","imagenes/DSC_2800.webp",
    "imagenes/DSC_2801.webp","imagenes/DSC_2802.webp","imagenes/DSC_2803.webp","imagenes/DSC_2804.webp","imagenes/DSC_2805.webp",
    "imagenes/DSC_2806.webp","imagenes/DSC_2807.webp","imagenes/DSC_2808.webp","imagenes/DSC_2809.webp","imagenes/DSC_2810.webp",
    "imagenes/DSC_2811.webp","imagenes/DSC_2812.webp","imagenes/DSC_2813.webp","imagenes/DSC_2814.webp","imagenes/DSC_2815.webp",
    "imagenes/DSC_2816.webp","imagenes/DSC_2817.webp","imagenes/DSC_2818.webp","imagenes/DSC_2819.webp","imagenes/DSC_2820.webp",
    "imagenes/DSC_2821.webp","imagenes/DSC_2822.webp","imagenes/DSC_2823.webp","imagenes/DSC_2824.webp","imagenes/DSC_2825.webp",
    "imagenes/DSC_2826.webp","imagenes/DSC_2827.webp","imagenes/DSC_2828.webp","imagenes/DSC_2829.webp","imagenes/DSC_2830.webp",
    "imagenes/DSC_2831.webp","imagenes/DSC_2832.webp","imagenes/DSC_2833.webp","imagenes/DSC_2834.webp","imagenes/DSC_2835.webp",
    "imagenes/DSC_2836.webp","imagenes/DSC_2837.webp","imagenes/DSC_2838.webp","imagenes/DSC_2839.webp","imagenes/DSC_2840.webp",
    "imagenes/DSC_2841.webp","imagenes/DSC_2842.webp","imagenes/DSC_2843.webp","imagenes/DSC_2844.webp","imagenes/DSC_2845.webp",
    "imagenes/DSC_2846.webp","imagenes/DSC_2847.webp","imagenes/DSC_2848.webp","imagenes/DSC_2849.webp","imagenes/DSC_2850.webp",
    "imagenes/DSC_2851.webp","imagenes/DSC_2852.webp","imagenes/DSC_2853.webp","imagenes/DSC_2854.webp","imagenes/DSC_2855.webp",
    "imagenes/DSC_2856.webp","imagenes/DSC_2857.webp","imagenes/DSC_2858.webp","imagenes/DSC_2859.webp","imagenes/DSC_2860.webp",
    "imagenes/DSC_2861.webp","imagenes/DSC_2862.webp","imagenes/DSC_2863.webp","imagenes/DSC_2864.webp","imagenes/DSC_2865.webp",
    "imagenes/DSC_2866.webp","imagenes/DSC_2867.webp","imagenes/DSC_2868.webp","imagenes/DSC_2869.webp","imagenes/DSC_2870.webp",
    "imagenes/DSC_2871.webp","imagenes/DSC_2872.webp","imagenes/DSC_2873.webp","imagenes/DSC_2874.webp","imagenes/DSC_2875.webp",
    "imagenes/DSC_2876.webp","imagenes/DSC_2877.webp","imagenes/DSC_2878.webp","imagenes/DSC_2879.webp","imagenes/DSC_2880.webp",
    "imagenes/DSC_2881.webp","imagenes/DSC_2882.webp","imagenes/DSC_2883.webp","imagenes/DSC_2884.webp","imagenes/DSC_2885.webp",
    "imagenes/DSC_2886.webp","imagenes/DSC_2887.webp","imagenes/DSC_2888.webp","imagenes/DSC_2889.webp","imagenes/DSC_2890.webp",
    "imagenes/DSC_2891.webp","imagenes/DSC_2892.webp","imagenes/DSC_2893.webp","imagenes/DSC_2894.webp","imagenes/DSC_2895.webp",
    "imagenes/DSC_2896.webp","imagenes/DSC_2897.webp","imagenes/DSC_2898.webp","imagenes/DSC_2899.webp","imagenes/DSC_2900.webp",
    "imagenes/DSC_2901.webp","imagenes/DSC_2902.webp","imagenes/DSC_2903.webp","imagenes/DSC_2904.webp",
    "imagenes/IMG_3451.webp","imagenes/IMG_3452.webp","imagenes/IMG_3453.webp","imagenes/IMG_3454.webp","imagenes/IMG_3455.webp",
    "imagenes/IMG_3456.webp","imagenes/IMG_3457.webp","imagenes/IMG_3458.webp","imagenes/IMG_3459.webp","imagenes/IMG_3460.webp",
    "imagenes/IMG_3461.webp","imagenes/IMG_3462.webp","imagenes/IMG_3463.webp","imagenes/IMG_3464.webp","imagenes/IMG_3465.webp",
    "imagenes/IMG_3466.webp","imagenes/IMG_3467.webp","imagenes/IMG_3470.webp","imagenes/IMG_3471.webp","imagenes/IMG_3472.webp",
    "imagenes/IMG_3473.webp"
];

const STORAGE_KEY = 'xv_anos_clara_susana_photo_selections';
const KEY_FILTER   = 'xv_filter';
const KEY_SCROLL   = 'xv_scroll';
const KEY_LAST     = 'xv_last_photo';
const LIMITES = {
    impresion: 200,
    invitacion: null
};
const COSTO_FOTO_ADICIONAL = 15; // $15 MXN por foto adicional

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
let touchStartX = 0;
let touchStartY = 0;
let scrollPositionBeforeModal = 0;
let scrollSaveTimer = null;
let modalOpen = false;

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    const extraCostDisplay = document.getElementById('extraCostDisplay');
    if (extraCostDisplay) {
        if (fotosAdicionales > 0) {
            extraCostDisplay.classList.add('visible');
            document.getElementById('extraCostAmount').textContent = `$${costoExtra} MXN`;
            document.getElementById('extraCostDetail').textContent = `${fotosAdicionales} foto${fotosAdicionales > 1 ? 's' : ''} adicional${fotosAdicionales > 1 ? 'es' : ''} x $${COSTO_FOTO_ADICIONAL}`;
        } else {
            extraCostDisplay.classList.remove('visible');
        }
    }

    const impresionCard = document.querySelector('.stat-card.impresion');

    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#ff9800';
            impresionCard.style.backgroundColor = 'rgba(255, 152, 0, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">Las fotos estarán disponibles después del evento (28 de marzo de 2026)</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    try { localStorage.setItem(KEY_FILTER, filter); } catch (e) {}
}

function updateFilterButtons() {
    const stats = getStats();

    const btnAll = document.getElementById('btnFilterAll');
    const btnImpresion = document.getElementById('btnFilterImpresion');
    const btnInvitacion = document.getElementById('btnFilterInvitacion');
    const btnDescartada = document.getElementById('btnFilterDescartada');
    const btnSinClasificar = document.getElementById('btnFilterSinClasificar');

    if (btnAll) btnAll.textContent = `Todas (${photos.length})`;
    if (btnImpresion) btnImpresion.textContent = `Impresión (${stats.impresion})`;
    if (btnInvitacion) btnInvitacion.textContent = `Invitación (${stats.invitacion})`;
    if (btnDescartada) btnDescartada.textContent = `Descartadas (${stats.descartada})`;
    if (btnSinClasificar) btnSinClasificar.textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    try { localStorage.setItem(KEY_LAST, index); } catch (e) {}
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();

    scrollPositionBeforeModal = window.scrollY;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionBeforeModal}px`;
    document.body.style.width = '100%';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo({ top: scrollPositionBeforeModal, behavior: 'instant' });
    modalOpen = false;
    try { localStorage.setItem(KEY_SCROLL, scrollPositionBeforeModal); } catch (e) {}

    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function updateCard(index) {
    const card = document.querySelector(`.photo-card[data-index="${index}"]`);
    if (!card) return;

    const selection = photoSelections[index] || {};
    const hasAny = selection.impresion || selection.invitacion || selection.descartada;

    // Recalcular clases de color
    card.className = 'photo-card';
    if (selection.descartada) {
        card.classList.add('has-descartada');
    } else {
        const cats = [];
        if (selection.impresion) cats.push('impresion');
        if (selection.invitacion) cats.push('invitacion');
        if (cats.length > 1) card.classList.add('has-multiple');
        else if (cats.length === 1) card.classList.add(`has-${cats[0]}`);
    }

    // Actualizar badges sin tocar el <img>
    const existing = card.querySelector('.photo-badges');
    if (existing) existing.remove();
    if (hasAny) {
        const badges = document.createElement('div');
        badges.className = 'photo-badges';
        if (selection.impresion) badges.innerHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
        if (selection.invitacion) badges.innerHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
        if (selection.descartada) badges.innerHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
        card.appendChild(badges);
    }

    // Aplicar filtro actual
    let show = false;
    switch (currentFilter) {
        case 'all': show = true; break;
        case 'impresion': show = selection.impresion === true; break;
        case 'invitacion': show = selection.invitacion === true; break;
        case 'descartada': show = selection.descartada === true; break;
        case 'sin-clasificar': show = !selection.impresion && !selection.invitacion && !selection.descartada; break;
    }
    card.classList.toggle('hidden', !show);
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateCard(currentPhotoIndex);   // solo actualiza esa tarjeta, sin recargar imágenes
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const stats = getStats();
    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    const exportData = {
        evento: 'XV Años - Clara Susana Palomares Torres',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: stats,
        fotos_incluidas: LIMITES.impresion,
        fotos_adicionales: fotosAdicionales,
        costo_adicional: costoExtra,
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-clara-susana-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    const fotosAdicionales = Math.max(0, stats.impresion - LIMITES.impresion);
    const costoExtra = fotosAdicionales * COSTO_FOTO_ADICIONAL;

    let summary = '🎉 SELECCIÓN DE FOTOS - XV AÑOS CLARA SUSANA PALOMARES TORRES\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   📸 Impresión incluida: ${LIMITES.impresion} fotos\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos disponibles: ${photos.length}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ ADICIONALES' : '⚠️ FALTA'}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    if (fotosAdicionales > 0) {
        summary += `💰 COSTO ADICIONAL:\n`;
        summary += `   Fotos adicionales: ${fotosAdicionales}\n`;
        summary += `   Costo por foto: $${COSTO_FOTO_ADICIONAL} MXN\n`;
        summary += `   TOTAL ADICIONAL: $${costoExtra} MXN\n\n`;
    }

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    // Restaurar filtro y scroll de la sesión anterior
    const savedFilter = localStorage.getItem(KEY_FILTER);
    if (savedFilter) setFilter(savedFilter);
    const savedScroll = parseInt(localStorage.getItem(KEY_SCROLL) || '0');
    if (savedScroll > 0) {
        requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, savedScroll)));
    }

    // Filter buttons
    const btnFilterAll = document.getElementById('btnFilterAll');
    const btnFilterImpresion = document.getElementById('btnFilterImpresion');
    const btnFilterInvitacion = document.getElementById('btnFilterInvitacion');
    const btnFilterDescartada = document.getElementById('btnFilterDescartada');
    const btnFilterSinClasificar = document.getElementById('btnFilterSinClasificar');

    if (btnFilterAll) btnFilterAll.addEventListener('click', () => setFilter('all'));
    if (btnFilterImpresion) btnFilterImpresion.addEventListener('click', () => setFilter('impresion'));
    if (btnFilterInvitacion) btnFilterInvitacion.addEventListener('click', () => setFilter('invitacion'));
    if (btnFilterDescartada) btnFilterDescartada.addEventListener('click', () => setFilter('descartada'));
    if (btnFilterSinClasificar) btnFilterSinClasificar.addEventListener('click', () => setFilter('sin-clasificar'));

    // Action buttons
    const btnExport = document.getElementById('btnExport');
    const btnShare = document.getElementById('btnShare');
    const btnClear = document.getElementById('btnClear');

    if (btnExport) btnExport.addEventListener('click', exportToJSON);
    if (btnShare) btnShare.addEventListener('click', copyToClipboard);
    if (btnClear) btnClear.addEventListener('click', clearAllSelections);

    // Modal controls
    const modalClose = document.querySelector('.modal-close');
    const btnCancelSelection = document.getElementById('btnCancelSelection');
    const btnSaveSelection = document.getElementById('btnSaveSelection');

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (btnCancelSelection) btnCancelSelection.addEventListener('click', closeModal);
    if (btnSaveSelection) btnSaveSelection.addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click + swipe táctil para Android
    const photoModal = document.getElementById('photoModal');
    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target.id === 'photoModal') {
                closeModal();
            }
        });

        // Swipe horizontal para navegar fotos en móvil
        photoModal.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        photoModal.addEventListener('touchend', (e) => {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            const deltaY = e.changedTouches[0].clientY - touchStartY;
            // Solo swipe horizontal con suficiente distancia
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    navigatePhoto('prev');
                } else {
                    navigatePhoto('next');
                }
            }
        }, { passive: true });
    }

    // Navigation buttons
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) btnPrevPhoto.addEventListener('click', () => navigatePhoto('prev'));
    if (btnNextPhoto) btnNextPhoto.addEventListener('click', () => navigatePhoto('next'));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

// Guardar scroll con debounce
window.addEventListener('scroll', () => {
    if (modalOpen) return;
    clearTimeout(scrollSaveTimer);
    scrollSaveTimer = setTimeout(() => {
        try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
    }, 300);
}, { passive: true });

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
        try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
    }
});

window.addEventListener('beforeunload', () => {
    saveSelections();
    try { localStorage.setItem(KEY_SCROLL, window.scrollY); } catch (e) {}
});

// Registrar Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
}
