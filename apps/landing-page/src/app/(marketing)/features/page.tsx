import { Metadata } from "next";
import { PAGES_METADATA } from "@/config/pages";
import { FeaturesClient } from "./features-client";

export const metadata: Metadata = PAGES_METADATA.marketing.features;

const FeaturesPage = () => {
    return <FeaturesClient />;
};

export default FeaturesPage;
