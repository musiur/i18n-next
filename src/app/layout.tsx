import './globals.css'
import type { Metadata } from 'next'
import { Hind_Siliguri } from 'next/font/google'

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600" , "700"]
})

export const metadata: Metadata = {
  title: 'i18n',
  description: 'Multi Lingual Site using NEXTJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hindSiliguri.className}>{children}</body>
    </html>
  )
}
