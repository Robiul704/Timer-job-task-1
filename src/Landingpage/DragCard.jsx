import UseComplite from "../useaxios/UseComplite";
import UseOnGoing from "../useaxios/UseOnGoing";
import UseToDo from "../useaxios/UseToDo";


const DragCard = () => {
    const [todo]=UseToDo()
    const [ongoing]=UseOnGoing()
    const [complite]=UseComplite()
    console.log(todo,ongoing,complite)

    return (
        <div>
           <div className="">
            {
                todo.map(to=> <article 
                    className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                  >
                    <div className="rounded-[10px] bg-white   sm:p-6">
                  
                      <a href="#">
                        <h3 className=" text-lg font-medium text-gray-900">
                         {to.title} 
                        </h3>
                        <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                        >
                          Deadline {to.deadline} days
                        </span>
                  
                        <span
                          className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                        >
                          Priority {to.priority}
                        </span>
                      </a>
                      <p>{to.description}</p>
                    </div>
                  </article>)
            }
           </div>
        </div>
    );
};

export default DragCard;