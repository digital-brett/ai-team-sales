export const metadata = {
  title: 'The AI Team - Transform Claude Into Your Executive Team',
  description: 'No coding required. 3-9 AI executives who handle daily operations, strategic planning, and execution.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
