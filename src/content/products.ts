import type { Product } from "@/types";

// Category cards on Home ("Standardized print for repeat business use").
// Also the source for the "Products you print" select in the consultation modal.
// Tilts match the screenshot: landscape tiles lean left, portrait tiles lean right.
export const products: Product[] = [
  { slug: "business-cards", title: "Business cards", subtitle: "Matte, gloss, UV", gradient: ["#FE763E", "#F5415E"], tile: "landscape", tilt: -6 },
  { slug: "postcards", title: "Postcards", subtitle: "6\"×9\" and more", gradient: ["#812FD1", "#BF27D3"], tile: "landscape", tilt: -6 },
  { slug: "brochures", title: "Brochures", subtitle: "Bifold, trifold", gradient: ["#FBBC26", "#FC943C"], tile: "portrait", tilt: 4 },
  { slug: "flyers", title: "Flyers", subtitle: "Single and double sided", gradient: ["#1E1447", "#6B3ACF"], tile: "portrait", tilt: 4 },
  { slug: "banners-and-signs", title: "Banners and signs", subtitle: "Vinyl, foam board, retractable", gradient: ["#CF1458", "#6F1041"], tile: "landscape", tilt: -6 },
  { slug: "posters", title: "Posters", subtitle: "Indoor and outdoor", gradient: ["#18B2A8", "#6A40D0"], tile: "portrait", tilt: 4 },
  { slug: "boxes-and-packaging", title: "Boxes and packaging", subtitle: "Custom sizes", gradient: ["#FB943A", "#FBBD25"], tile: "landscape", tilt: -6 },
  { slug: "labels-and-stickers", title: "Labels and stickers", subtitle: "Rolls and sheets", gradient: ["#395FD9", "#15B5A8"], tile: "portrait", tilt: 4 },
];
