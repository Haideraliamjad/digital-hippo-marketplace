"use client";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TAuthcriedientialsValidator } from "@/lib/validators/account-credientials-validator";
import { AuthCredientialsValidator } from "@/lib/validators/account-credientials-validator";
const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver<TAuthcriedientialsValidator | any>(
      AuthCredientialsValidator
    ),
  });

  const onSubmit = ({ email, password }: TAuthcriedientialsValidator) => {
    // handle submit data here
  };
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              {...register("email")}
              className={buttonVariants({
                variant: "link",
                className: "text-muted-foreground gap-1.5",
              })}
              href="/sign-in"
            >
              Already have an account? sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2 ">
                <div className="grid gap-2 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    type="email"
                    placeholder="you@example.com"
                  ></Input>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    type="password"
                    placeholder="********"
                  ></Input>
                </div>
                <Button>Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupPage;
