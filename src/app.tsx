import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignIn } from "./components/sign-in";
import { SignUp } from "./components/sign-up";
import { useState } from "react";
import { Me } from "./components/me";

export function App() {
  const [queryClient] = useState(() => new QueryClient())

  return (
   <QueryClientProvider client={queryClient}>
      <SignIn />
      <SignUp />
      <Me />
   </QueryClientProvider>
  )
}

