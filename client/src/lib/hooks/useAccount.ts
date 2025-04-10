import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { LoginSchema } from "../schemas/loginSchema";
import agent from "../api/agent";
import { useNavigate } from "react-router";

export const useAccount = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const loginUser = useMutation({
    mutationFn: async (creds: LoginSchema) => {
      await agent.post("/login?useCookies=true", creds);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  const logoutUser = useMutation({
    mutationFn: async () => {
      await agent.post("/account/logout");
    },
    onSuccess: async () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      queryClient.removeQueries({ queryKey: ["activities"] });
      await navigate("/");
    },
  });

  const { data: currentUser, isLoading: loadingUserInfo } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await agent.get<User>("/account/user-info");
      return response.data;
    },
    enabled: !queryClient.getQueryData(["user"]),
  });

  return { loginUser, logoutUser, currentUser, loadingUserInfo };
};
