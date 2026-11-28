# CuteCat public launch

The homepage CuteCat navigation item is intentionally hidden until the public App Store release. Keep the existing hello@tetiana.tech contact.

Apple app ID recorded for CuteCat: Purr & Sleep: `6837950809`. On 2026-11-23 the App Store URL returned HTTP 404 and Apple lookup returned no result in the US and Ukraine. No public TestFlight invite URL has been supplied. Do not use another similarly named app.

## After release is verified

- Confirm Apple lists this exact ID as CuteCat: Purr & Sleep by Tetiana Hryshchenko (or a separately confirmed seller) and allows download, not just pre-order.
- Remove `hidden` from the homepage `li.nav-product`; preserve its mobile visibility.
- Make the hero Get CuteCat CTA and the download section CTA link to the verified Apple product URL. Use Download on the App Store.
- Update the release status, download FAQ, and coming-soon metadata to match the live listing. Keep beta screenshot labeling unless newer screenshots have been supplied. Do not change verified technical requirements without checking the listing.
- Preserve the emotional positioning, privacy/support/terms pages, and current design.
- Check mobile layout and both download links, then publish to the existing GitHub Pages repository.

If a public TestFlight invite is supplied before release, verify it belongs to this app, label the CTA Try the beta on TestFlight, and keep the homepage navigation hidden until the public App Store release.


## Build 31 website alignment - 28 November 2026

Source pinned to `a483a217065e0c39412eed2cc4bb14f9102d8d45`. Apple confirmed
1.0 (31) available in TestFlight at 18:49 UTC. The matching Xcode Cloud archive
succeeded with zero errors and warnings. This does not establish device QA.

- Replaced the outdated two-beta-screenshot gallery with the five actual companion
  scenes. Each original PNG's Git blob SHA was checked against this commit before
  WebP encoding. See `cutecat-build31-assets.json` for provenance. They are scene
  artwork, not claimed to be native UI screenshots.
- Included: Kitten / Lavender bedroom / Night sounds; Maine Coon / Mountain chalet /
  Fireplace; British / Ocean cottage / Waves. Paid one-time unlocks: Velvet /
  Rainy nook / Rain and Mochi / Warm city / Gentle piano. Tips are separate.
- Updated companion picker, Sound, timer, Restore purchases and TestFlight preview
  instructions. The background-audio description follows this build's audio mode
  and playback implementation. Physical-device lock-screen/timer QA is still needed.
- Privacy and terms now describe companion entitlements as well as tips. Local
  preference descriptions and downloadable text copies match the HTML pages.
- Preserve coming-soon status and the hidden personal-homepage product navigation
  until public App Store availability has been verified. TestFlight availability
  does not establish an App Store release.

Still required for the App Store screenshot pack: native build 31 captures of the
new circular companion picker, Sound with timer, and an included companion. The
GitHub simulator jobs for this commit failed before running any steps and produced
no artifacts. Do not relabel older captures or generate replacement UI.
