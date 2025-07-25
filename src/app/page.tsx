import SignIn from "@/components/sign-in"
import { auth } from "@/lib/auth"
 
export default async function Home() {
  const session = await auth()
 
  if (!session?.user) return <SignIn />
 
  return (
    <div>
      <p>Hello, {session.user.name}</p>
    </div>
  )
}