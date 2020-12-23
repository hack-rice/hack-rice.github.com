/**
 * The heading that appears while a user is being redirected.
 * @type {string}
 */
export const intro = "HackRice X: Redirecting to sponsorship package...";

/**
 * A list of bullet points that help a user if the page doesn't redirect.
 * @type {{button: string, note: string, icon: string, href: string}[]}
 */
export const bullets = [
  {
    icon: "https://icon.now.sh/calendar/ffffff",
    button: "Click here",
    href: "../static/sponsorships.pdf",
    note: "If you haven't been redirected to the sponsorship package."
  }
].map(bullet => {
  bullet.key = `bullet-${bullet.button}`;
  return bullet;
});