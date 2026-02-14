import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm" >
      <CardHeader>
        <CardTitle>Login/Sing Up</CardTitle>
        <CardDescription>Please enter your email and password to login</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label >Email</Label>
              <Input                
                type="email"
                placeholder={"Enter your email"}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label >Password</Label>
               
              </div>
              <Input id="" type="password" 
              placeholder={"Enter your password"}
              required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Sing Up
        </Button>
         <Button variant="outline" className="w-full">
         New Registration
        </Button>
      </CardFooter>
    </Card>
  </div>
    </>
  );
};
export default Login;
