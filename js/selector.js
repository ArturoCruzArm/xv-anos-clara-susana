// ========================================
// GLOBAL VARIABLES - XV Años Clara Susana
// ========================================
const photos = [
    // Las fotos se agregarán después del evento (28 de marzo de 2026)
];

const STORAGE_KEY = 'xv_anos_clara_susana_photo_selections';
const LIMITES = {
    impresion: 200,
    invitacion: null
};
const COSTO_FOTO_ADICIONAL = 15; // $15 MXN por foto adicional

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

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
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
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
    renderGallery();
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

    // Close modal on outside click
    const photoModal = document.getElementById('photoModal');
    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target.id === 'photoModal') {
                closeModal();
            }
        });
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

    console.log('Selector de fotos inicializado - XV Años Clara Susana');
    console.log(`Total de fotos: ${photos.length}`);
});

// Auto-save on visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// Before unload
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
