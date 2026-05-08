"use client"
import { useState, useEffect } from "react";
import { RootState } from "./../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetMeQuery } from "@/redux/auth/authApi";
import { userLoggedOut } from "@/redux/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  const [triggerGetMe] = useLazyGetMeQuery();

  useEffect(() => {
    let ignore = false;

    const validateSession = async () => {
      try {
        await triggerGetMe().unwrap();
      } catch (error) {
        dispatch(userLoggedOut());
      } finally {
        if (!ignore) {
          setAuthChecked(true);
        }
      }
    };

    validateSession();

    return () => {
      ignore = true;
    };
  }, [dispatch, triggerGetMe]);

  return { authChecked, user };
}
