import { QueryTags } from "../../../core/utility/constants/constants";
import { commonServices } from "../../../core/utility/services/service";
import { IProject, IProjectFormValues } from "../models/model";

export const projectServices = commonServices.injectEndpoints({
  endpoints: (builder) => ({
    //
    getProjectsByUserId: builder.query<IProject[], { userId: string }>({
      query: ({ userId }) => ({
        method: "GET",
        url: `projects?userId=${userId ?? ""}`,
      }),
      providesTags: [QueryTags.PROJECT_LIST],
    }),
    // Add Project
    addProjectsByUserId: builder.mutation<
      IProjectFormValues,
      { body: IProjectFormValues }
    >({
      query: ({ body }) => ({
        method: "POST",
        url: `projects`,
        data: body,
      }),
      invalidatesTags: (result: IProjectFormValues | undefined) => {
        if (result) {
          return [QueryTags.PROJECT_LIST];
        } else return [""];
      },
    }),
    // Edit Project
    editProjectsByUserId: builder.mutation<
      IProjectFormValues,
      { body: IProjectFormValues }
    >({
      query: ({ body }) => ({
        method: "PUT",
        url: `projects/${body.id}`,
        data: body,
      }),
      invalidatesTags: (result: IProjectFormValues | undefined) => {
        if (result) {
          return [QueryTags.PROJECT_LIST];
        } else return [""];
      },
    }),
    // Delete Project
    deleteProjectsByUserId: builder.mutation<
      IProjectFormValues,
      { id: string }
    >({
      query: ({ id }) => ({
        method: "DELETE",
        url: `projects/${id}`,
      }),
      invalidatesTags: (result: IProjectFormValues | undefined) => {
        if (result) {
          return [QueryTags.PROJECT_LIST];
        } else return [""];
      },
    }),
  }),
});

export const {
  useGetProjectsByUserIdQuery,
  useAddProjectsByUserIdMutation,
  useEditProjectsByUserIdMutation,
  useDeleteProjectsByUserIdMutation,
} = projectServices;
