import { apiSlice } from "."

const baseUrl = '/auth'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: credentials => ({
        url: `${baseUrl}/login`,
        method: 'POST',
        body: credentials
      })
    }),
    register: build.mutation({
      query: credentials => ({
        url: `${baseUrl}/register`,
        method: 'POST',
        body: credentials
      })
    }),
    refresh: build.mutation({
      query: () => `${baseUrl}/refresh`,
    }),
    forgotPassword: build.mutation({
      query: credentials => ({
        url: `${baseUrl}/forgot-password`,
        method: 'POST',
        body: credentials
      })
    }),
    resetPassword: build.mutation({
      query: ({ id, token, password, confirmPassword }) => ({
        url: `${baseUrl}/reset-password/${id}/${token}`,
        method: 'PATCH',
        body: { password, confirmPassword },
      })
    }),
    verifyUser: build.mutation({
      query: credentials => ({
        url: `${baseUrl}/verify`,
        method: 'PATCH',
        body: credentials,
      })
    }),
    resendOtp: build.mutation({
      query: credentials => ({
        url: `${baseUrl}/resend-otp`,
        method: 'PATCH',
        body: credentials,
      })
    }),
  }),
  overrideExisting: false,
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useResendOtpMutation,
  useVerifyUserMutation,
} = extendedApi