import { IUser } from "../models/models";
import { commonServices } from "./service";

export const authService = commonServices.injectEndpoints({
  endpoints: (builder) => ({
    // get the week off status of selected date range
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        method: "GET",
        url: `users`,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = authService;
