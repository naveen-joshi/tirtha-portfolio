import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
};
