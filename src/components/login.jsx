import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const LoginComponent = () => {
  return (
    <div className="flex items-center justify-center px-10 my-24 md:my-32">
      <Card className="max-w-[400px]">
        <CardHeader>
          <span className="text-2xl font-semibold text-center">Login</span>
          <CardDescription>Login using your WCA account</CardDescription>
        </CardHeader>
        {/* <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent> */}
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginComponent