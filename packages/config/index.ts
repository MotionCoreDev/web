/**
 * @startup/config
 * Merkezi konfigürasyon paketi
 *
 * Tüm uygulamalar için ortak ayarları, marka bilgilerini,
 * favicon ve logo yapılandırmalarını tek bir yerden yönetir.
 */

// Site ve marka konfigürasyonları
export {
    BRAND_CONFIG,
    FAVICON_CONFIG,
    LOGO_CONFIG,
    APP_METADATA,
    OG_IMAGE_CONFIG,
    type BrandConfig,
    type FaviconConfig,
    type LogoConfig,
    type AppMetadataConfig,
    type AppType,
} from "./site.config";

// Next.js Metadata yardımcıları
export { createMetadata, createPageMetadata } from "./metadata";
