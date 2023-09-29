const Form = ({ todo, settodo, onClic, sortby, setSortby }) => {
  return (
    <form className="add-form" onSubmit={onClic}>
      <h3>list of todo 😧 </h3>
      <input
        type="text"
        placeholder="Enter your work..."
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button>Add</button>
      <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
        <option value="all">All</option>
        <option value="complated">complated</option>
        <option value="uncomplated">Uncomplated</option>
      </select>
    </form>
  );
};

export default Form;
