"use client";
import React from 'react';
import Link from "next/link";
import { useFormState } from "react-dom";

import { registerUserAction } from '@data/auth-actions';

const INITIAL_STATE = {
    data: null,
};

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ZodErrors } from '@components/ZodErrors/ZodErrors';

const RegisterForm = () => {

    const [formState, formAction] = useFormState(
        registerUserAction,
        INITIAL_STATE
    );

    return (
        <div className="w-full max-w-md">
          <form action={formAction}>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">Register</CardTitle>
                <CardDescription>
                  Enter your details to create a new account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                  />
                  <ZodErrors error={formState?.zodErrors?.username} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <ZodErrors error={formState?.zodErrors?.email} />
                </div>
    
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <ZodErrors error={formState?.zodErrors?.email} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <ZodErrors error={formState?.zodErrors?.email} />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <button className="w-full">Sign Up</button>
              </CardFooter>
            </Card>
            <div className="mt-4 text-center text-sm">
              Have an account?
              <Link className="underline ml-2" href="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      )
}

export default RegisterForm