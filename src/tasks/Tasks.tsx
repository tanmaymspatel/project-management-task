import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import UiHeader from "../shared/components/UiHeader";
import UiSkeleton from "../shared/components/UiSkeleton";
import UiWrapper from "../shared/components/UiWrapper";
import NewTaskBtn from "./components/NewTaskBtn";
import TaskCard from "./components/TaskCard";
import { useGetTasksByUserIdQuery } from "../shared/utility/services/services";
import { getFilteredList } from "../shared/utility/helpers/helpers";
import { ITask } from "../shared/utility/models/models";

const Tasks = () => {
  const theme = useMantineTheme();
  const isAdminRole = localStorage.getItem("isAuthenticated") === "true";
  const { userId = "", projectId = "" } = useParams();
  const { data: tasks, isFetching } = useGetTasksByUserIdQuery({
    userId: userId,
  });
  const projectTasks =
    tasks && tasks?.filter((task) => task.projectId === projectId);

  const completedTasks = getFilteredList(
    projectTasks as ITask[],
    "status",
    "completed"
  );
  const activeTasks = getFilteredList(
    projectTasks as ITask[],
    "status",
    "active"
  );
  const newTasks = getFilteredList(projectTasks as ITask[], "status", "new");

  return (
    <UiWrapper>
      <UiHeader pageTitle={"Tasks"}>{isAdminRole && <NewTaskBtn />}</UiHeader>
      <Box style={{ backgroundColor: theme.colors.gray[1] }} h={"100%"}>
        <Container size={"xl"} my={"lg"} h={"100%"}>
          {isFetching ? (
            <UiSkeleton />
          ) : (
            <Grid gutter={"lg"} h={"100%"} py={"sm"}>
              <Grid.Col md={4} style={{ overflow: "auto" }} h={"100%"}>
                <Stack>
                  <Title order={5}>New Tasks</Title>
                  <Stack>
                    {newTasks.length > 0 ? (
                      newTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))
                    ) : (
                      <Text c="dimmed">NO TASKS</Text>
                    )}
                  </Stack>
                </Stack>
              </Grid.Col>
              <Grid.Col md={4} style={{ overflow: "auto" }} h={"100%"}>
                <Stack>
                  <Title order={5}>Active Tasks</Title>
                  <Stack>
                    {activeTasks.length > 0 ? (
                      activeTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))
                    ) : (
                      <Text c="dimmed">NO TASKS</Text>
                    )}
                  </Stack>
                </Stack>
              </Grid.Col>
              <Grid.Col md={4} style={{ overflow: "auto" }} h={"100%"}>
                <Stack>
                  <Title order={5}>Completed Tasks</Title>
                  <Stack>
                    {completedTasks.length > 0 ? (
                      completedTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))
                    ) : (
                      <Text c="dimmed">NO TASKS</Text>
                    )}
                  </Stack>
                </Stack>
              </Grid.Col>
            </Grid>
          )}
        </Container>
      </Box>
    </UiWrapper>
  );
};

export default Tasks;
