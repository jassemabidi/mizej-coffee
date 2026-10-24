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

## Project rules
- Shop info and the full menu (names, prices, categories) live in `src/lib/mizej.ts`; pages read from it so prices are edited in one place.
- Brand colors, fonts and animations are tokens/utilities in `src/styles.css`; components use those, never raw color classes.
