const locale = (() => {
  const lang = document.documentElement.lang.toLowerCase();

  if (lang.startsWith("fr")) {
    return "fr";
  }

  if (lang.startsWith("de")) {
    return "de";
  }

  return "en";
})();

const siteRoot = document.documentElement.dataset.siteRoot || ".";
const gallery = (path) => `${siteRoot}/assets/full-galleries/${path}`;

const imageMeta = {
  [gallery("alizee/01-alizee-vert-de-gris-face-1.jpg")]: { width: 706, height: 1564 },
  [gallery("alizee/02-alizee-vert-de-gris-dos-1.jpg")]: { width: 836, height: 1800 },
  [gallery("alizee/03-alizee-tete-vert-de-gris.jpg")]: { width: 1200, height: 1045 },
  [gallery("alizee/04-alisee-vert-de-gris-face-3.jpg")]: { width: 704, height: 1458 },
  [gallery("alizee/05-alisee-vert-de-gris-dos-2.jpg")]: { width: 606, height: 1505 },
  [gallery("alizee/06-alizee-pathe-2.jpg")]: { width: 1200, height: 800 },
  [gallery("andalousia/01-andalousia-full-face-hd.jpg")]: { width: 748, height: 1800 },
  [gallery("andalousia/02-andalousia-full-3-4-dos-hd.jpg")]: { width: 748, height: 1800 },
  [gallery("andalousia/03-andalousia-buste-face-hd.jpg")]: { width: 1200, height: 1741 },
  [gallery("andalousia/04-andalousia-buste-3-4-hd.jpg")]: { width: 1200, height: 1696 },
  [gallery("andalousia/05-andalousia-buste-dos-hd.jpg")]: { width: 1200, height: 1601 },
  [gallery("andrea/01-andrea-1-face-hd-fond-blanc-web.jpg")]: { width: 644, height: 1800 },
  [gallery("andrea/02-andrea-10-360.jpg")]: { width: 892, height: 1800 },
  [gallery("andrea/03-andrea-8-360.jpg")]: { width: 892, height: 1800 },
  [gallery("andrea/04-andrea-detail-tete-face-fond-blanc-web.jpg")]: { width: 1200, height: 1653 },
  [gallery("andrea/05-andrea-detail-pieds-web.jpg")]: { width: 1200, height: 1792 },
  [gallery("ceremonial/01-hiza-platre-h-edited.jpg")]: { width: 624, height: 824 },
  [gallery("ceremonial/02-hiza-02-edited.jpg")]: { width: 1200, height: 1600 },
  [gallery("ceremonial/03-gangaku-pierre-reconstitue-h-edited.jpg")]: { width: 1200, height: 1705 },
  [gallery("ceremonial/04-kankudai-1-edited.jpg")]: { width: 1200, height: 1729 },
  [gallery("ceremonial/05-kankudai-3-edited.jpg")]: { width: 1200, height: 1767 },
  [gallery("ceremonial/06-pankido-world-championship-coupe-bronze-h-edited.jpg")]: { width: 1126, height: 1799 },
  [gallery("ceremonial/07-mmawards-trophee-bronze-h-edited.jpg")]: { width: 640, height: 960 },
  [gallery("ceremonial/08-jerome-lebanner-trophee-au-festival-des-arts-mar.jpg")]: { width: 941, height: 1800 },
  [gallery("ceremonial/09-contenders-coupe-bronze-h-edited.jpg")]: { width: 909, height: 1800 },
  [gallery("ceremonial/10-pancrase-fight-association-boucle-de-trophee-bro.jpg")]: { width: 1200, height: 1350 },
  [gallery("ceremonial/11-x-trem-gladiators-bronze-bois-2005-edited.jpg")]: { width: 602, height: 662 },
  [gallery("ceremonial/12-100-pourcent-fight-trophee-bronze-cuir-2013-edit.jpg")]: { width: 960, height: 420 },
  [gallery("ceremonial/13-vivacite-international-championship-ceinture-bro.jpg")]: { width: 960, height: 435 },
  [gallery("ceremonial/14-muay-thay-world-championship-maroc-bronze-cuir-2.jpg")]: { width: 960, height: 603 },
  [gallery("ceremonial/15-pierre-moua-edited.jpg")]: { width: 464, height: 612 },
  [gallery("ceremonial/16-ernesto-hoost-2015-edited.jpg")]: { width: 1200, height: 1800 },
  [gallery("ceremonial/17-contenders-2011-championnat-mma-paris-edited.jpg")]: { width: 1000, height: 667 },
  [gallery("jag-katana/01-jag-katana-3-4-hd.jpg")]: { width: 1200, height: 1640 },
  [gallery("jag-katana/02-jag-katana-profil-hd.jpg")]: { width: 1200, height: 1640 },
  [gallery("jag-katana/03-jag-katana-tete.jpg")]: { width: 1200, height: 1355 },
  [gallery("jag-katana/04-jag-katana-3-4-tete.jpg")]: { width: 1200, height: 1725 },
  [gallery("jag-katana/05-jag-katana-queue.jpg")]: { width: 999, height: 1800 },
  [gallery("phoenix/01-phoenix-turn-1.jpg")]: { width: 1200, height: 1604 },
  [gallery("phoenix/02-phoenix-turn-2.jpg")]: { width: 1200, height: 1604 },
  [gallery("phoenix/03-phoenix-turn-5.jpg")]: { width: 1200, height: 1604 },
  [gallery("phoenix/04-phoenix-turn-3.jpg")]: { width: 1200, height: 1604 },
  [gallery("phoenix/05-phoenix-buste-hd.jpg")]: { width: 1200, height: 1600 },
  [gallery("phoenix/06-phoenix-queue.jpg")]: { width: 1200, height: 1524 },
  [gallery("phoenix/07-phoenix-pieds.jpg")]: { width: 1200, height: 1600 },
};

