import React from 'react'
import AcceptTask from '../Task/AcceptTask'
import NewTask from '../Task/NewTask'
import FailTask from '../Task/FailTask'
import CompleteTask from '../Task/CompleteTask'

function Task({ data }) {
    return (
        <div id='scrollbar' className='h-[55%] w-full py-5 mt-10 
    flex gap-5 justify-start flex-nowrap overflow-x-auto'>
            {data.tasks.map((task, idx) => {
                if (task.active) {
                    return <AcceptTask key={idx} task={task} />
                }
                if (task.new_task) {
                    return <NewTask key={idx} task={task} />
                }
                if (task.completed) {
                    return <CompleteTask key={idx} task={task} />
                }
                if(task.failed) {
                    return <FailTask key={idx} task={task} />
                }
                return null
            })}
        </div>
    )
}

export default Task