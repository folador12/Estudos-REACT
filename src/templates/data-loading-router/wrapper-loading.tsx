import { Loading } from "@/ui";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

interface IWrapperLoadingProps<T> {
  children: React.FC<T>;
}

export function WrapperDataLoadingRouter<T extends object>({
  children,
}: IWrapperLoadingProps<T>) {
  const { data } = useLoaderData() as { data: Promise<T> };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data} errorElement={<div>error loading!</div>}>
        {children}
      </Await>
    </Suspense>
  );
}
