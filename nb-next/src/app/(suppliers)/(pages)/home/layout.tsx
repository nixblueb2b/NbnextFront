import { Header } from "@/app/ui/web/sections";

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div>
      <div className="shadow-sm py-4 border">
        <div className="w-full max-w-7xl  mx-auto bg-white px-8">
          <Header />
        </div>
      </div>
      <div className="w-full max-w-7xl bg-white mx-auto px-8">{children}</div>
    </div>
  );
};

export default HomeLayout;
