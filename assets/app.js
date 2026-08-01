const { labels: portfolioLabels, portfolio: portfolioContent } = window.portfolioData;

const locale = document.body.dataset.locale;
const text = portfolioLabels[locale];
const create = (tag, className, content) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.textContent = content;
  return element;
};

document.querySelectorAll('[data-site-name]').forEach((element) => { element.textContent = portfolioContent.name; });
document.querySelector('[data-year]').textContent = new Date().getFullYear();

const socialLinks = document.querySelector('[data-social-links]');
[
  { name: locale === 'es' ? 'Correo' : 'Email', href: `mailto:${portfolioContent.email}`, icon: 'https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/mail.svg', className: 'social-email' },
  { name: 'LinkedIn', href: portfolioContent.links.linkedin, icon: 'https://cdn.simpleicons.org/linkedin/0A66C2', className: 'social-linkedin' },
  { name: 'GitHub', href: portfolioContent.links.github, icon: 'https://cdn.simpleicons.org/github/E7EDF5', className: 'social-github' },
].forEach(({ name, href, icon, className }) => {
  const link = create('a', `social-icon ${className}`);
  link.href = href;
  link.setAttribute('aria-label', name);
  link.dataset.tooltip = name;
  const image = document.createElement('img');
  image.src = icon;
  image.alt = '';
  image.setAttribute('aria-hidden', 'true');
  link.append(image);
  if (!href.startsWith('mailto:')) { link.target = '_blank'; link.rel = 'noreferrer'; }
  socialLinks.append(link);
});

const emailLink = document.querySelector('[data-email-link]');
if (emailLink) emailLink.href = `mailto:${portfolioContent.email}`;

const experienceRoot = document.querySelector('[data-experience]');
if (portfolioContent.experience.length === 0) {
  experienceRoot.append(create('p', 'placeholder-note', text.noExperience));
} else {
  const list = create('ol', 'experience-list');
  portfolioContent.experience.forEach((item) => {
    const entry = document.createElement('li');
    entry.append(create('p', 'experience-period', item.period));
    const content = document.createElement('div');
    content.append(create('h3', '', `${item.role[locale]} · ${item.company}`), create('p', '', item.description[locale]));
    entry.append(content); list.append(entry);
  });
  experienceRoot.append(list);
}

const projectsRoot = document.querySelector('[data-projects]');
portfolioContent.projects.forEach((project) => {
  const card = create('article', 'project-card');
  const content = create('div', 'project-content');
  content.append(create('h3', '', project.title), create('p', 'project-summary', project[locale].summary));
  const details = create('dl', 'project-details');
  [[text.challenge, project[locale].challenge], [text.outcome, project[locale].outcome]].forEach(([title, description]) => {
    const row = document.createElement('div'); row.append(create('dt', '', title), create('dd', '', description)); details.append(row);
  });
  const tags = create('ul', 'tag-list');
  project.technologies.forEach((technology) => tags.append(create('li', '', technology)));
  content.append(details, tags);
  const links = create('p', 'project-links');
  [[text.repository, project.repository], [text.demo, project.demo]].filter(([, href]) => href).forEach(([name, href]) => {
    const link = create('a', '', `${name} ↗`); link.href = href; link.target = '_blank'; link.rel = 'noreferrer'; links.append(link);
  });
  if (links.children.length) content.append(links);
  card.append(content); projectsRoot.append(card);
});

const skillsRoot = document.querySelector('[data-skills]');
portfolioContent.skills.forEach((group) => {
  const block = create('div', 'skill-group'); const list = document.createElement('ul');
  const items = Array.isArray(group.items) ? group.items : group.items[locale];
  items.forEach((item) => {
    const skill = typeof item === 'string' ? { label: item } : item;
    const entry = create('li', 'skill-item');
    const icon = create('span', 'skill-icon');
    if (skill.iconClass) icon.classList.add(skill.iconClass);
    icon.setAttribute('aria-hidden', 'true');
    if (skill.icon) {
      const image = document.createElement('img');
      image.src = skill.icon;
      image.alt = '';
      image.loading = 'lazy';
      icon.append(image);
    }
    entry.append(icon, create('span', 'skill-name', skill.label));
    list.append(entry);
  });
  block.append(create('h3', '', group.label[locale]), list); skillsRoot.append(block);
});

const contactForm = document.querySelector('[data-contact-form]');
const contactModal = document.querySelector('[data-contact-modal]');

if (contactForm && contactModal) {
  const supportsNativeDialog = typeof contactModal.showModal === 'function' && typeof contactModal.close === 'function';
  const openModal = () => {
    if (supportsNativeDialog) contactModal.showModal();
    else contactModal.setAttribute('open', '');
  };
  const closeModal = () => {
    if (supportsNativeDialog) contactModal.close();
    else {
      contactModal.removeAttribute('open');
      contactForm.reset();
    }
  };

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    openModal();
  });

  contactModal.querySelectorAll('[data-modal-close]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  contactModal.addEventListener('click', (event) => {
    if (event.target === contactModal) closeModal();
  });

  contactModal.addEventListener('close', () => contactForm.reset());

  if (!supportsNativeDialog) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && contactModal.hasAttribute('open')) closeModal();
    });
  }
}
