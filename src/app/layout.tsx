import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { StyledRoot } from "./StyledRoot";
import CustomAppBar from "./AppBar";
import { Container } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = ["Sobre nosotros", "Encuentranos", "Servicios"];
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CustomAppBar />
          <StyledRoot>
            <Container>{children}</Container>
          </StyledRoot>
          <div>Footer</div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
