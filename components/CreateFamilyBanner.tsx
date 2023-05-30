"use client";

interface Props {
  userId: string;
}

const CreateFamilyBanner = ({ userId }: Props) => {
  return (
    <div className="rounded-xl bg-primary/25 w-fit py-6 px-16 shadow-md text-accent">
      You do not currently belong to any families. Create your own now.
    </div>
  );
};

export default CreateFamilyBanner;