const imageLabels = {
  andrea: [
    { en: "Front elevation", fr: "Vue de face", de: "Frontalansicht" },
    { en: "Three-quarter rotation", fr: "Rotation trois-quarts", de: "Dreiviertelansicht" },
    { en: "Rear three-quarter rotation", fr: "Rotation trois-quarts dos", de: "Dreiviertelansicht von hinten" },
    { en: "Head detail", fr: "Detail de la tete", de: "Kopfdetail" },
    { en: "Base detail", fr: "Detail du socle", de: "Sockeldetail" },
  ],
  andalousia: [
    { en: "Front elevation", fr: "Vue de face", de: "Frontalansicht" },
    { en: "Rear three-quarter view", fr: "Vue trois-quarts dos", de: "Dreiviertelansicht von hinten" },
    { en: "Bust front", fr: "Buste face", de: "Büste frontal" },
    { en: "Bust three-quarter", fr: "Buste trois-quarts", de: "Büste Dreiviertel" },
    { en: "Bust rear", fr: "Buste dos", de: "Büste rückseitig" },
  ],
  phoenix: [
    { en: "Rotation I", fr: "Rotation I", de: "Rotation I" },
    { en: "Rotation II", fr: "Rotation II", de: "Rotation II" },
    { en: "Rotation III", fr: "Rotation III", de: "Rotation III" },
    { en: "Rotation IV", fr: "Rotation IV", de: "Rotation IV" },
    { en: "Bust detail", fr: "Detail du buste", de: "Büstendetail" },
    { en: "Rear extension", fr: "Extension arriere", de: "Rückwärtige Ausdehnung" },
    { en: "Base detail", fr: "Detail du socle", de: "Sockeldetail" },
  ],
  jagKatana: [
    { en: "Three-quarter elevation", fr: "Vue trois-quarts", de: "Dreiviertelansicht" },
    { en: "Profile view", fr: "Vue de profil", de: "Profilansicht" },
    { en: "Head detail", fr: "Detail de la tete", de: "Kopfdetail" },
    { en: "Head three-quarter", fr: "Tete trois-quarts", de: "Kopf Dreiviertel" },
    { en: "Rear extension", fr: "Extension arriere", de: "Rückwärtige Ausdehnung" },
  ],
  alizee: [
    { en: "Front view", fr: "Vue de face", de: "Frontalansicht" },
    { en: "Rear view", fr: "Vue de dos", de: "Rückansicht" },
    { en: "Head detail", fr: "Detail de la tete", de: "Kopfdetail" },
    { en: "Front variation", fr: "Variation de face", de: "Frontalvariante" },
    { en: "Rear variation", fr: "Variation de dos", de: "Rückvariante" },
    { en: "Installed view", fr: "Vue en situation", de: "Ansicht im Raum" },
  ],
  ceremonial: [
    { en: "Hiza 02", fr: "Hiza 02", de: "Hiza 02" },
    { en: "Hiza, plaster", fr: "Hiza, plâtre", de: "Hiza, Gips" },
    { en: "Gangaku", fr: "Gangaku", de: "Gangaku" },
    { en: "Kankudai 1", fr: "Kankudai 1", de: "Kankudai 1" },
    { en: "Kankudai 3", fr: "Kankudai 3", de: "Kankudai 3" },
    { en: "Pankido world championship coupe", fr: "Coupe Pankido World Championship", de: "Pokal Pankido World Championship" },
    { en: "MMA Awards trophy", fr: "Trophee MMA Awards", de: "MMA-Awards-Trophäe" },
    { en: "Jerome Le Banner trophy", fr: "Trophee Jerome Le Banner", de: "Jérôme-Le-Banner-Trophäe" },
    { en: "Contenders coupe", fr: "Coupe Contenders", de: "Contenders-Pokal" },
    { en: "Pancrase Fight Association trophy", fr: "Trophee Pancrase Fight Association", de: "Pancrase-Fight-Association-Trophäe" },
    { en: "X-Trem Gladiators", fr: "X-Trem Gladiators", de: "X-Trem Gladiators" },
    { en: "100 Pourcent Fight", fr: "100 Pourcent Fight", de: "100 Pourcent Fight" },
    { en: "Vivacite international championship", fr: "Championnat international Vivacite", de: "Vivacite International Championship" },
    { en: "Muay Thai world championship Maroc", fr: "Muay Thai World Championship Maroc", de: "Muay-Thai-Weltmeisterschaft Marokko" },
    { en: "Pierre Moua", fr: "Pierre Moua", de: "Pierre Moua" },
    { en: "Ernesto Hoost", fr: "Ernesto Hoost", de: "Ernesto Hoost" },
    { en: "Contenders 2011", fr: "Contenders 2011", de: "Contenders 2011" },
  ],
};

