import MainLayout from "@/components/layout/MainLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const getLayout =
        (Component as any).getLayout || ((page: React.ReactNode) => page);
    return getLayout(
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
};

export default MyApp;
