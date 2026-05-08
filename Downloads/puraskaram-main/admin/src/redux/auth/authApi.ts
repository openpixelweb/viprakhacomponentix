import { apiSlice } from "@/redux/api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";
import { IAddStuff, IAdminGetRes, IAdminLoginAdd, IAdminLoginRes, IAdminRegisterAdd, IAdminRegisterRes, IAdminUpdate, IAdminUpdateRes, IStuff } from "@/types/admin-type";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    registerAdmin: builder.mutation<IAdminRegisterRes, IAdminRegisterAdd>({
      query: (data) => ({
        url: "api/admin/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data, accessToken: (result.data as any)?.accessToken }));
        } catch (err) {
          // do nothing
        }
      },
    }),
    loginAdmin: builder.mutation<IAdminLoginRes, IAdminLoginAdd>({
      query: (data) => ({
        url: "api/admin/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data, accessToken: (result.data as any)?.accessToken }));
        } catch (err) {
          // do nothing
        }
      },
    }),
    getMe: builder.query<IAdminLoginRes, void>({
      query: () => "/api/admin/me",
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data, accessToken: (result.data as any)?.accessToken }));
        } catch (err) {
          dispatch(userLoggedOut());
        }
      },
    }),
    logoutAdmin: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "api/admin/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } finally {
          dispatch(userLoggedOut());
        }
      },
    }),
    forgetPassword: builder.mutation<{message:string},{email:string}>({
      query: (data) => ({
        url: "api/admin/forget-password",
        method: "PATCH",
        body: data,
      }),
    }),
    adminConfirmForgotPassword: builder.mutation<{message:string},{token:string,password:string}>({
      query: (data) => ({
        url: "api/admin/confirm-forget-password",
        method: "PATCH",
        body: data,
      }),
    }),
    adminChangePassword: builder.mutation<{ message: string }, { email: string; oldPass: string; newPass: string }>({
      query: (data) => ({
        url: "api/admin/change-password",
        method: "PATCH",
        body: data,
      }),
    }),
    updateProfile: builder.mutation<IAdminUpdateRes, { id: string, data: IAdminUpdate }>({
      query: ({ id, ...data }) => ({
        url: `/api/admin/update-stuff/${id}`,
        method: "PATCH",
        body: data.data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data, accessToken: (result.data as any)?.accessToken }));
        } catch (err) {
          // do nothing
        }
      },
      invalidatesTags:["AllStaff"]
    }),
    addStaff: builder.mutation<{ message: string }, IAddStuff>({
      query: (data) => ({
        url: "api/admin/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AllStaff"]
    }),
    getAllStaff: builder.query<IAdminGetRes, void>({
      query: () => `/api/admin/all`,
      providesTags: ["AllStaff"],
      keepUnusedDataFor: 30,
    }),
    deleteStaff: builder.mutation<{ message: string }, string>({
      query(id: string) {
        return {
          url: `/api/admin/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["AllStaff"],
    }),
    getStuff: builder.query<IStuff, string>({
      query: (id) => `/api/admin/get/${id}`,
      providesTags: ['Stuff']
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useRegisterAdminMutation,
  useLazyGetMeQuery,
  useLogoutAdminMutation,
  useForgetPasswordMutation,
  useAdminConfirmForgotPasswordMutation,
  useAdminChangePasswordMutation,
  useUpdateProfileMutation,
  useGetAllStaffQuery,
  useAddStaffMutation,
  useDeleteStaffMutation,
  useGetStuffQuery,
} = authApi;
