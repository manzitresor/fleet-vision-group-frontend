import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div>
        <div className=" flex flex-col items-center justify-center">
            <h4 className="text-2xl">Contact us</h4>
            <hr className="w-31 h-px my-3 bg-main-orange border-0"></hr>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input defaultValue="test" {...register("example")} />
          <Input {...register("exampleRequired", { required: true })} />
          <Button></Button>
        </form>
    </div>
  )
}
