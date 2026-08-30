# Photo Credits

Real reference photos used across the 8 lessons, all sourced from Wikimedia Commons with verified licenses. Each also carries an in-page caption via the `TopicPhoto` component (`src/components/education/TopicPhoto.tsx`), which is the actual license-compliance mechanism — this file is a convenience index, not a substitute for it.

| File | Used in | Author | License | Source |
|---|---|---|---|---|
| `abacus.jpg` | History of Computers | Pearson Scott Foresman | Public Domain | [File:Abacus (PSF).jpg](https://commons.wikimedia.org/wiki/File:Abacus_(PSF).jpg) |
| `eniac.jpg` | History of Computers | U.S. Army | Public Domain | [File:Classic shot of the ENIAC.jpg](https://commons.wikimedia.org/wiki/File:Classic_shot_of_the_ENIAC.jpg) |
| `binary-code.jpg` | Number Systems | Graph+sas | CC BY-SA 4.0 | [File:Binary-code.png](https://commons.wikimedia.org/wiki/File:Binary-code.png) |
| `cpu-macro.jpg` | How a Computer Works | Gormé | CC BY-SA 3.0 | [File:GPU macro.JPG](https://commons.wikimedia.org/wiki/File:GPU_macro.JPG) |
| `keyboard-mouse.jpg` | Input & Output Devices | Jreph | CC BY-SA 3.0 | [File:Keyboard with mouse.jpg](https://commons.wikimedia.org/wiki/File:Keyboard_with_mouse.jpg) |
| `terminal.jpg` | Operating Systems | The GNOME Project | GPL-2.0+ | [File:Linux command-line. Bash. GNOME Terminal. screenshot.png](https://commons.wikimedia.org/wiki/File:Linux_command-line._Bash._GNOME_Terminal._screenshot.png) |
| `network-switches.jpg` | Networking Basics | Jon 'ShakataGaNai' Davis | CC BY-SA 3.0 | [File:Network switches.jpg](https://commons.wikimedia.org/wiki/File:Network_switches.jpg) |
| `fiber-optic.jpg` | Internet Basics | Cable master / Srleffler | CC BY-SA 3.0 | [File:Optical fiber cable.jpg](https://commons.wikimedia.org/wiki/File:Optical_fiber_cable.jpg) |
| `datacenter-rack.jpg` | Types of Computers | Edmondo | CC BY-SA 3.0 | [File:Datacenter Rack.jpg](https://commons.wikimedia.org/wiki/File:Datacenter_Rack.jpg) |

All files live in `public/photos/`, resized/re-encoded to a 900–1200px-wide JPEG (originals ranged up to 11.7MB; optimized versions are 15KB–270KB) — resizing is a mechanical transformation, not a modification requiring extra disclosure under CC BY-SA, but the original source is always linked above for provenance.

## Adding another photo

1. Search Wikimedia Commons first (unambiguous per-file license tags) — see the sourcing rule in [ILLUSTRATION_GUIDELINES.md](./ILLUSTRATION_GUIDELINES.md).
2. Verify the exact license and author on the file's own page before downloading anything — don't infer from a category or search snippet.
3. Resize to ~900–1200px wide and re-encode as JPEG (`ffmpeg -vf "scale='min(1200,iw)':-2" -q:v 4-7`) — originals from Commons are often multi-megabyte.
4. Add a row to this table.
5. Use it via `TopicPhoto`, filling in `author`, `authorUrl` (the file page), `license`, and `licenseUrl` (the license deed) — the caption is the actual compliance mechanism, not optional decoration.
