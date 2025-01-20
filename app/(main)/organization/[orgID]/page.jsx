import { getOrganization } from "@/actions/organization";
import OrgSwitcher from "@/components/OrgSwitcher";

const Organization = async ({ params }) => {
  const { orgID } = params;
  const organization = await getOrganization(orgID);

  if (!organization) {
    return <h1>Organization Not Found</h1>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
        <h1 className="text-5xl font-bold gradient-title pb-2 uppercase">
          {organization.name}'s Project
        </h1>
        {/* ORGANIZATION SWITHCING BUTTON */}
        <OrgSwitcher />
      </div>
      <div className="mb-4">Show Org Projects</div>
      <div className="mt-8">Show User Assigned and Reported Issues here</div>
    </div>
  );
};

export default Organization;
