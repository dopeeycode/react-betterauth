import { useForm } from 'react-hook-form';
import z from 'zod';
import { auth } from '../lib/auth';

const signSchema = z.object({
  email: z.email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
});

type SignInSchema = z.infer<typeof signSchema>;

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInSchema>()

  async function handleSignIn({ email, password }: SignInSchema) {
    await auth.signIn.email({
      email,
      password,
      callbackURL: 'http://localhost:5173'
    }, {
      onError(context) {
        if (context.error.message) {
          alert(context.error.message)
        } else {
          alert('Erro ao fazer login')
        }
      }
    })
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(handleSignIn)} className="flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input 
          type="email" 
          id="email" 
          required 
          className="bg-zinc-900 rounded-lg px-4 py-1.5" 
          {...register('email')}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">Senha:</label>
        <input 
          type="password" 
          id="password" 
          required 
          className="bg-zinc-900 rounded-lg px-4 py-1.5" 

          {...register('password')}
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700">Entrar</button>
    </form>
    </div>
  )
}