const baseSculptures = [
  {
    id: "andrea",
    images: [
      gallery("andrea/01-andrea-1-face-hd-fond-blanc-web.jpg"),
      gallery("andrea/02-andrea-10-360.jpg"),
      gallery("andrea/03-andrea-8-360.jpg"),
      gallery("andrea/04-andrea-detail-tete-face-fond-blanc-web.jpg"),
      gallery("andrea/05-andrea-detail-pieds-web.jpg"),
    ],
    cover: gallery("andrea/01-andrea-1-face-hd-fond-blanc-web.jpg"),
  },
  {
    id: "andalousia",
    images: [
      gallery("andalousia/01-andalousia-full-face-hd.jpg"),
      gallery("andalousia/02-andalousia-full-3-4-dos-hd.jpg"),
      gallery("andalousia/03-andalousia-buste-face-hd.jpg"),
      gallery("andalousia/04-andalousia-buste-3-4-hd.jpg"),
      gallery("andalousia/05-andalousia-buste-dos-hd.jpg"),
    ],
    cover: gallery("andalousia/01-andalousia-full-face-hd.jpg"),
  },
  {
    id: "phoenix",
    images: [
      gallery("phoenix/01-phoenix-turn-1.jpg"),
      gallery("phoenix/02-phoenix-turn-2.jpg"),
      gallery("phoenix/03-phoenix-turn-5.jpg"),
      gallery("phoenix/04-phoenix-turn-3.jpg"),
      gallery("phoenix/05-phoenix-buste-hd.jpg"),
      gallery("phoenix/06-phoenix-queue.jpg"),
      gallery("phoenix/07-phoenix-pieds.jpg"),
    ],
    cover: gallery("phoenix/01-phoenix-turn-1.jpg"),
  },
  {
    id: "jag-katana",
    images: [
      gallery("jag-katana/01-jag-katana-3-4-hd.jpg"),
      gallery("jag-katana/02-jag-katana-profil-hd.jpg"),
      gallery("jag-katana/03-jag-katana-tete.jpg"),
      gallery("jag-katana/04-jag-katana-3-4-tete.jpg"),
      gallery("jag-katana/05-jag-katana-queue.jpg"),
    ],
    cover: gallery("jag-katana/01-jag-katana-3-4-hd.jpg"),
  },
  {
    id: "alizee",
    images: [
      gallery("alizee/01-alizee-vert-de-gris-face-1.jpg"),
      gallery("alizee/02-alizee-vert-de-gris-dos-1.jpg"),
      gallery("alizee/03-alizee-tete-vert-de-gris.jpg"),
      gallery("alizee/04-alisee-vert-de-gris-face-3.jpg"),
      gallery("alizee/05-alisee-vert-de-gris-dos-2.jpg"),
      gallery("alizee/06-alizee-pathe-2.jpg"),
    ],
    cover: gallery("alizee/01-alizee-vert-de-gris-face-1.jpg"),
  },
  {
    id: "ceremonial",
    images: [
      gallery("ceremonial/02-hiza-02-edited.jpg"),
      gallery("ceremonial/01-hiza-platre-h-edited.jpg"),
      gallery("ceremonial/03-gangaku-pierre-reconstitue-h-edited.jpg"),
      gallery("ceremonial/04-kankudai-1-edited.jpg"),
      gallery("ceremonial/05-kankudai-3-edited.jpg"),
      gallery("ceremonial/06-pankido-world-championship-coupe-bronze-h-edited.jpg"),
      gallery("ceremonial/07-mmawards-trophee-bronze-h-edited.jpg"),
      gallery("ceremonial/08-jerome-lebanner-trophee-au-festival-des-arts-mar.jpg"),
      gallery("ceremonial/09-contenders-coupe-bronze-h-edited.jpg"),
      gallery("ceremonial/10-pancrase-fight-association-boucle-de-trophee-bro.jpg"),
      gallery("ceremonial/11-x-trem-gladiators-bronze-bois-2005-edited.jpg"),
      gallery("ceremonial/12-100-pourcent-fight-trophee-bronze-cuir-2013-edit.jpg"),
      gallery("ceremonial/13-vivacite-international-championship-ceinture-bro.jpg"),
      gallery("ceremonial/14-muay-thay-world-championship-maroc-bronze-cuir-2.jpg"),
      gallery("ceremonial/15-pierre-moua-edited.jpg"),
      gallery("ceremonial/16-ernesto-hoost-2015-edited.jpg"),
      gallery("ceremonial/17-contenders-2011-championnat-mma-paris-edited.jpg"),
    ],
    cover: gallery("ceremonial/07-mmawards-trophee-bronze-h-edited.jpg"),
  },
];

