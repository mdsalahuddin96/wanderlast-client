"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";

const SigninPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const onSubmit = async (formData) => {
    const userData = Object.fromEntries(formData);
    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
      rememberMe: true,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login Successful!");
    }
  };
  // const handleGoogleLogin = async () => {
  //   const data = await authClient.signIn.social({
  //     provider: "google",
  //   });
  // };
  return (
    <div className="bg-[#f9fafcFF] min-h-screen flex flex-col items-center">
      <div className="text-center mt-10 mb-2 space-y-0.5">
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <p className="text-sm text-gray-600">
          Resume your adventure with Wanderlust
        </p>
      </div>
      <div className="flex min-w-96 flex-col justify-center items-center bg-white  p-6 rounded-[14px] shadow-sm">
        <Form action={onSubmit} className="flex w-full flex-col gap-4 ">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          <TextField
            className="relative"
            isRequired
            minLength={8}
            name="password"
            type={isShow ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              placeholder="Enter your password"
            />
            {passwordValue.length > 0 && (
              <span className="absolute top-8 cursor-pointer right-3 p-1">
                {isShow ? (
                  <IoIosEye onClick={() => setIsShow(!isShow)} />
                ) : (
                  <IoIosEyeOff onClick={() => setIsShow(!isShow)} />
                )}
              </span>
            )}

            <Description>
              Must be at least 8 characters with 1 number{" "}
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col gap-2">
            <Button type="submit" className="w-full rounded-none">
              {/* <ArrowRightToSquare /> */}
              Sign In
            </Button>
            <div className="flex justify-center items-center gap-3">
              <Separator className="w-30" />
              <div className="whitespace-nowrap">Or signin with</div>
              <Separator className="w-30" />
            </div>
            <Button
              variant="outline"
              className="w-full rounded-none"
              
            >
              <FcGoogle />
              Sign In with Google
            </Button>
          </div>
        </Form>
        <p className="mt-10">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-400 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
