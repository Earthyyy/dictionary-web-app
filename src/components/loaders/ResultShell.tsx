import { Skeleton } from "../ui/Skeleton";

const ResultShell = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-7 tablet:mb-10">
        <div className="flex flex-col tablet:gap-y-2">
          <Skeleton className="w-[128px] h-[40px] desktop:w-[256px] desktop:h-[70px]" />
          <Skeleton className="w-[128px] h-[24px] desktop:w-[256px] desktop:h-[30px]" />
        </div>
        <Skeleton className="rounded-full w-[48px] h-[48px] desktop:w-[75px] desktop:h-[75px]" />
      </div>
      <Skeleton className="pt-5 w-full h-[300px]" />
    </>
  );
};

export default ResultShell;
