"use client";

import { UserButton } from "@clerk/nextjs";
import { University } from "lucide-react";

const UserProfile = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "size-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Organizations"
          labelIcon={<University size={15} />}
          href="/onboarding"
        />
        {/* To Move this Custom feature to the Top */}
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserProfile;
