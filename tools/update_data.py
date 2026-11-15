#!/usr/bin/env python3
"""Actualiza data.json.

  python3 tools/update_data.py --remote
      Lee los repositorios públicos (README de dw4-ps2-ai; licencia, última
      subida y progreso de decomp.dev de dw4-gc). Es lo que ejecuta la Action programada.

  python3 tools/update_data.py --ours RUTA/build/export
      Lee summary.json (solo cifras) de nuestro proyecto y lo vuelca. Se ejecuta
      a mano desde el equipo que tiene el repositorio privado; no se sube nada más.
"""
import argparse, json, re, sys, urllib.request, datetime, pathlib

DATA = pathlib.Path(__file__).resolve().parent.parent / "data.json"
API = "https://api.github.com/repos/"
RAW = "https://raw.githubusercontent.com/"


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "squadworld4-updater"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode()


def pct(readme, label):
    m = re.search(r"\|\s*\**%s\**\s*\|\s*\**([\d.]+)%%" % re.escape(label), readme)
    return float(m.group(1)) if m else None


def remote(d):
    readme = get(RAW + "Namek025/dw4-ps2-ai/main/README.md")
    for key, label in (("total", "Total"), ("game", "Game (`be*`)"), ("lua", "Lua 4.0.1")):
        v = pct(readme, label)
        if v is not None:
            d["namek"][key] = v
    d["namek"]["pushed"] = json.loads(get(API + "Namek025/dw4-ps2-ai"))["pushed_at"][:10]
    gc = json.loads(get(API + "ivanno4317/dw4-gc"))
    d["gc"]["pushed"] = gc["pushed_at"][:10]
    try:  # progreso publicado en decomp.dev (si falla, se conservan los valores anteriores)
        m = json.loads(get("https://decomp.dev/ivanno4317/dw4-gc.json"))["measures"]
        d["gc"]["pct"] = round(m["matched_code_percent"], 2)
        d["gc"]["funcs"] = m["matched_functions"]
        d["gc"]["total"] = m["total_functions"]
    except Exception as e:
        print("decomp.dev no disponible:", e, file=sys.stderr)
    lic = (gc.get("license") or {}).get("spdx_id")
    if lic and lic != "NOASSERTION":
        d["gc"]["license"] = lic


def ours(d, folder):
    s = json.loads((pathlib.Path(folder) / "summary.json").read_text())
    d["ours"] = {"pct": round(s["text"]["pct"], 1), "funcs": s["funcs_done"],
                 "units": s["units"], "updated": s["at"][:10]}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--remote", action="store_true")
    ap.add_argument("--ours")
    a = ap.parse_args()
    if not (a.remote or a.ours):
        ap.error("indica --remote y/o --ours")
    d = json.loads(DATA.read_text())
    if a.remote:
        remote(d)
    if a.ours:
        ours(d, a.ours)
    d["updated"] = datetime.date.today().isoformat()
    DATA.write_text(json.dumps(d, indent=2, ensure_ascii=False) + "\n")
    print("data.json actualizado")


if __name__ == "__main__":
    sys.exit(main())
