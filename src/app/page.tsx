import { createClient } from "../utils/supabase/createClient";

export default async function Login() {
  const signIn = async () => {
    'use server';
  
    console.log("login test")
  }


  return (
    <form 
      action={signIn}
    >
      <button></button>

    </form>
  )
}