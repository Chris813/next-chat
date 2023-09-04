import Image from "next/image";
import AuthForm from "./compomemts/AuthForm";

export default function Home() {
  return (
    <div className='flex min-h-full justify-center flex-col py-12 sm:px-6 lg:px-8 bg-dswall'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={60}
          height={60}
          className=' mx-auto w-auto'
        />
      </div>
      <AuthForm />
    </div>
  );
}
