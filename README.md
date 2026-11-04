# Takku Li — personal website

A Jekyll / GitHub Pages homepage for my work on agentic AI systems, with a focus on security and privacy. The homepage uses its own lightweight layout and stylesheet, with no JavaScript or external font requests. The original Minimal Mistakes layouts remain available for older pages.

## Update content

- **Introduction:** edit the text in `index.md`.
- **Top image:** add your image under `images/`, then change `image.feature` in the front matter of `index.md`. Update `image.alt` to describe it, set `image.position` to adjust cropping, and change or remove `image.caption`. The layout reserves a wide banner and crops it responsively.
- **Projects:** edit `_data/projects.yml`. Each entry supports a title, optional subtitle and role, category, description, URL, link label, optional demo URL, image, image alt text, and tags. Set `archived: false` for selected projects or `archived: true` for earlier work. Add only projects intended for public display.
- **Contact links and site description:** edit `_config.yml`.
- **Appearance:** edit `assets/css/personal.css`; the homepage template is `_layouts/personal.html`.

Project images are original conceptual SVG illustrations, not product screenshots or measured results. BJMR uses a social graph, Eloquence uses conversation waveforms, the game recommendation system uses a retrieval diagram, and Async4Ai uses a task graph. Replace their paths in the project data if you want to use screenshots. VeilGate is currently a private repository, which its link label makes explicit. Noetic is presented as a business in the introduction, without a link or a separate project entry. Earlier projects share one “Earlier work” heading; their category can be omitted to avoid repeated labels.

## Local preview

With a compatible Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open the local URL printed by Jekyll. To check the production build:

```sh
bundle exec jekyll build
```

Deployment continues through the repository's existing GitHub Pages configuration.

## Credits

The homepage's visual direction takes inspiration from Periodic Labs, with a personal introduction and project structure inspired by Robert T. Lange's website. No reference-site code or assets are included. Legacy theme files originate from [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes); see `LICENSE`.
