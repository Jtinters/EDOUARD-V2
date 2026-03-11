const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const transitionStorageKey = "eduard-pak:page-transition";
const transitionDurationMs = 360;

const createPageCurtain = () => {
  if (document.querySelector(".page-curtain")) {
    return;
  }

  const curtain = document.createElement("div");
  curtain.className = "page-curtain";
  curtain.setAttribute("aria-hidden", "true");
  document.body.append(curtain);
};

const shouldBypassTransition = (link, event) => {
  if (!link) {
    return true;
  }

  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return true;
  }

  if (
    link.target === "_blank" ||
    link.hasAttribute("download") ||
    link.dataset.noTransition === "true"
  ) {
    return true;
  }

  const href = link.getAttribute("href");

  if (!href || href.startsWith("#")) {
    return true;
  }

  const url = new URL(link.href, window.location.href);

  if (
    url.origin !== window.location.origin ||
    !["http:", "https:"].includes(url.protocol)
  ) {
    return true;
  }

  const currentPath = `${window.location.pathname}${window.location.search}`;
  const targetPath = `${url.pathname}${url.search}`;

  if (currentPath === targetPath && url.hash) {
    return true;
  }

  return false;
};

const initializePageTransitions = () => {
  document.documentElement.classList.add("has-page-effects");
  document.body.classList.add("page-effects-ready");

  if (prefersReducedMotion.matches) {
    return;
  }

  createPageCurtain();

  const pendingTarget = sessionStorage.getItem(transitionStorageKey);
  const currentTarget = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const currentPath = `${window.location.pathname}${window.location.search}`;

  if (
    pendingTarget &&
    (pendingTarget === currentTarget ||
      pendingTarget === currentPath ||
      pendingTarget.startsWith(`${currentPath}#`))
  ) {
    document.body.classList.add("is-page-entering");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add("is-page-entered");
      });
    });

    window.setTimeout(() => {
      document.body.classList.remove("is-page-entering", "is-page-entered");
    }, 520);
  }

  sessionStorage.removeItem(transitionStorageKey);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");

    if (shouldBypassTransition(link, event)) {
      return;
    }

    const url = new URL(link.href, window.location.href);

    event.preventDefault();
    sessionStorage.setItem(
      transitionStorageKey,
      `${url.pathname}${url.search}${url.hash}`
    );
    document.body.classList.add("is-page-leaving");

    window.setTimeout(() => {
      window.location.assign(url.href);
    }, transitionDurationMs);
  });

  window.addEventListener("pageshow", () => {
    document.body.classList.remove(
      "is-page-leaving",
      "is-page-entering",
      "is-page-entered"
    );
  });
};

const initializeParallaxMedia = () => {
  if (prefersReducedMotion.matches) {
    return;
  }

  const mediaNodes = [...document.querySelectorAll("[data-parallax-media]")];

  if (!mediaNodes.length) {
    return;
  }

  let rafId = 0;

  const update = () => {
    const viewportHeight = window.innerHeight || 1;

    mediaNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const normalized = Math.max(-1, Math.min(1, centerOffset / viewportHeight));
      const strength = Number(node.dataset.parallaxSpeed || "18");

      node.style.setProperty(
        "--parallax-y",
        `${(normalized * strength).toFixed(2)}px`
      );
    });

    rafId = 0;
  };

  const requestUpdate = () => {
    if (rafId) {
      return;
    }

    rafId = requestAnimationFrame(update);
  };

  update();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("orientationchange", requestUpdate);
};

const createReadingProgress = () => {
  if (document.querySelector(".reading-progress")) {
    return;
  }

  const progress = document.createElement("div");
  progress.className = "reading-progress";
  progress.setAttribute("aria-hidden", "true");

  const fill = document.createElement("span");
  fill.className = "reading-progress-fill";
  progress.append(fill);
  document.body.append(progress);
};

const initializeScrollChrome = () => {
  const header = document.querySelector(".site-header");
  const mobileBreakpoint = window.matchMedia("(max-width: 780px)");

  createReadingProgress();

  let lastScrollY = window.scrollY;
  let headerAnchorY = window.scrollY;
  let lastTouchY = null;
  let rafId = 0;

  const showHeader = (currentY) => {
    document.body.classList.remove("is-header-hidden");
    headerAnchorY = currentY;
    lastScrollY = currentY;
  };

  const hideHeader = (currentY) => {
    document.body.classList.add("is-header-hidden");
    headerAnchorY = currentY;
    lastScrollY = currentY;
  };

  const update = () => {
    const currentY = Math.max(window.scrollY, 0);
    const scrollableHeight = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      0
    );
    const progress = scrollableHeight > 0 ? currentY / scrollableHeight : 0;
    const scrollDelta = currentY - lastScrollY;

    document.documentElement.style.setProperty(
      "--reading-progress",
      Math.max(0, Math.min(1, progress)).toFixed(4)
    );

    if (header && !header.classList.contains("is-open")) {
      const hidden = document.body.classList.contains("is-header-hidden");
      const isMobile = mobileBreakpoint.matches;
      const hideThreshold = isMobile ? 56 : 84;
      const revealThreshold = isMobile ? 8 : 10;

      if (currentY <= 18) {
        showHeader(currentY);
      } else if (isMobile) {
        showHeader(currentY);
      } else if (scrollDelta > 0) {
        if (hidden) {
          headerAnchorY = currentY;
        } else if (currentY > 132 && currentY - headerAnchorY >= hideThreshold) {
          hideHeader(currentY);
        }
      } else if (scrollDelta < 0) {
        if (hidden && (isMobile || headerAnchorY - currentY >= revealThreshold)) {
          showHeader(currentY);
        } else {
          headerAnchorY = Math.min(headerAnchorY, currentY);
        }
      }
    } else {
      showHeader(currentY);
    }

    lastScrollY = currentY;
    rafId = 0;
  };

  const requestUpdate = () => {
    if (rafId) {
      return;
    }

    rafId = requestAnimationFrame(update);
  };

  const handleTouchStart = (event) => {
    lastTouchY = event.touches[0]?.clientY ?? null;
  };

  const handleTouchMove = (event) => {
    if (!header || header.classList.contains("is-open") || !mobileBreakpoint.matches) {
      return;
    }

    const touchY = event.touches[0]?.clientY;

    if (touchY == null) {
      return;
    }

    if (lastTouchY != null && touchY - lastTouchY > 6) {
      showHeader(window.scrollY);
    }

    lastTouchY = touchY;
  };

  const resetTouch = () => {
    lastTouchY = null;
  };

  update();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("orientationchange", requestUpdate);
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: true });
  window.addEventListener("touchend", resetTouch, { passive: true });
  window.addEventListener("touchcancel", resetTouch, { passive: true });
};

initializePageTransitions();
initializeParallaxMedia();
initializeScrollChrome();
