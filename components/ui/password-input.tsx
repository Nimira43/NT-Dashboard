'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Input } from './input'
import { EyeIcon } from 'lucide-react'

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const {showPassword, setShowPassword} = React.useState(false)
    return (
      <div className='relative'>
        <Input {...props} ref={ref} className={cn('pr-10', className)}/>
        <span className='absolute top-[7px] right-2 cursor-pointer select-none'>
          <EyeIcon />
        </span>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
