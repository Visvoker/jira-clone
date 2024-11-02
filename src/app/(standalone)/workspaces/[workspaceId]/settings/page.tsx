import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

interface WorkspaceIdSettingPagePops {
  params: {
    workspaceId: string;
  }
}

const WorkspaceIdSettingPage = async ({
  params,
}: WorkspaceIdSettingPagePops) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")
  return (
    <div>
      WorkspaceIdSettingsPage :{params.workspaceId}
    </div>
  );
}

export default WorkspaceIdSettingPage;