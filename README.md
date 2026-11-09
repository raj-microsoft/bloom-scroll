# Bloom
A fictional spring bulb subscription told through a photorealistic AI-generated tulip time-lapse.

## Guide and method
[Codex + Kling = $15k Animated Website](https://youtu.be/eUkCSssoYHw), Harnoor Singh / Singh in USA. Library guides 08 and 14 describe the same workflow: reference → START/END → transition video → scroll progress → iterate.

**ChatGPT image generation** created the supplied start/end references. **Gemini Veo** generates the growth video from the start image using a new chat in the owner's authorized logged-in browser. The interface did not expose a last-frame input, so the end reference is art direction rather than an exact output constraint. All imagery is labelled AI-generated, not documentary botanical photography.

ffmpeg encodes the resulting film as silent H.264, every frame an I-frame, 15 fps at 1280 × 720, with faststart. JavaScript maps bounded scroll progress to `video.currentTime`, coalescing seek events. A downloaded Blob supports hosts without byte-range seeking. A still chapter mode supports reduced motion and media failures. The video contains 150 frames over 10 seconds and is 7,520,751 bytes. Current payload/provenance: `assets/provenance.json`.

## Serving and rebuilding media
Serve this directory with any static server. No build step, framework, telemetry, form submission or backend.
```
ffmpeg -i bloom-veo.mp4 -an -vf fps=15,scale=1280:720 -c:v libx264 -crf 23 -preset slow -g 1 -keyint_min 1 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart assets/bloom.mp4
```
The original `generate.py` is retained as historical source but is not used by the current media. Chapter stills come from the same Veo film, keeping still mode consistent with animation. Typeface: self-hosted Figtree, SIL OFL (`assets/FONT-LICENSE.txt`). Growth timing is illustrative.

## Testing
`test.cjs` uses the host's playwright-core and installed headless Edge. It checks 1440/390 layouts, forward/reverse seeking, box preview open/close, reduced motion and page errors. Set `TEST_URL` to test the published page. Design documentation remains in PRODUCT.md, SURFACE.md, DESIGN.md and `.impeccable/design.json`.