const localizedContent = {
  en: {
    ui: {
      openChapter: "View",
      viewerNote: "Gallery",
      loadingGallery: "Loading",
      openFullscreen: "Fullscreen",
      close: "Close",
      prev: "Prev",
      next: "Next",
      openGalleryAria: (title) => `Open ${title} gallery fullscreen`,
      openImageAria: (label) => `Show ${label}`,
      openPreviewAria: (title) => `${title} preview`,
      contactSheetAria: (title) => `${title} contact sheet`,
      lightboxThumbAria: (label) => `Show ${label}`,
    },
    sculptures: {
      andrea: {
        title: "Andrea",
        indexMeta: "Bronze",
        summary: "Vertical bronze. Front, head, base.",
        tags: ["Bronze", "5 views"],
      },
      andalousia: {
        title: "Andalousia",
        indexMeta: "Bronze",
        summary: "Draped bronze. Tension and profile.",
        tags: ["Bronze", "5 views"],
      },
      phoenix: {
        title: "Phoenix",
        indexMeta: "Bronze",
        summary: "Rising bronze. Twist and lift.",
        tags: ["Bronze", "7 views"],
      },
      "jag-katana": {
        title: "Jag-Katana",
        indexMeta: "Bronze",
        summary: "Ceremonial bronze. Silhouette and stance.",
        tags: ["Bronze", "5 views"],
      },
      alizee: {
        title: "Alizee",
        indexMeta: "Bronze / 2021",
        summary: "Airy bronze. Motion and balance.",
        tags: ["Bronze / 2021", "6 views"],
      },
      ceremonial: {
        title: "Objects",
        indexMeta: "Commissioned objects",
        summary: "Trophies and commissioned pieces.",
        tags: ["Commissioned objects", "Archive"],
      },
    },
  },
  fr: {
    ui: {
      openChapter: "Voir",
      viewerNote: "Galerie",
      loadingGallery: "Chargement",
      openFullscreen: "Plein ecran",
      close: "Fermer",
      prev: "Prec.",
      next: "Suiv.",
      openGalleryAria: (title) => `Ouvrir la galerie ${title} en plein ecran`,
      openImageAria: (label) => `Afficher ${label}`,
      openPreviewAria: (title) => `Apercu de ${title}`,
      contactSheetAria: (title) => `Planche contact de ${title}`,
      lightboxThumbAria: (label) => `Afficher ${label}`,
    },
    sculptures: {
      andrea: {
        title: "Andrea",
        indexMeta: "Bronze",
        summary: "Bronze vertical. Face, tete, socle.",
        tags: ["Bronze", "5 vues"],
      },
      andalousia: {
        title: "Andalousia",
        indexMeta: "Bronze",
        summary: "Bronze drape. Tension et profil.",
        tags: ["Bronze", "5 vues"],
      },
      phoenix: {
        title: "Phoenix",
        indexMeta: "Bronze",
        summary: "Bronze ascendant. Torsion et elan.",
        tags: ["Bronze", "7 vues"],
      },
      "jag-katana": {
        title: "Jag-Katana",
        indexMeta: "Bronze",
        summary: "Bronze ceremoniel. Silhouette et posture.",
        tags: ["Bronze", "5 vues"],
      },
      alizee: {
        title: "Alizee",
        indexMeta: "Bronze / 2021",
        summary: "Bronze aerien. Mouvement et equilibre.",
        tags: ["Bronze / 2021", "6 vues"],
      },
      ceremonial: {
        title: "Objets",
        indexMeta: "Objets commandes",
        summary: "Trophees et pieces de commande.",
        tags: ["Objets commandes", "Archive"],
      },
    },
  },
  de: {
    ui: {
      openChapter: "Ansehen",
      viewerNote: "Galerie",
      loadingGallery: "Laden",
      openFullscreen: "Vollbild",
      close: "Schliessen",
      prev: "Zuruck",
      next: "Weiter",
      openGalleryAria: (title) => `Galerie ${title} im Vollbild offnen`,
      openImageAria: (label) => `${label} anzeigen`,
      openPreviewAria: (title) => `Vorschau von ${title}`,
      contactSheetAria: (title) => `Kontaktbogen von ${title}`,
      lightboxThumbAria: (label) => `${label} anzeigen`,
    },
    sculptures: {
      andrea: {
        title: "Andrea",
        indexMeta: "Bronze",
        summary: "Vertikale Bronze. Front, Kopf, Sockel.",
        tags: ["Bronze", "5 Ansichten"],
      },
      andalousia: {
        title: "Andalousia",
        indexMeta: "Bronze",
        summary: "Drapierte Bronze. Spannung und Profil.",
        tags: ["Bronze", "5 Ansichten"],
      },
      phoenix: {
        title: "Phoenix",
        indexMeta: "Bronze",
        summary: "Aufsteigende Bronze. Drehung und Auftrieb.",
        tags: ["Bronze", "7 Ansichten"],
      },
      "jag-katana": {
        title: "Jag-Katana",
        indexMeta: "Bronze",
        summary: "Zeremonielle Bronze. Silhouette und Haltung.",
        tags: ["Bronze", "5 Ansichten"],
      },
      alizee: {
        title: "Alizee",
        indexMeta: "Bronze / 2021",
        summary: "Luftige Bronze. Bewegung und Balance.",
        tags: ["Bronze / 2021", "6 Ansichten"],
      },
      ceremonial: {
        title: "Objekte",
        indexMeta: "Auftragsobjekte",
        summary: "Trophäen und Auftragsarbeiten.",
        tags: ["Auftragsobjekte", "Archiv"],
      },
    },
  },
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const content = localizedContent[locale] || localizedContent.en;
const ui = content.ui;

const sculptureData = baseSculptures.map((item) => {
  const localized = content.sculptures[item.id];
  const labels =
    item.id === "jag-katana"
      ? imageLabels.jagKatana
      : imageLabels[item.id];
  const coverMeta = imageMeta[item.cover] || imageMeta[item.images[0]] || {};

  return {
    id: item.id,
    title: localized.title,
    indexMeta: localized.indexMeta,
    cover: {
      src: item.cover,
      ...coverMeta,
    },
    summary: localized.summary,
    tags: localized.tags,
    images: item.images.map((src, index) => ({
      src,
      label: labels[index][locale] || labels[index].en,
      ...(imageMeta[src] || {}),
    })),
  };
});

const worksIndex = document.querySelector("[data-works-index]");
const sculptureSections = document.querySelector("[data-sculpture-sections]");
const viewerState = new WeakMap();

const getImageDimensions = (image) => ({
  width: image.width || 1200,
  height: image.height || 1600,
});

const renderWorksIndex = () => {
  if (!worksIndex) {
    return;
  }

  worksIndex.innerHTML = sculptureData
    .map(
      (item) => `
        <a class="work-card" href="#${item.id}">
          <div class="work-card-media">
            <img
              src="${item.cover.src}"
              alt=""
              width="${item.cover.width || 1200}"
              height="${item.cover.height || 1600}"
              loading="lazy"
              decoding="async"
              data-parallax-media
              data-parallax-speed="16"
            >
          </div>
          <div class="work-card-body">
            <div class="work-card-copy">
              <span class="work-card-meta">${escapeHtml(item.indexMeta)}</span>
              <strong>${escapeHtml(item.title)}</strong>
            </div>
            <span class="work-card-link">${escapeHtml(ui.openChapter)}</span>
          </div>
        </a>
      `
    )
    .join("");
};

const renderThumbButtons = (images, activeIndex = 0) =>
  images
    .map((image, imageIndex) => {
      const { width, height } = getImageDimensions(image);

      return `
        <button
          class="thumb-button ${imageIndex === activeIndex ? "is-active" : ""}"
          type="button"
          data-thumb-index="${imageIndex}"
          aria-label="${escapeHtml(ui.openImageAria(image.label))}"
        >
          <img
            src="${image.src}"
            alt=""
            width="${width}"
            height="${height}"
            loading="lazy"
            decoding="async"
          >
          <span class="thumb-meta">${String(imageIndex + 1).padStart(2, "0")}</span>
        </button>
      `;
    })
    .join("");

const renderViewerSection = (item, index) => `
  <section class="chapter ${index % 2 ? "chapter--alt" : ""}" id="${item.id}">
    <div class="site-shell chapter-layout">
      <div class="chapter-copy" data-reveal>
        <p class="section-tag">${String(index + 1).padStart(2, "0")} / ${escapeHtml(item.title)}</p>
        <h2>${escapeHtml(item.title)}</h2>
        <p class="chapter-summary">${escapeHtml(item.summary)}</p>
        <div class="chapter-meta">
          ${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>

      <div class="viewer" data-reveal data-gallery-id="${item.id}">
        <button class="viewer-stage" type="button" data-open-lightbox aria-label="${escapeHtml(ui.openGalleryAria(item.title))}">
          <div class="viewer-stage-inner">
            <img
              src="${item.images[0].src}"
              alt="${escapeHtml(item.images[0].label)}"
              width="${item.images[0].width || 1200}"
              height="${item.images[0].height || 1600}"
              loading="lazy"
              decoding="async"
              data-viewer-main
              data-parallax-media
              data-parallax-speed="20"
            >
          </div>
        </button>

        <div class="viewer-toolbar">
          <div class="viewer-caption-wrap">
            <span class="viewer-count" data-viewer-count>01 / ${String(item.images.length).padStart(2, "0")}</span>
            <span class="viewer-caption" data-viewer-caption>${escapeHtml(item.images[0].label)}</span>
          </div>
          <div class="viewer-actions">
            <button class="viewer-open" type="button" data-open-lightbox>${escapeHtml(ui.openFullscreen)}</button>
          </div>
        </div>

        <div class="thumb-strip is-pending" data-thumb-strip aria-label="${escapeHtml(ui.contactSheetAria(item.title))}">
          <span class="thumb-strip-status">${escapeHtml(ui.loadingGallery)}</span>
        </div>
      </div>
    </div>
  </section>
`;

const renderSections = () => {
  if (!sculptureSections) {
    return;
  }

  sculptureSections.innerHTML = sculptureData
    .map((item, index) => renderViewerSection(item, index))
    .join("");
};

const galleryLookup = new Map(sculptureData.map((item) => [item.id, item.images]));

const initializeViewers = () => {
  const hydrateViewer = (viewer) => {
    if (viewer.dataset.galleryReady === "true") {
      return viewerState.get(viewer)?.thumbs || [];
    }

    const galleryId = viewer.dataset.galleryId;
    const images = galleryLookup.get(galleryId) || [];
    const thumbStrip = viewer.querySelector("[data-thumb-strip]");
    const currentIndex = Number(viewer.dataset.currentIndex || "0");

    if (!thumbStrip || !images.length) {
      return [];
    }

    thumbStrip.innerHTML = renderThumbButtons(images, currentIndex);
    thumbStrip.classList.remove("is-pending");

    const thumbs = [...thumbStrip.querySelectorAll("[data-thumb-index]")];
    const state = viewerState.get(viewer) || {};

    state.thumbs = thumbs;
    viewerState.set(viewer, state);
    viewer.dataset.galleryReady = "true";

    return thumbs;
  };

  const viewerObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            hydrateViewer(entry.target);
            viewerObserver.unobserve(entry.target);
          });
        },
        {
          rootMargin: "320px 0px",
          threshold: 0.05,
        }
      )
    : null;

  document.querySelectorAll(".viewer[data-gallery-id]").forEach((viewer) => {
    const galleryId = viewer.dataset.galleryId;
    const images = galleryLookup.get(galleryId) || [];
    const main = viewer.querySelector("[data-viewer-main]");
    const count = viewer.querySelector("[data-viewer-count]");
    const caption = viewer.querySelector("[data-viewer-caption]");

    const updateViewer = (index) => {
      const image = images[index];
      const state = viewerState.get(viewer) || { thumbs: [] };
      const { width, height } = getImageDimensions(image || {});

      if (!image) {
        return;
      }

      const applyImage = () => {
        main.src = image.src;
        main.alt = image.label;
        main.width = width;
        main.height = height;
        requestAnimationFrame(() => {
          main.classList.remove("is-switching");
        });
      };

      viewer.dataset.currentIndex = String(index);
      count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
      caption.textContent = image.label;
      state.thumbs.forEach((thumb, thumbIndex) => {
        thumb.classList.toggle("is-active", thumbIndex === index);
      });

      if (main.getAttribute("src") === image.src) {
        applyImage();
        return;
      }

      clearTimeout(viewer.switchTimer);
      main.classList.add("is-switching");
      viewer.switchTimer = window.setTimeout(applyImage, 110);
    };

    viewer.dataset.currentIndex = "0";
    viewer.dataset.galleryReady = "false";
    viewerState.set(viewer, { thumbs: [] });
    updateViewer(0);

    viewer.addEventListener("click", (event) => {
      const thumb = event.target.closest("[data-thumb-index]");

      if (!thumb || !viewer.contains(thumb)) {
        return;
      }

      hydrateViewer(viewer);
      updateViewer(Number(thumb.dataset.thumbIndex));
    });

    viewer.querySelectorAll("[data-open-lightbox]").forEach((button) => {
      button.addEventListener("click", () => {
        openLightbox(galleryId, Number(viewer.dataset.currentIndex || "0"));
      });
    });

    if (viewerObserver) {
      viewerObserver.observe(viewer);
    } else {
      hydrateViewer(viewer);
    }
  });
};

