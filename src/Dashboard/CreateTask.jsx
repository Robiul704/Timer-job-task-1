import {  useForm } from 'react-hook-form';
import UseAxiosPublic from '../useaxios/UseAxiosPublic';
import UseToDo from '../useaxios/UseToDo';

const CreateTask = () => {
    const AxiosPublic=UseAxiosPublic()
    const [todo]=UseToDo()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit= (data) => {
        console.log(data)
        const title=data.title
        const deadline=data.deadline
        const priority=data.priority
        const description=data.description
        const id=todo.length+1
        console.log(id)
        console.log(title,deadline,priority,description)
        const body={title,deadline,priority,description}

        AxiosPublic.post('/todo',body)
        .then(res=>{
            console.log(res.data)
        })
      }
      
    return (
        <div className="bg-amber-200 pt-20 h-full w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="grid grid-cols-4 gap-6 p-6 items-center rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Create A Task</p>
				<p className="text-xs"></p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm">Task Title</label>
					<input {...register('title',{ required: true })}  id="username" type="text" placeholder="Title" className="w-full py-3 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    {errors.title && <span className="text-red-900"> name is required</span>}
				</div>
				<select {...register('deadline',{ required: true })} className="select select-primary mt-6 w-[200px] ">
  <option disabled selected>Task Deadlines</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
  <option>11</option>
  <option>12</option>
  <option>13</option>
  <option>14</option>
  <option>15</option>
</select>
{errors.deadline && <span className="text-red-900"> name is required</span>}
<div className="col-span-full sm:col-span-3">
<select {...register('priority',{ required: true })} className="select select-primary mt-6 w-[200px] ">
  <option disabled selected>Task Priority</option>
  <option>Low</option>
  <option>Moderate</option>
  <option>Heigh</option>
</select>
{errors.priority && <span className="text-red-900"> name is required</span>}
</div>
			
				<div className="col-span-full">
					<label for="bio" className="text-sm">Task Description</label>
					<textarea {...register('description',{ required: true })} id="bio" placeholder="Type Here" className="w-full rounded-md p-3 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"></textarea>
                    {errors.description && <span className="text-red-900"> name is required</span>}
				</div>
				
			</div>
            <button className='btn btn-outline bg-gray-300 text-black mx-auto text-center'>Submit</button>
		</fieldset>
            </form>
        </div>
    );
};

export default CreateTask;