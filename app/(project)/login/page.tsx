import { handleAuth } from "@/app/actions/handle-auth";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-black  text-2xl">
      <h1 className="text-4xl mb-5">Login Page</h1>
      <form action={handleAuth}>
        <button type="submit" className="border rounded-md p-2 cursor-pointer font-medium">
          Signin with Google
        </button>
      </form>
    </div>
  );
}
