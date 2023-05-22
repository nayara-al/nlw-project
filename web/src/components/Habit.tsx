import { IHabits } from "../interfaces/IHabits";

export default function Habit(props: IHabits) {
  return (
    <div className="bg-gray-800 w-10 h-10 text-white rounded m-2 flex items-center justify-center">
      {props.completed}
    </div>
  )
}
