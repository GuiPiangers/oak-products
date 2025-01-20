import { IdContext } from '@/contexts/IdContext'
import { useContext } from 'react'

export default function useIdContext() {
    const hookContext = useContext(IdContext)

    if (hookContext === undefined) {
      throw new Error('Não está dentro do contexto')
    }
  
    return hookContext
}