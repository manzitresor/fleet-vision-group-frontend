import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import withKeys from '../assets/withKey.svg'

type Inputs = {
  example: string
  exampleRequired: string
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div className='py-10 bg-gray-100'>
        <div className=" flex flex-col items-center justify-center">
            <h4 className="text-2xl">Contact us</h4>
            <hr className="w-31 h-px my-3 bg-main-orange border-0"></hr>
        </div>
        <div className='flex flex-row items-center justify-center gap-4 lg:gap-10 bg-white p-7 mx-64'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-lg'>
            <Input placeholder='Your name' {...register("example")} className='border' />
            <Input placeholder='Your email' {...register("exampleRequired", { required: true })} />
            <Textarea placeholder='Your message' />
            <Button className='bg-main-orange text-white cursor-pointer hover:bg-black'>Send a message</Button>
          </form>
          <img src={withKeys} alt="with keys" className='w-60 h-auto'/>
        </div>
      </div>
  )
}
