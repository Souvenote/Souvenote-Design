export default function Ornaments() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{display:'none'}}>
      <defs>
        <symbol id="orn-cross" viewBox="0 0 24 24">
          <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" stroke-width="1.5"/>
          <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" stroke-width="1.5"/>
        </symbol>
        <symbol id="orn-plus" viewBox="0 0 24 24">
          <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" stroke-width="1.5"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="1.5"/>
        </symbol>
      </defs>
    </svg>
  );
}
