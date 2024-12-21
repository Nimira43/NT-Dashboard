import * as React from 'react'

import { cn } from '@/lib/utils'

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
