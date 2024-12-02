"use client"

import { PageError } from "@/components/page-error"
import { PageLoader } from "@/components/page-loader"

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id"
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form"
import { useGetworkspaceInfo } from "@/features/workspaces/api/use-get-workspace-Info"

export const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkspaceId()
  const { data: initialValues, isLoading } = useGetworkspaceInfo({ workspaceId })

  if (isLoading) {
    return <PageLoader />
  }

  if (!initialValues) {
    return <PageError message="Project not found" />
  }
  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  )
}