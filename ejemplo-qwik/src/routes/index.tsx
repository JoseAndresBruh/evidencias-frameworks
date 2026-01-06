import { component$, useSignal, $ } from '@builder.io/qwik';

export default component$(() => {
  const cuenta = useSignal(0);

  const sumar = $(() => cuenta.value++);
  const restar = $(() => cuenta.value--);
  const reiniciar = $(() => cuenta.value = 0);

  return (
    <div style={{
      backgroundColor: '#111', 
      color: '#fff', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#00d4ff', textShadow: '0 0 10px #00d4ff' }}>
        Contador Qwik ⚡
      </h1>

      <div style={{ 
        fontSize: '4rem', 
        margin: '20px', 
        color: cuenta.value < 0 ? '#ff0055' : '#00ff99' 
      }}>
        {cuenta.value}
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <button onClick$={restar} style={{ padding: '10px 20px', fontSize: '1.2rem', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          -1
        </button>
        
        <button onClick$={reiniciar} style={{ padding: '10px 20px', fontSize: '1.2rem', background: '#ffcc00', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          RESET
        </button>

        <button onClick$={sumar} style={{ padding: '10px 20px', fontSize: '1.2rem', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          +1
        </button>
      </div>
      <p>Renderizado instantáneo con Qwik</p>
    </div>
  );
});