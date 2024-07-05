"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { Satellite } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
    email: z.string().email(),
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional()

  // password: z.string(), 
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
                                        <SelectContent></SelectContent>
                                    </Select>
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