const initializeSurfaceLight = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (reduceMotion || !finePointer) {
    return;
  }

  document.querySelectorAll(".portrait-card, .viewer-stage, .work-card-media").forEach((surface) => {
    let frame = 0;

    const resetLight = () => {
      surface.style.setProperty("--light-x", "50%");
      surface.style.setProperty("--light-y", "18%");
      surface.style.setProperty("--light-size", "26%");
      surface.style.setProperty("--light-opacity", "0.42");
      surface.style.setProperty("--light-intensity", "0.14");
      surface.style.setProperty("--light-warmth", "0.1");
      surface.style.setProperty("--light-angle", "118deg");
    };

    resetLight();

    surface.addEventListener("pointermove", (event) => {
      const rect = surface.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const clampedX = Math.min(88, Math.max(12, x));
      const clampedY = Math.min(84, Math.max(10, y));
      const offsetX = Math.abs(clampedX - 50) / 50;
      const offsetY = Math.abs(clampedY - 38) / 46;
      const focus = Math.max(0, 1 - (offsetX + offsetY) * 0.5);

      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        surface.style.setProperty("--light-x", `${clampedX}%`);
        surface.style.setProperty("--light-y", `${clampedY}%`);
        surface.style.setProperty("--light-size", `${28 + focus * 12}%`);
        surface.style.setProperty("--light-opacity", `${0.42 + focus * 0.2}`);
        surface.style.setProperty("--light-intensity", `${0.12 + focus * 0.2}`);
        surface.style.setProperty("--light-warmth", `${0.08 + focus * 0.18}`);
        surface.style.setProperty("--light-angle", `${108 + (clampedX - 50) * 0.45}deg`);
      });
    });

    surface.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      resetLight();
    });
  });
};

