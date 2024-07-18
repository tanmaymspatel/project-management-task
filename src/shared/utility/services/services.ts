import { QueryTags } from "../../../core/utility/constants/constants";
import { commonServices } from "../../../core/utility/services/service";
import { IProject, ITask } from "../models/models";

export const sharedServices = commonServices.injectEndpoints({
  endpoints: (builder) => ({
    getProjectsByUserId: builder.query<IProject[], { userId: string }>({
      query: ({ userId }) => ({
        method: "GET",
        url: `projects?userId=${userId ?? ""}`,
      }),
      providesTags: [QueryTags.PROJECT_LIST],
    }),
    getTasksByUserId: builder.query<ITask[], { userId: string }>({
      query: ({ userId }) => ({
        method: "GET",
        url: `tasks?userId=${userId ?? ""}`,
      }),
      providesTags: [QueryTags.TASK_LIST],
    }),
  }),
});

export const { useGetProjectsByUserIdQuery, useGetTasksByUserIdQuery } =
  sharedServices;
