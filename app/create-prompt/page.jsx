"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import { useSelector } from "react-redux";

const CreatePrompt = () => {
  const router = useRouter();
  const USER_INFO = useSelector((state) => state.auth.userInfo)

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (USER_INFO) {
        const response = await fetch("/api/prompt/new", {
          method: "POST",
          body: JSON.stringify({
            prompt: post.prompt,
            userId: USER_INFO.id,
            tag: post.tag,
          }),
        });

        if (response.ok) {
          router.push("/");
        }
      } else {
        alert("Something went wrong!")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
