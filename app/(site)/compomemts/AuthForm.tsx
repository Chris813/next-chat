//客户端组件
"use client";
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AuthSocialButton } from "./AuthSocialButton";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "LOGIN" ? "REGISTER" : "LOGIN"));
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      //TODO: register
    }
    if (variant === "LOGIN") {
      //TODO: login
    }
    console.log(data);
  };
  const socialAction = (action: string) => {
    setIsLoading(true);
    //TODO: social login
  };
  return (
    <div className='sm:mx-auto sm:w-full sm:max-w-md mt-8'>
      <div className='bg-white py-4 px-8 shadow sm:rounded-lg sm:px-10'>
        <h2 className=' text-center text-3xl my-3 font-bold'>很高兴见到您😊</h2>
        <h3 className=' text-center text-lg my-3 text-gray-400'>
          快来和朋友们聊天吧！
        </h3>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id='username'
              label='用户名'
              register={register}
              errors={errors}
            />
          )}
          <Input
            id='email'
            label='邮箱'
            type='email'
            register={register}
            errors={errors}
          />
          <Input
            id='password'
            label='密码'
            type='password'
            register={register}
            errors={errors}
          />
          <div className='flex justify-center'>
            <Button disabled={isLoading} type='submit'>
              {variant === "LOGIN" ? "登录" : "注册"}
            </Button>
          </div>
        </form>
        <div className=' mt-6'>
          <div className=' relative'>
            <div className='absolute  flex items-center inset-0'>
              <div className=' w-full border-gray-300 border-t' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className=' bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>
          <div className=' mt-6 flex gap-2 justify-center'>
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={FcGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
          <div className='mt-6 flex justify-center text-gray-500 gap-2'>
            <div>
              {variant === "LOGIN"
                ? "New to Nextchat?"
                : "Already have an account?"}
            </div>
            <div onClick={toggleVariant} className=' underline cursor-pointer'>
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
