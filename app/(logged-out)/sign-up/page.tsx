'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { Satellite } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
    email: z.string().email(),
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(), 
    dob: z.date().refine(() => {
      const today = new Date()
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      )
      return date <= eighteenYearsAgo 
    }, 'You must be at least 18 years old to sign up')

}).superRefine((data, ctx) => {
  if (data.accountType === 'company' && !data.companyName) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['companyName'],
      message: 'Company name is required'
    })
  }
  if (data.accountType === 'company' && (!data.numberOfEmployees || data.numberOfEmployees < 1)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['numberOfEmployees'],
      message: 'Number of employees is required'
    })
  }
})

export default function SignupPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: '',
        // password: ''
    }
  })
  const handleSubmit = () => {
    console.log('Login successful')
  }

  const accountType = form.watch('accountType')

  return (
    <>
      <Satellite size={50} className='text-[#ea580c]' />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>
            Sign Up
          </CardTitle>
          <CardDescription>
            Sign Up for a NT Dashboard account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-4'
              onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField 
                control={form.control} 
                name='email' 
                render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input       
                        placeholder='you@company.com' 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />    
                  </FormItem>                     
                )}
              />
              <FormField
                  control={form.control}
                  name='accountType'
                  render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                        Account Type
                    </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select an account type' />
                        </SelectTrigger>                            
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='personal'>
                            Personal
                        </SelectItem>
                        <SelectItem value='company'>
                            Company
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>                                
                )}
              />
              {accountType === 'company' && (
                <>
                  <FormField 
                    control={form.control} 
                    name='companyName' 
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input       
                            placeholder='Company Name' 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />    
                      </FormItem>                     
                    )}
                  />
                  <FormField 
                    control={form.control} 
                    name='numberOfEmployees' 
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>
                          Employees
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type='number'
                            min={0}      
                            placeholder='Employees' 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />    
                      </FormItem>                     
                    )}
                  />
                </>
              )}
              <FormField 
                control={form.control} 
                name='dob' 
                render={({field}) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant='outline'
                              className='normal-case'
                            >
                              Select Date
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                      </Popover>
                    <FormMessage />    
                  </FormItem>                     
                )}
              />
              <Button type='submit'>
                  Sign Up
              </Button> 
            </form>
          </Form>
        </CardContent>
        <CardFooter className='justify-between'>
          <small>Already have an account?</small>
          <Button asChild variant='outline' size='sm'>
            <Link href='/login'>
              Login
            </Link>
          </Button>
        </CardFooter>
      </Card> 
    </>
  )
}