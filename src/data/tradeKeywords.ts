import { TRADE_PAGES } from "./tradePages";

/**
 * Norwegian surface forms that should link back to the trade page.
 *
 * Each entry maps a trade slug (matches TRADE_PAGES keys) to an array of
 * singular/plural/compound spellings used in article bodies.
 *
 * Conservative by design: bare material/action words that frequently appear
 * outside a trade context (e.g. "betong", "isolasjon", "parkett", "takrenner")
 * are intentionally excluded. Only unambiguous trade spellings are listed.
 */
export const TRADE_KEYWORDS: Record<string, string[]> = {
  malere: ["malere", "maler", "malerfirma", "malermester", "malerbedrift"],
  takleggere: [
    "takleggere",
    "taklegger",
    "taktekkere",
    "taktekker",
    "takleggerfirma",
    "taktekkerfirma",
  ],
  rorleggere: [
    "rørleggere",
    "rørlegger",
    "rørleggerfirma",
    "rørleggermester",
    "rørleggerbedrift",
  ],
  pussere: ["pussere", "pussefirma", "stukkatør", "stukkatører"],
  gartnere: ["gartnere", "gartner", "gartnerfirma", "hagefirma"],
  altmuligmenn: ["altmuligmenn", "altmuligmann"],
  flisleggere: ["flisleggere", "flislegger", "flisleggerfirma"],
  elektrikere: [
    "elektrikere",
    "elektriker",
    "elektrikerfirma",
    "elektrikerbedrift",
  ],
  tomrere: ["tømrere", "tømrer", "tømrerfirma"],
  rengjoringsfirma: [
    "rengjøringsfirma",
    "rengjøringsbyrå",
    "rengjøringsbedrift",
    "rengjøringstjeneste",
  ],
  vindusvaskere: ["vindusvaskere", "vindusvasker", "vinduspusser", "vinduspussere"],
  kjokkenmontorer: [
    "kjøkkenmontør",
    "kjøkkenmontører",
    "kjøkkenmonterer",
    "kjøkkenmonteringsfirma",
  ],
  baderomsrenovering: [
    "baderomsrenovering",
    "baderomsoppussing",
    "baderenovering",
    "baderomsrenoveringsfirma",
  ],
  isolering: ["isoleringsfirma", "isoleringsselskap", "isoleringsmester"],
  flyttefirma: ["flyttefirma", "flyttebyrå", "flyttetjeneste"],
  entreprenorer: [
    "entreprenører",
    "entreprenør",
    "entreprenørfirma",
    "byggentreprenør",
    "byggentreprenører",
  ],
  fasaderens: ["fasaderens", "fasadevask", "fasadevaskefirma"],
  parkett: ["parkettlegger", "parkettleggere", "parkettlegging", "parkettfirma"],
  glassarbeid: [
    "glassarbeid",
    "glassmester",
    "glassmestere",
    "glassfirma",
  ],
  avlopstjeneste: [
    "avløpstjeneste",
    "avløpsrens",
    "avløpsspyling",
    "avløpsåpning",
    "avløpsfirma",
  ],
  belegning: [
    "belegning",
    "brosteinslegging",
    "steinlegger",
    "steinleggere",
    "belegningsfirma",
  ],
  interiordesign: [
    "interiørdesign",
    "interiørdesigner",
    "interiørdesignere",
    "interiørbyrå",
  ],
  gulvlegger: ["gulvlegger", "gulvleggere", "gulvleggerfirma"],
  murerarbeid: ["murerarbeid", "murer", "murere", "murermester", "murerfirma"],
  fugearbeid: ["fugearbeid", "fugefirma", "fugemester"],
  takrenner: ["takrennemontering", "takrennefirma", "takrennerens"],
  smarthus: ["smarthus", "smarthjem", "smarthusinstallatør"],
  ryddetjeneste: ["ryddetjeneste", "ryddefirma"],
  solcellepaneler: [
    "solcellefirma",
    "solcelleinstallatør",
    "solcelleinstallatører",
    "solcellemontør",
  ],
  takark: ["takark", "takarkbygging", "takarkmontering"],
  asbestsanering: ["asbestsanering", "asbestfjerning", "asbestsaneringsfirma"],
  fuktbekjempelse: ["fuktbekjempelse", "fuktsikring", "muggsanering"],
  feiere: ["feiere", "feier", "feierfirma", "feiermester"],
  mobelsnekkere: ["møbelsnekkere", "møbelsnekker", "møbelsnekkerfirma"],
  vinterhagebyggere: [
    "vinterhagebyggere",
    "vinterhagebygger",
    "vinterhagefirma",
    "vinterhagemontør",
  ],
  interiorarkitekter: ["interiørarkitekter", "interiørarkitekt"],
  kjellerbygging: [
    "kjellerbygging",
    "kjellerinnredning",
    "kjellerutgraving",
    "kjellerfirma",
  ],
  garasjeporter: [
    "garasjeportmontør",
    "garasjeportmontører",
    "garasjeportmontering",
  ],
  sikkerhetsinstallatorer: [
    "sikkerhetsinstallatør",
    "sikkerhetsinstallatører",
    "alarmselskap",
  ],
  stratekkere: ["stråtekkere", "stråtekker"],
  fundamentreparasjon: [
    "fundamentreparasjon",
    "grunnmursforsterkning",
    "fundamentfirma",
  ],
  stopegulv: ["støpegulv", "støpegulvlegger"],
};

export interface TradeKeywordEntry {
  slug: string;
  keywords: string[];
}

/**
 * Only the TRADE_KEYWORDS entries whose slug exists in TRADE_PAGES.
 * Prevents dangling links when a trade slug is removed from TRADE_PAGES
 * but the keyword map is not updated.
 */
export const TRADE_KEYWORD_ENTRIES: TradeKeywordEntry[] = Object.entries(
  TRADE_KEYWORDS,
)
  .filter(([slug]) => slug in TRADE_PAGES)
  .map(([slug, keywords]) => ({ slug, keywords }));
