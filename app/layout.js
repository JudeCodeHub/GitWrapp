
import "./globals.css";

export const metadata = {
  title: "GitWrapp",
  description: "Github year-in review cards for developers",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-gray-100 antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}
        suppressHydrationWarning
      </body>
    </html>
  );
}
