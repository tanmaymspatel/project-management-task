import { Group, Header, Text, ThemeIcon } from "@mantine/core";
import { IconUserCheck } from "@tabler/icons-react";
import { HEADER_HEIGHT } from "../utility/constants/constants";

const Topbar = () => {
  const userName = localStorage.getItem("userName");

  return (
    <Header height={HEADER_HEIGHT} p={"sm"}>
      <Group position="right" spacing={4}>
        <ThemeIcon variant="light">
          <IconUserCheck size={16} />
        </ThemeIcon>
        <Text>{userName}</Text>
      </Group>
    </Header>
  );
};

export default Topbar;
