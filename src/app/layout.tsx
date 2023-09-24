import "./global.css"
import Theme from "../context/theme";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <html lang="en">
        <Theme.Provider>
            <body>
                {children}
            </body>
        </Theme.Provider>
      </html>
    )
  }