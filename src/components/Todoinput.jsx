export default function Todoinput({ handleInput, addBtn, input }) {
  
  return (
    <>
      <div>
        <label id="input">새로운 할 일</label>
        <input
          onChange={handleInput}
          id="input"
          value={input}
          placeholder="개발 공부"
        />
        <button onClick={addBtn}>추가</button>
      </div>
    </>
  );
}