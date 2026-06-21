import { Metadata } from "next";
import { PAGES_METADATA } from "@/config/pages";
import { PrivacyClient } from "./privacy-client";

export const metadata: Metadata = PAGES_METADATA.marketing.privacy;

const PrivacyPage = () => {
    return <PrivacyClient />;
};

export default PrivacyPage;
