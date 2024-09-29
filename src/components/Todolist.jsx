export default function Todolist({
  isEditing,
  handleTodo,
  todotitle,
  editBtn,
  delBtn,
}) {
  return (
    <div className="bg-red-50 w-[600px] p-3 flex justify-center">
      {isEditing ? (
        <>
          <input
            className="bg-red-50 font-bold  h-[30px] w-[390px] mr-5 border-b-2 text-center"
            onChange={handleTodo}
            value={todotitle}
          ></input>
          <button
            className=" px-3 py-1 rounded-xl bg-[white] text-[skyblue] font-bold hover:bg-sky-700"
            onClick={editBtn}
          >
            저장
          </button>
        </>
      ) : (
        <>
          <p className=" pl-5 font-bold  h-[30px] w-[350px] mr-5 border-b-2">
            {todotitle}
          </p>
          <button
            className="mr-2 px-3 py-1 rounded-xl bg-[skyblue] text-white font-bold hover:bg-sky-700"
            onClick={editBtn}
          >
            수정
          </button>
          <button
            className="px-3 py-1 rounded-xl bg-[skyblue] text-white font-bold hover:bg-red-400"
            onClick={delBtn}
          >
            삭제
          </button>
        </>
      )}
    </div>
  );
}
