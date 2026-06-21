/**
 * Site Konfigürasyonu
 * Bu dosya artık merkezi @startup/config paketindeki ayarları re-export ediyor.
 * Tüm site ayarları için: packages/config/site.config.ts dosyasını düzenleyin.
 */

// Merkezi config'ten re-export
export {
    BRAND_CONFIG,
    FAVICON_CONFIG,
    LOGO_CONFIG,
    APP_METADATA,
    OG_IMAGE_CONFIG,
    createMetadata,
    createPageMetadata,
} from "@startup/config";

// Geriye dönük uyumluluk için SITE_CONFIG alias'ı
import { createMetadata } from "@startup/config";
export const SITE_CONFIG = createMetadata("landing");

