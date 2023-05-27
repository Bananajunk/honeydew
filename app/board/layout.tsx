import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  children?: React.ReactNode;
}

const BoardLayout = async ({ children }: Props) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
};

export default BoardLayout;
