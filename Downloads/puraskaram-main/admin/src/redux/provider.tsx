"use client";
 
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import AuthCom from "@/app/components/auth/auth-com";
 
type Props = {
  children: ReactNode;
};
 
export function Providers({ children }: Props) {
  return (
<Provider store={store}>
<AuthCom>
        {children}
<ToastContainer position="top-right" autoClose={3000} />
</AuthCom>
</Provider>
  );
}