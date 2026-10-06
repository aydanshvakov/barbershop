import { BRANCHES, DEFAULT_BRANCH } from './branches.js';

export function restoreBranch(storage = sessionStorage) {
  const saved = storage.getItem('nurbarber-branch');
  return BRANCHES[saved] ? saved : DEFAULT_BRANCH;
}

export function createBranchRenderer(elements, storage = sessionStorage) {
  return function renderBranch(branchId) {
    const branch = BRANCHES[branchId] || BRANCHES[DEFAULT_BRANCH];
    const safeBranchId = BRANCHES[branchId] ? branchId : DEFAULT_BRANCH;
    elements.get('name').textContent = branch.name;
    elements.get('address').textContent = branch.address;
    elements.get('phone').textContent = branch.phone;
    elements.get('phone').href = `tel:${branch.phoneTel}`;
    elements.get('booking').href = branch.bookingUrl;
    elements.get('reviews').href = branch.reviewsUrl;
    elements.get('route').href = branch.routeUrl;
    elements.get('map').src = branch.mapUrl;
    elements.get('rating').textContent = branch.rating ? `${branch.rating} · ${branch.reviewsCount}` : 'Отзывы и рейтинг в 2ГИС';
    elements.get('hours').textContent = branch.hours;
    elements.get('services').innerHTML = branch.services.map((service) => `<li>${service}</li>`).join('');
    elements.get('masters').textContent = branch.mastersNote;
    storage.setItem('nurbarber-branch', safeBranchId);
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.branch = safeBranchId;
      document.querySelectorAll('[data-branch]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.branch === safeBranchId));
      });
    }
  };
}

function boot() {
  const elements = new Map([...document.querySelectorAll('[data-bind]')].map((item) => [item.dataset.bind, item]));
  const renderBranch = createBranchRenderer(elements);
  document.querySelectorAll('[data-branch]').forEach((button) => button.addEventListener('click', () => renderBranch(button.dataset.branch)));
  renderBranch(restoreBranch());
}

if (typeof document !== 'undefined') boot();
