import { SignIn } from "./components/sign-in";
import { SignUp } from "./components/sign-up";

export function App() {
  return (
    <div className="flex items-center justify-center">
      <SignIn />
      <SignUp />
    </div>
  )
}

