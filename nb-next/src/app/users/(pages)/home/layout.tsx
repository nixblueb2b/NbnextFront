import { Header } from "@/app/ui/users/sections";
import { OpenSidebarProvider } from "@/app/stores/user/homeHeaderProvider";
import { SimpleSidebar } from "@/app/ui/shared/sections";



const HomeLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <OpenSidebarProvider>
      <SimpleSidebar/>
      <div>
        <div className="shadow-sm py-6 fixed top-0 left-0 right-0 bg-white">
          <div className="w-full max-w-7xl  mx-auto bg-white px-8">
            <Header />
      
          </div>
        </div>
        <div className="w-full max-w-7xl bg-white mx-auto px-8">{children}</div>
      </div>
    </OpenSidebarProvider>
  );
};

export default HomeLayout;
