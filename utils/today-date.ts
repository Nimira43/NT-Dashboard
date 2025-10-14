import { useEffect, useState } from 'react'

function TodayDate() {
  const [date, setDate] = useState<string | null>(null)

  useEffect(() => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    setDate(formattedDate)
  }, [])
}