const initializeTiltCards = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (reduceMotion || !finePointer) {
    return;
  }

  document.querySelectorAll(".work-card").forEach((card) => {
    let frame = 0;

    const resetTilt = () => {
      card.style.setProperty("--card-tilt-x", "0deg");
      card.style.setProperty("--card-tilt-y", "0deg");
      card.style.setProperty("--card-lift", "0px");
      card.style.setProperty("--card-depth", "0px");
      card.style.setProperty("--card-shadow-x", "0px");
      card.style.setProperty("--card-shadow-y", "0px");
      card.style.setProperty("--card-shadow-blur", "0px");
    };

    resetTilt();

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 12;
      const rotateX = (0.5 - py) * 10;
      const depth = 14 + (1 - py) * 8;
      const shadowX = (px - 0.5) * 22;
      const shadowY = py * 14;
      const shadowBlur = 18 + (1 - py) * 10;

      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        card.style.setProperty("--card-tilt-x", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--card-tilt-y", `${rotateY.toFixed(2)}deg`);
        card.style.setProperty("--card-lift", "-8px");
        card.style.setProperty("--card-depth", `${depth.toFixed(1)}px`);
        card.style.setProperty("--card-shadow-x", `${shadowX.toFixed(1)}px`);
        card.style.setProperty("--card-shadow-y", `${shadowY.toFixed(1)}px`);
        card.style.setProperty("--card-shadow-blur", `${shadowBlur.toFixed(1)}px`);
      });
    });

    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      resetTilt();
    });

    card.addEventListener("pointercancel", resetTilt);
    card.addEventListener("focusout", resetTilt);
  });
};

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxStrip = document.querySelector("[data-lightbox-strip]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrev = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");

