import { Metadata } from "next";
import { PAGES_METADATA } from "@/config/pages";
import { TermsClient } from "./terms-client";

export const metadata: Metadata = PAGES_METADATA.marketing.terms;

const TermsPage = () => {
    return <TermsClient />;
};

export default TermsPage;
