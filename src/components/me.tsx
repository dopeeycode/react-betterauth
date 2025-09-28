import { useQuery } from "@tanstack/react-query"

export function Me() {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3333/users/1', {
        credentials: 'include'
      })
      const data = await res.json()
      
      return data
    },
  })

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
} 