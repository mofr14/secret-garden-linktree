const LINKS = [
  {
    label: "Our Website",
    href: "https://a-ponte.com/",
    icon: "assets/icons/website-logo.webp",
  },
  {
    label: "restaurant menu",
    href: "",
    icon: "assets/icons/manu-icon.svg",
  },
  {
    label: "Event menu",
    href: "https://almamenu1.my.canva.site/dagu1mkct-q",
    icon: "assets/icons/manu-rev-icon.webp",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/Apontesecretgarden",
    icon: "assets/icons/facebook-icon.svg",
  },
  {
    label: "a Ponte Instaram",
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

function createIcon(iconPath) {
  const icon = document.createElement("span");
  icon.className = "link-icon";
  icon.style.backgroundImage = `url("${iconPath}")`;
  icon.setAttribute("aria-hidden", "true");

  return icon;
}

function createLink({ label, href, icon }) {
  const element = document.createElement(href ? "a" : "span");
  element.className = "link";
  element.append(createIcon(icon), createLabel(label));

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

function createLabel(text) {
  const label = document.createElement("span");
  label.className = "link-label";
  label.textContent = text;

  return label;
}

function renderLinks(container, links) {
  const fragment = document.createDocumentFragment();

  links.forEach((link) => {
    fragment.append(createLink(link));
  });

  container.replaceChildren(fragment);
}

renderLinks(document.querySelector("#links"), LINKS);
