import { getMember } from "@/features/members/utils";

import { DATABASE_ID, PROJECTS_ID } from "@/config";
import { createSessionClient } from "@/lib/appwrite";

import { Project } from "./types";

interface GetProjectProps {
  projectId: string;
};

export const getproject = async ({
  projectId
}: GetProjectProps) => {

  const { databases, account } = await createSessionClient()

  const user = await account.get();

  const project = await databases.getDocument<Project>(
    DATABASE_ID,
    PROJECTS_ID,
    projectId,
  );
  const member = await getMember({
    databases,
    workspaceId: project.workspaceId,
    userId: user.$id,
  })

  if (!member) {
    throw new Error("Unauthorized");
  };

  return project;

};