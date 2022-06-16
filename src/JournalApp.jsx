import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './themes'

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
