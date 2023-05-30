import CreateFamilyBanner from "@/components/CreateFamilyBanner";
import authOptions from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  children?: React.ReactNode;
}

const BoardLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  const currentUser = await prisma.user.findUniqueOrThrow({
    where: { email: session?.user?.email! },
    include: {
      families: true,
    },
  });

  if (!session) {
    redirect("/");
  }

  return (
    <main className="pt-24 flex flex-col items-center gap-8">
      {currentUser.families.length === 0 && (
        <CreateFamilyBanner userId={currentUser.id} />
      )}
      {children}
    </main>
  );
};

export default BoardLayout;
