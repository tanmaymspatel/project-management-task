import { QueryTags } from "../../../core/utility/constants/constants";
import { commonServices } from "../../../core/utility/services/service";
import { ITask } from "../models/models";

export const taskServices = commonServices.injectEndpoints({
  endpoints: (builder) => ({
    getTasksByUserId: builder.query<ITask[], { userId: string }>({
      query: ({ userId }) => ({
        method: "GET",
        url: `tasks?userId=${userId ?? ""}`,
      }),
      providesTags: [QueryTags.TASK_LIST],
    }),
    // Add Project
    addTask: builder.mutation<ITask, { body: ITask }>({
      query: ({ body }) => ({
        method: "POST",
        url: `tasks`,
        data: body,
      }),
      invalidatesTags: (result: ITask | undefined) => {
        if (result) {
          return [QueryTags.TASK_LIST];
        } else return [""];
      },
    }),
    // Edit Project
    editTask: builder.mutation<ITask, { body: ITask }>({
      query: ({ body }) => ({
        method: "PUT",
        url: `tasks/${body.id}`,
        data: body,
      }),
      invalidatesTags: (result: ITask | undefined) => {
        if (result) {
          return [QueryTags.TASK_LIST];
        } else return [""];
      },
    }),
    // Delete Project
    deleteTask: builder.mutation<ITask, { id: string }>({
      query: ({ id }) => ({
        method: "DELETE",
        url: `tasks/${id}`,
      }),
      invalidatesTags: (result: ITask | undefined) => {
        if (result) {
          return [QueryTags.TASK_LIST];
        } else return [""];
      },
    }),
  }),
});

export const {
  useGetTasksByUserIdQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = taskServices;
