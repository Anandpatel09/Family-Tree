import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* 🔹 Account Settings */}
        <Card className="p-6bg-white">
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Account Settings
            </h2>

            <div className="grid gap-4">
              <div>
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
              </div>

              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <Button className="w-fit rounded-lg">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 🔹 Password Settings */}
        <Card className="p-6 bg-white">
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Change Password
            </h2>

            <Input type="password" placeholder="Current Password" />
            <Input type="password" placeholder="New Password" />
            <Input type="password" placeholder="Confirm Password" />

            <Button className="w-fit rounded-lg">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* 🔹 Preferences */}
        <Card className="p-6 bg-white">
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Preferences
            </h2>

            <div className="flex items-center justify-between">
              <Label>Email Notifications</Label>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <Label>Dark Mode</Label>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* 🔹 Danger Zone */}
        <Card className="p-6   border border-red-200 bg-red-50">
          <CardContent className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-red-600">
                Logout
              </h2>
              <p className="text-sm text-red-500">
                You will be signed out from your account
              </p>
            </div>

            <Button variant="destructive">
              Logout
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default SettingsPage;