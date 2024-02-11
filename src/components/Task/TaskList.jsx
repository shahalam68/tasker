export default function TaskList({ tasks, onFav, onEdit, onDelete }) {
  function getRandomColor() {
    // Generate random values for RGB channels
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Combine values into a CSS color string
    return `rgb(${r}, ${g}, ${b})`;
  }
  return (
    <>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {" "}
                Description{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {" "}
                Tags{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Options{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                key={task.id}
              >
                <td>
                  <button onClick={() => onFav(task.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-star"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="gray"
                      fill={task.isFavorite ? "yellow" : "gray"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  </button>
                </td>
                <td>{task.title}</td>
                <td>
                  <div>{task.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                      <li key={tag}>
                        <span
                          className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
                          style={{ backgroundColor: getRandomColor() }}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-center">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={() => onDelete(task.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => onEdit(task)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
