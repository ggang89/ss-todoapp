export default function Todoinput({ handleInput, addBtn, input, enterKey }) {
  return (
    <>
      <div className="bg-gray-200 w-[600px] p-3 mb-3 flex justify-center">
        <label className="font-bold" id="input">
          새로운 할 일
        </label>
        <input
          className="mx-3 w-[300px] h-[30px] text-center"
          onChange={handleInput}
          id="input"
          value={input}
          placeholder="개발 공부"
          onKeyDown={enterKey}
        />
        <button
          className="px-4 py-1 rounded-xl bg-[skyblue] text-white font-bold hover:bg-sky-700"
          onClick={addBtn}
        >
          추가
        </button>
      </div>
    </>
  );
}