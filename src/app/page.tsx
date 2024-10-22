"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const route = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      route.push("/sign-in")
    }
  }, [data]);

  return (
    <div>
      Hello
      <Button onClick={() => mutate()}>
        Logout
      </Button>
    </div>
  );
}
