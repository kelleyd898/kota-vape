<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep catalog, category, city, service-area, and contact content in dedicated data/config modules so the presentational routes can later use a data API without a UI rewrite.
- Treat the current catalog entries as illustrative research references, not verified listings; do not infer prices, availability, or contact details.