let lightboxState = { galleryId: "", index: 0 };

const localizeLightboxChrome = () => {
  lightboxClose.textContent = ui.close;
  lightboxPrev.textContent = ui.prev;
  lightboxNext.textContent = ui.next;
  lightboxClose.setAttribute("aria-label", ui.close);
  lightboxPrev.setAttribute("aria-label", ui.prev);
  lightboxNext.setAttribute("aria-label", ui.next);
};

const updateLightbox = () => {
  const images = galleryLookup.get(lightboxState.galleryId) || [];
  const image = images[lightboxState.index];

  if (!image) {
    return;
  }

  lightboxImage.src = image.src;
  lightboxImage.alt = image.label;
  lightboxCaption.textContent = `${image.label}  ${String(lightboxState.index + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  lightboxStrip.innerHTML = images
    .map(
      (entry, index) => `
        <button
          class="lightbox-thumb ${index === lightboxState.index ? "is-active" : ""}"
          type="button"
          data-lightbox-thumb="${index}"
          aria-label="${escapeHtml(ui.lightboxThumbAria(entry.label))}"
        >
          <img src="${entry.src}" alt="${escapeHtml(entry.label)}">
        </button>
      `
    )
    .join("");

  lightboxStrip.querySelectorAll("[data-lightbox-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      lightboxState.index = Number(button.dataset.lightboxThumb);
      updateLightbox();
    });
  });
};

const openLightbox = (galleryId, index) => {
  lightboxState = { galleryId, index };
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  updateLightbox();
};

const closeLightbox = () => {
  lightbox.hidden = true;
  document.body.style.overflow = "";
};

lightboxClose.addEventListener("click", closeLightbox);

lightboxPrev.addEventListener("click", () => {
  const images = galleryLookup.get(lightboxState.galleryId) || [];
  lightboxState.index = (lightboxState.index - 1 + images.length) % images.length;
  updateLightbox();
});

lightboxNext.addEventListener("click", () => {
  const images = galleryLookup.get(lightboxState.galleryId) || [];
  lightboxState.index = (lightboxState.index + 1) % images.length;
  updateLightbox();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    lightboxPrev.click();
  }

  if (event.key === "ArrowRight") {
    lightboxNext.click();
  }
});

const initializeRevealObserver = () => {
  const revealItems = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

renderWorksIndex();
renderSections();
initializeViewers();
initializeSurfaceLight();
initializeTiltCards();
localizeLightboxChrome();
initializeRevealObserver();

/* ── Mobile hamburger menu ── */
const initMobileMenu = () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = window.matchMedia("(max-width: 780px)");
  if (!header || !toggle) return;

  const closeMenu = () => {
    header.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    document.body.classList.remove("is-header-hidden");
    header.classList.add("is-open");
    document.body.classList.add("is-menu-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    if (header.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on any nav link click (smooth scroll to section)
  header.querySelectorAll(".site-nav a, .locale-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close on Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // Close on click outside menu
  document.addEventListener("click", (event) => {
    if (
      header.classList.contains("is-open") &&
      !header.contains(event.target)
    ) {
      closeMenu();
    }
  });

  mobileMenu.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMenu();
    }
  });
};

initMobileMenu();
