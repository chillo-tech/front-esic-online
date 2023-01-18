const base = "id,libelle,ordre";
const pages = "pages.pages_id.id,pages.pages_id.libelle"
const souscategories = "categories.categories_id.souscategories.souscategories_id.ordre,categories.categories_id.souscategories.souscategories_id.id,categories.categories_id.souscategories.souscategories_id.libelle"
const categories = `categories.categories_id.id,categories.categories_id.libelle,${souscategories}`
const MENU = `${base},${categories},${pages}`;
export {MENU};