
function CategoryFilter({categories, handleClassToggle, selectedCategory}) {

  const displayBtn = categories.map(category => (
    <button key={category} onClick={() => handleClassToggle(category)} 
      className={selectedCategory === category ? "selected" : ""}>
      {category}
    </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayBtn}
    </div>
  );
}

export default CategoryFilter;
