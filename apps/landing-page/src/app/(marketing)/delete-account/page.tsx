import { Metadata } from "next";
import { PAGES_METADATA } from "@/config/pages";
import { DeleteAccountClient } from "./delete-account-client";

export const metadata: Metadata = PAGES_METADATA.marketing.deleteAccount;

const DeleteAccountPage = () => {
    return <DeleteAccountClient />;
};

export default DeleteAccountPage;
