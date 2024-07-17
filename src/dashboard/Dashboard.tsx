import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import UiContainer from "../shared/components/UiContainer";
import UiHeader from "../shared/components/UiHeader";
import UiWrapper from "../shared/components/UiWrapper";

const Dashboard = () => {
  const isAdminRole = localStorage.getItem("isAuthenticated") === "true";
  console.log(isAdminRole);

  return (
    <UiWrapper>
      <UiHeader pageTitle={"Dashboard"}></UiHeader>
      <UiContainer>
        <Alert icon={<IconAlertCircle size={16} />} title="Note!">
          Development is in progress!
        </Alert>
      </UiContainer>
    </UiWrapper>
  );
};

export default Dashboard;
