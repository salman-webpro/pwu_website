/*
 * Shared types for content (src/content) and the API layer (src/lib/api).
 * Content is plain data so it can later come from an API/CMS unchanged.
 */

// ---------- Generic content ----------

export interface NavLink {
  label: string;
  href: string;
}

export interface TitleBody {
  title: string;
  body: string;
}

export type Step = TitleBody;
export type FeatureItem = TitleBody;

export interface Faq {
  q: string;
  a: string;
}

export interface Stat {
  value: string;
  label: string;
}

/**
 * Icons are referenced by name so content stays plain data.
 * Components map each name to a lucide-react icon.
 */
export type IconName =
  | "LayoutGrid"
  | "Box"
  | "ClipboardList"
  | "Layers"
  | "CircleCheck"
  | "BarChart3"
  | "RefreshCw"
  | "File"
  | "Mail"
  | "Repeat"
  | "Zap"
  | "Upload"
  | "Clock";

export interface IconItem {
  icon: IconName;
  label: string;
}

export interface IconStat {
  icon: IconName;
  value: string;
  label: string;
}

export type ModalId = "consultation" | "call";

/** A button that opens one of the two modals. */
export interface ModalCta {
  label: string;
  modal: ModalId;
  preset?: { topic?: ConsultationTopic };
}

/** A button that navigates somewhere. */
export interface LinkCta {
  label: string;
  href: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

/** Shared "Not sure where to start?" panel. */
export interface CtaPanelContent {
  title: string;
  body: string;
  primary: ModalCta;
  secondary: ModalCta;
}

/** Inner-page hero: eyebrow pill + h1 with an optional gradient part. */
export interface PageHeroContent {
  eyebrow: string;
  titleStart: string;
  titleGradient?: string;
  titleEnd?: string;
  /** Put the gradient part on its own line (How it works). */
  gradientOnNewLine?: boolean;
  lead: string;
  cta?: ModalCta;
}

export interface SectionHeadingContent {
  title: string;
  subtitle?: string;
}

// ---------- Products ----------

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  /** Card gradient, 135deg, [from, to]. */
  gradient: [string, string];
  tile: "portrait" | "landscape";
  /** Tile rotation in degrees. */
  tilt: number;
}

// ---------- Articles ----------

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  body?: string;
  coverImage?: string;
}

// ---------- Info pages (footer links) ----------

export interface InfoPage {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  body: string[];
  /** Show the shared FAQs under the body (used by /faqs). */
  showFaqs?: boolean;
}

// ---------- Leads & bookings (API payloads) ----------

export type CallTopic = "new-quote" | "reorder" | "order-status" | "artwork" | "other";
export type CallWindow = "within-hour" | "morning" | "afternoon";

export interface CallbackRequest {
  name: string;
  phone: string;
  topic: CallTopic;
  window: CallWindow;
}

export type ConsultationTopic = "repeat-ordering" | "quote" | "team-account" | "other";

export interface ConsultationSlot {
  /** ISO timestamp, UTC. */
  start: string;
  available: boolean;
}

export interface ConsultationBooking {
  topic: ConsultationTopic;
  name: string;
  email: string;
  business: string;
  product: string;
  slotStart: string;
  note?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };

/** A labelled option for selects and radio groups. */
export interface Option<V extends string = string> {
  value: V;
  label: string;
}
