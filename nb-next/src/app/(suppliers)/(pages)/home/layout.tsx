import { Header } from "@/app/ui/web/sections";

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="">
      <div className="px-8 shadow-sm py-4 ">
        <div className="w-full max-w-7xl bg-white mx-auto">
          <Header />
        </div>
      </div>
      <div className="w-full max-w-7xl bg-white mx-auto px-8">{children}</div>
    </div>
  );
};

export default HomeLayout;
