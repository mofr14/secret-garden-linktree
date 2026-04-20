const RESTAURANT_MENU_OPTIONS = [
  { label: "Breakfast Menu", href: "https://a-ponte-secret-garden.my.canva.site/breakfast-menu" },
  { label: "Lunch & Dinner Menu", href: "https://a-ponte-secret-garden.my.canva.site/lunch-and-dinner-menu" },
  { label: "Bakery Menu", href: "" },
];

const LINKS = [
  {
    label: "Our Website",
    href: "https://a-ponte.com/",
    icon: "assets/icons/website-logo.webp",
  },
  {
    label: "Restaurant Menu",
    icon: "assets/icons/manu-icon.svg",
    options: RESTAURANT_MENU_OPTIONS,
  },
  {
    label: "Our Events",
    href: "https://almamenu1.my.canva.site/dagu1mkct-q",
    icon: "assets/icons/manu-rev-icon.webp",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/Apontesecretgarden",
    icon: "assets/icons/facebook-icon.svg",
  },
  {
    label: "A Ponte Instaram",
    href: "https://www.instagram.com/secret.garden.pt/",
    icon: "assets/icons/instagram-icon.svg",
  },
  {
    label: "Alma Instaram",
    href: "https://www.instagram.com/alma.secret.garden/",
    icon: "assets/icons/instagram-icon.svg",
  },
  {
    label: "Rate Us On Google",
    href: "https://maps.app.goo.gl/URWvzwAUSFok6FXF8",
    icon: "assets/icons/google-icon.webp",
  },
];

const menuDialog = createMenuDialog();

function createIcon(iconPath) {
  const icon = document.createElement("span");
  icon.className = "link-icon";
  icon.style.backgroundImage = `url("${iconPath}")`;
  icon.setAttribute("aria-hidden", "true");

  return icon;
}

function createLink({ label, href, icon, options }) {
  const element = document.createElement(getLinkElementType({ href, options }));
  element.className = "link";
  element.append(createIcon(icon), createLabel(label));

  if (options) {
    element.type = "button";
    element.setAttribute("aria-haspopup", "dialog");
    element.addEventListener("click", () => openMenuDialog(label, options));
    return element;
  }

  if (!href) {
    element.classList.add("link-disabled");
    element.setAttribute("aria-disabled", "true");
    return element;
  }

  element.href = href;
  element.target = "_blank";
  element.rel = "noopener noreferrer";

  return element;
}

function getLinkElementType({ href, options }) {
  if (options) {
    return "button";
  }

  return href ? "a" : "span";
}

function createLabel(text) {
  const label = document.createElement("span");
  label.className = "link-label";
  label.textContent = text;

  return label;
}

function createMenuDialog() {
  const dialog = document.createElement("dialog");
  const closeButton = document.createElement("button");
  const title = document.createElement("h2");
  const options = document.createElement("div");

  dialog.className = "menu-dialog";

  closeButton.className = "menu-dialog-close";
  closeButton.type = "button";
  closeButton.ariaLabel = "Close Menu";
  closeButton.textContent = "x";
  closeButton.addEventListener("click", () => dialog.close());

  title.className = "menu-dialog-title";
  options.className = "menu-options";

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.append(closeButton, title, options);
  document.body.append(dialog);

  return dialog;
}

function openMenuDialog(title, options) {
  menuDialog.querySelector(".menu-dialog-title").textContent = title;
  menuDialog.querySelector(".menu-options").replaceChildren(...options.map(createMenuOption));
  menuDialog.showModal();
}

function createMenuOption({ label, href }) {
  const option = document.createElement(href ? "a" : "button");
  option.className = "menu-option";
  option.textContent = label;

  if (!href) {
    option.type = "button";
    option.disabled = true;
    option.classList.add("menu-option-disabled");
    option.setAttribute("aria-disabled", "true");
    return option;
  }

  option.href = href;
  option.target = "_blank";
  option.rel = "noopener noreferrer";

  return option;
}

function renderLinks(container, links) {
  const fragment = document.createDocumentFragment();

  links.forEach((link) => {
    fragment.append(createLink(link));
  });

  container.replaceChildren(fragment);
}

renderLinks(document.querySelector("#links"), LINKS);
