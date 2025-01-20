"use client"

import { OrganizationList, useOrganization } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Onboarding = () => {

        const {organization} = useOrganization();
        const Router = useRouter();

        useEffect(() => {
                if(organization){
                        Router.push(`/organization/${organization.slug}`)
                }
        }, [organization])
        
  return (
        <div className="flex justify-center items-center pt-14">
        <OrganizationList
          afterCreateOrganizationUrl="/organization/:slug"
          afterSelectOrganizationUrl="/organization/:slug"
        />
      </div>
  )
}

export default Onboarding;
