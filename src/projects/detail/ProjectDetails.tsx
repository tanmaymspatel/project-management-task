import { Badge, Drawer, Group, Stack, Title } from "@mantine/core";
import { IProject } from "../utility/models/model";
import { getColorByStatus } from "../utility/helpers/helpers";
import ProjectDetailTile from "../components/ProjectDetailTile";
import {
  IconAlignBoxCenterMiddle,
  IconFileDescription,
  IconUserBitcoin,
  IconUserCog,
} from "@tabler/icons-react";

interface IProjectDetailsProp {
  opened: boolean;
  onClose: () => void;
  projectDetails: IProject;
}

const ProjectDetails = ({
  opened,
  onClose,
  projectDetails,
}: IProjectDetailsProp) => {
  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={() => onClose()}
      title={
        <Group position="apart" w={"100%"}>
          <Title order={4}>{projectDetails?.projectName}</Title>
          <Badge
            variant="filled"
            color={getColorByStatus(projectDetails?.status)}
          >
            {projectDetails?.status}
          </Badge>
        </Group>
      }
      padding="xl"
      size="xl"
    >
      <Stack spacing={"sm"} py={"lg"}>
        <ProjectDetailTile
          icon={<IconUserBitcoin size={16} />}
          label="Client Name"
          value={projectDetails?.clientName}
        />
        <ProjectDetailTile
          icon={<IconAlignBoxCenterMiddle size={16} />}
          label="Project Type"
          value={projectDetails?.projectType}
        />
        <ProjectDetailTile
          icon={<IconUserCog size={16} />}
          label="Reporting Manager"
          value={projectDetails?.reportingManager}
        />
        <ProjectDetailTile
          icon={<IconFileDescription size={16} />}
          label="Description"
          value={projectDetails?.description}
        />
      </Stack>
    </Drawer>
  );
};

export default ProjectDetails;
