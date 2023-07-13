import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import StoreProvider from "@components/provider/storeProvider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href="/assets/images/logo.svg" />
      </head>
      <body>
        <Provider>
          <StoreProvider>
            <div className='main'>
              <div className='gradient' />
            </div>
            <main className='app'>
              <Nav />
              {children}
            </main>
          </StoreProvider>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;
