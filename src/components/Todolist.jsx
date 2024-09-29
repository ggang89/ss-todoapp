export default function Todolist({
  isEditing,
  handleTodo,
  todotitle,
  editBtn,
  delBtn,
}) {
  return (
    <>
      {isEditing ? (
        <>
          <input onChange={handleTodo} value={todotitle}></input>
          <button onClick={editBtn}>저장</button>
        </>
      ) : (
        <>
          <span>{todotitle}</span>
          <button onClick={editBtn}>수정</button>
          <button onClick={delBtn}>삭제</button>
        </>
      )}
    </>
  );
}
