import { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = {
  title: pageMetadata.portfolio.title,
  description: pageMetadata.portfolio.description,
  keywords: pageMetadata.portfolio.keywords,
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
