"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useOrganization, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import  useFetch  from "@/hooks/use-fetch";
import { projectValidate } from "@/app/lib/validators";
import { createProject } from "@/actions/projects";
import { BarLoader } from "react-spinners";
import OrgSwitcher from "@/components/OrgSwitcher";

export default function CreateProjectP() {
  const router = useRouter();
  const { isLoaded: isOrgLoaded, membership } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  // FORM VALIDATION -> ZOD RESOLVER 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectValidate),
  });

  // CHECKING IF USER -> ADMIN | UPDATING TO ADMIN
  useEffect(() => {
    if (isOrgLoaded && isUserLoaded && membership) {
      setIsAdmin(membership.role === "org:admin");
    }
  }, [isOrgLoaded, isUserLoaded, membership]);

  // CUSTOM API CALL | HOOKS FOR SENDING THE DATA
  const {
    loading,
    error,
    data: project,
    fn: createProjectFn,
  } = useFetch(createProject);

  // MAIN FORM: SUBMIT FUNCTIONALITY | CALLING FN
  const onSubmit = async (data) => {
    if (!isAdmin) {
      alert("Only organization admins can create projects");
      return;
    }

    createProjectFn(data);
  };

  // ROUTING TO NEW PROJECT AFTER CREATION
  useEffect(() => {
    if (project) router.push(`/project/${project.id}`);
  }, [loading]);

  if (!isOrgLoaded || !isUserLoaded) {
    return null;
  }

  // CHECKING IF THE USER IS NOT ADMIN
  if (!isAdmin) {
    return (
      <div className="flex flex-col gap-4 pt-60 items-center">
        <span className="text-5xl gradient-title text-center">
          Oops! Only Admins can create projects.
        </span>
        <OrgSwitcher />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-6xl text-center font-bold mb-8 gradient-title">
        Create New Project
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        {/* LOADING BAR AFTER CREATING PROJECT */}
          {loading && (
            <BarLoader width={"100%"} color="#bf65ff" />
          )}
        {/* PROJECT NAME INPUT  */}
        <div>
          <Input
            id="name"
            {...register("name")}
            className="bg-white text-black"
            placeholder="Project Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        {/* PROJECT KEY INPUT */}
        <div>
          <Input
            id="key"
            {...register("key")}
            className="bg-white text-black"
            placeholder="Project Key (Ex: RCYT)"
          />
          {errors.key && (
            <p className="text-red-500 text-sm mt-1">{errors.key.message}</p>
          )}
        </div>
        {/* PROJECT DESCRIPTION INPUT */}
        <div>
          <Textarea
            id="description"
            {...register("description")}
            className="bg-white h-28 text-black"
            placeholder="Project Description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        {/* CREATE PROJECT BUTTON */}
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          variant="destructive"
          className="text-lg text-white hover:!scale-100"
        >
          {loading ? "Creating..." : "Create Project"}
        </Button>
        {error && <p className="text-red-500 mt-2">{error.message}</p>}
      </form>
    </div>
  );
}
