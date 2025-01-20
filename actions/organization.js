"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getOrganization(slug){
        const { userId } = auth();

        //Check if User is not Valid
        if(!userId){
                throw new Error("Unauthorized");
        }
        
        // Finding Unique User from Clerk
        const user = await db.user.findUnique({
                where: { clerkUserId: userId },
        });
        
        if(!user){
                throw new Error("User Not Found!");
        }

        // Finding the Organization from the Organization List
        const organization = await clerkClient().organizations.getOrganization({
                slug
        })

        if(!organization){
                return null;
        }

        // Fetching the Organization Members
        const {data: membership} = await clerkClient().organizations.getOrganizationMembershipList({
                organizationId: organization.id,
        })

        // Checking if the Member trying to access the Organization is a Part of it or NOT
        const userMembership = membership.find(
                (member) => member.publicUserData.userId === userId
        );

        if(!userMembership){
                return null;
        }

        return organization;
}