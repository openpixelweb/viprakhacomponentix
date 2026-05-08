import Loading from "../common/loading";
import useAuthCheck from "@/hooks/use-auth-check";

const AuthCom = ({ children }: { children: React.ReactNode }) => {
  const { authChecked } = useAuthCheck();

  if (!authChecked) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading spinner="fade" loading={!authChecked} />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthCom;
