import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { handleAuth } from "@/app/actions/handle-auth";

export default async function Dashboard() {
  // server componenet
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-10 min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-black">
      Dashboard Page
      <p>
        {session?.user?.email
          ? "Hello " + session?.user?.email + "!"
          : "Signed out"}
      </p>
      {session?.user?.email && (
        <form action={handleAuth}>
          <button
            type="submit"
            className="border rounded-md p-2 cursor-pointer font-medium"
          >
            Logout
          </button>
        </form>
      )}
    </div>
  );
}
