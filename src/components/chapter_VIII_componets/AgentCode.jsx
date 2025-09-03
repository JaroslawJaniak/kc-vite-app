const [items, setItems] = useState([]);

const handleAdd = () => {
  if (
    items.length >=
    Math.max(
      context.firstProfessionData.proficiency.number,
      context.secondProfessionData.proficiency.number
    )
  )
    return;
  // Przykładowa treść elementu: numer pozycji
  setItems((prev) => [...prev, `Element ${prev.length + 1}`]);
};

const isFull = items.length >= proficiencyNumber;
<div style={{ display: "grid", gap: 8 }}>
  {/* Przycisk poza <ul> */}
  <button
    className={context.btnStyle}
    onClick={handleAdd}
    disabled={isFull}
    aria-disabled={isFull}
  >
    ADD
  </button>

  <ul style={{ margin: 0, paddingLeft: 20 }}>
    {items.map((label, i) => (
      <li key={i}>{label}</li>
    ))}
  </ul>

  {/* Informacja o limicie (opcjonalnie) */}
  {isFull && (
    <small style={{ opacity: 0.7 }}>
      Osiągnięto maksymalną liczbę elementów: {proficiencyNumber}.
    </small>
  )}
</div>;
