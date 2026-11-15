# Squad World 4

Sitio web estático del proyecto de decompilación de **Digimon World 4** (PS2), con la pantalla de inicio y el menú de cuatro paneles inspirados en el juego.

Los paneles enlazan al proyecto propio, a [dw4-ps2-ai](https://github.com/Namek025/dw4-ps2-ai) (Namek025), a [dw4-gc](https://github.com/ivanno4317/dw4-gc) (ivanno4317) y a otros recursos. Disponible en inglés, alemán, español e italiano.

Este repositorio solo contiene el sitio: **no incluye código decompilado ni datos del juego.** Proyecto de aficionados sin ánimo de lucro; Digimon es una marca de Bandai Namco y este sitio no está afiliado a ella.

## Datos y actualización

Las cifras de progreso salen de `data.json`.

- `python3 tools/update_data.py --remote` actualiza los datos de los repositorios públicos (README de dw4-ps2-ai; licencia, última subida y progreso de decomp.dev de dw4-gc). Una Action programada lo ejecuta cada día.
- `python3 tools/update_data.py --ours <carpeta build/export>` vuelca el progreso del proyecto propio (solo cifras).

## Probarlo en local

```sh
python3 -m http.server 8872
```

y abrir `http://127.0.0.1:8872/`.
