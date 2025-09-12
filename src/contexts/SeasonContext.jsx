import { createContext, useContext, useMemo, useState } from 'react'

const SeasonContext = createContext({
  selectedSeasonId: '',
  setSelectedSeasonId: () => {},
})

export const SeasonProvider = ({ children }) => {
  const [selectedSeasonId, setSelectedSeasonId] = useState('')

  const value = useMemo(() => ({ selectedSeasonId, setSelectedSeasonId }), [selectedSeasonId])

  return (
    <SeasonContext.Provider value={value}>
      {children}
    </SeasonContext.Provider>
  )
}

export const useSeason = () => useContext(SeasonContext)

export default SeasonContext
