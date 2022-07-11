import { useState } from "react";

const Investment = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <section>
      <form action="">
        <select name="" id="">
          <option value="">Tesouro Prefixado</option>
          <option value="">Tesouro Selic</option>
          <option value="">Tesouro IPCA+: IPCA</option>
          <option value="">CDB e LC</option>
          <option value="">LCI e LCA</option>
        </select>
        <input type="nunber" value="" />
        <input type="nunber" />
        <input
          type="range"
          name=""
          id=""
          list="month"
          min={0}
          max={11}
          step={1}
          onChange={(e) => setValue(e.target.value)}
        />
        <datalist id="month">
          <option value="1"></option>
          <option value="2"></option>
          <option value="4"></option>
          <option value="6"></option>
          <option value="8"></option>
          <option value="10"></option>
          <option value="12"></option>
          <option value="24"></option>
          <option value="48"></option>
          <option value="96"></option>
          <option value="192"></option>
          <option value="384"></option>
        </datalist>
      </form>
    </section>
  );
};
export default Investment;
