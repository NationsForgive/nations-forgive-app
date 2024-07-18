import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledRoot } from "./StyledRoot";
import CustomAppBar from "@/components/AppBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <StyledRoot>
            <CustomAppBar />
            {children}
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
