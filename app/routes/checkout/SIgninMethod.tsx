import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { supabase } from "~/lib/subase";

export default function SigninMethod() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function signinGoogle() {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <button
      className="flex w-full my-3 items-center rounded-2xl p-4 cursor-pointer bg-soft"
      onClick={signinGoogle}
    >
      <FaGoogle />
      <p className="ml-2">Login with Google Account</p>
    </button>
  );
}
