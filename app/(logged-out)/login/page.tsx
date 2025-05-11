'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { RiDashboardLine } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(), 
})

export default function LoginPage() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
      console.log('Login successful')
      router.push('/dashboard')
  }

  return (
    <>
      <RiDashboardLine size={50} className='text-main' />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='uppercase'>
            Login
          </CardTitle>
          <CardDescription>
            Login to your NT Dashboard account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(handleSubmit)}>
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
                      type='email' 
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the email address you signed up for NT Dashboard.
                    </FormDescription>
                  <FormMessage />    
                </FormItem>                            
              )}/>
              <FormField 
                control={form.control} 
                name='password' 
                render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      Password
                    </FormLabel>
                    <FormControl>
                      <PasswordInput                   
                        placeholder='********'  
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />    
                  </FormItem>                            
                )}/>
                <Button type='submit' className='uppercase'>
                  Login
                </Button> 
              </form>
            </Form>
          </CardContent>
          <CardFooter className='justify-between'>
            <small>Do not have an account?</small>
            <Button asChild variant='outline' size='sm'>
              <Link href='/sign-up' className='uppercase'>
                Sign Up
              </Link>
            </Button>
          </CardFooter>
        </Card> 
      </>    
    )
}