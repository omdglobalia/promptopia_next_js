"use client"
import Feed from "@components/Feed";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: page.jsx:8 ~ Home ~ session:", session)
  useEffect(() => {
    if (session) {
      const createUser = async () => {
        try {
          const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({
              email: session?.user.email,
              username: session?.user.name,
              image: session?.user.image,
            })
          })
          const user = await response.json();
          session.user.id = user._id.toString();
        } catch (error) {
          console.log(error);
        }
      };
      createUser()
    }
  }, [session])
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  )
}

export default Home;
