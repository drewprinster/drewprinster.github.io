# Publication thumbnails

Drop one image per paper in this directory, then point the paper's front
matter at it:

```yaml
thumbnail: /images/publications/watch.png
thumbnail_alt: 'Weighted conformal test martingale detecting a shift'   # optional
```

A paper with no `thumbnail` simply renders without one, so you can add
these gradually.

## Format

Use **PNG** for figures, diagrams, and plots (lossless, crisp text), or
**SVG** if you have the vector original. Use **JPEG** only for
photographs.

**PDF will not work** — browsers cannot display a PDF in an image slot.
Most paper figures start life as PDF, so export or convert first. On
macOS, with no extra tools:

```sh
# PDF (first page) -> PNG at 2x the display size
sips -s format png --resampleWidth 600 figure.pdf --out watch.png
```

## Size and shape

The thumbnail is displayed in a **150 x 112 px** box (4:3). Supply
roughly **600 x 450 px** so it stays sharp on high-density screens.

Images are fitted with `object-fit: contain`, so nothing gets cropped —
but an image that is much taller or wider than 4:3 will letterbox. For
the tidiest result, crop to about 4:3 before adding it. Keep the file
under ~200 KB so the page stays fast.

## Gotcha

**Do not start a filename with an underscore.** Jekyll treats
`_something.png` as a private source file and never copies it into the
built site, so the image will 404 with no build error.
