import { Metadata } from "next";
import { PAGES_METADATA } from "@/config/pages";
import { ContactClient } from "./contact-client";
import { HeroHeader } from "@/components/ui/hero-section";

export const metadata: Metadata = PAGES_METADATA.marketing.contact;

const ContactPage = () => {
    return (
        <>
            <HeroHeader />
            <ContactClient />
        </>
    );
};

export default ContactPage;
