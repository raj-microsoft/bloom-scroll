# Bloom
A fictional spring bulb subscription told through an original procedural tulip animation.

## Guide and method
[Codex + GPT 5.5 + Kling = $15k Animated Website](https://youtu.be/eUkCSssoYHw), Harnoor Singh / Singh in USA. Library guides 08 and 14 refer to the same workflow: reference → START/END → transition video → scroll progress → iterate.

Paid GPT image generation and Kling/fal.ai are replaced by original Pillow raster artwork and ffmpeg. No keys or paid services. The reference composition, START, END and all 121 frames are created in `generate.py`. The video is H.264, every frame an I-frame, 30 fps, roughly 1.9 MB. JS maps bounded scroll progress to `video.currentTime`, coalescing seek events. A downloaded Blob supports servers without byte-range seeking. A still chapter mode supports reduced motion and media failures.

## Rebuild
Requires Python, Pillow and ffmpeg.
```
python generate.py
ffmpeg -y -framerate 30 -i frames/%04d.png -c:v libx264 -preset slow -crf 24 -g 1 -keyint_min 1 -pix_fmt yuv420p -movflags +faststart assets/bloom.mp4
```
Serve this directory with any static server. No build step, framework, telemetry, form submission, or backend. Font: self-hosted Figtree under SIL OFL; license in assets/FONT-LICENSE.txt.

## Provenance
Every image is original synthetic procedural artwork by this project, not photography. PNGs contain origin/prompt metadata. WebP stage images and MP4 are derivatives of those procedural frames. `assets/provenance.json` records sources. Biological timing is illustrative.

## Testing
`test.cjs` uses the host's existing playwright-core and installed Edge; adjust the dependency path for another machine. It checks 1440/390 layouts, forward/reverse seeking, box preview open/close, reduced motion and page errors. Set TEST_URL to test the published page. Development records are PRODUCT.md, SURFACE.md, DESIGN.md and .impeccable/design.json; they are not linked by the site.
