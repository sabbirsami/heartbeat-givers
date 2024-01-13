import { ReactNode } from "react";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
};

export default MainLayout;
