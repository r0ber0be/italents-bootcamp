import { useEffect, useState } from "react"

export function InputName() {
  const [name, setName] = useState(() => localStorage.getItem('name') || 'meu caro')

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <input 
      id="name" 
      title="Clique aqui para mudar o seu nome"
      type="text" 
      value={name} 
      autoComplete="name"
      onChange={handleNameChange}
      maxLength={20}
      style={{ 
        width: `${name.length * 16}px`, 
        maxWidth: '300px', 
        fontWeight: "bolder"
      }}
    />
  )
}