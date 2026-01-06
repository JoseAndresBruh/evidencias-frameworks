<script>
    let count = 0;

    function incrementar() {
        count = count + 1;
    }

    function decrementar() {
        count = count - 1;
    }
</script>

<main>
    <h1>Contador Svelte</h1>

    <p class="Contador">Valor actual: <strong>{count}</strong></p>

    <div class="Botones">
        <button on:click={decrementar}>Disminuir</button>
        <button on:click={incrementar}>Aumentar</button>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 2em;
        max-width: 400px;
        margin: 50px auto;
        border: 2px solid #ff3e00;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
        color: #ff3e00;
        margin-bottom: 0.5em;
    }

    .Contador{
        font-size: 1.5em;
        margin: 1em 0;
        color: #333;
    }

    .Contador strong {
        font-size: 2em;
        display: block;
        color: #000;
    }

    .Botones button {
        background-color: #4CAF50; /* Un color de botón */
        color: white;
        padding: 10px 20px;
        margin: 0 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    }

    .Botones button:hover {
        background-color: #45a049;
    }
    
    .Botones button:first-child {
        background-color: #f44336;
    }
</style>