"use server";

import { signIn, signOut } from "@/app/lib/auth";
import { auth } from "@/app/lib/auth";

export async function handleAuth() {
  const session = await auth();

  if (session) {
    return await signOut({
      redirectTo: "/login",
    });
  }

  return signIn("google", {
    redirectTo: "/dashboard",
  });
}
