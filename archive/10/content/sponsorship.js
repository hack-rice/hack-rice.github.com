/**
 * The title of our sponsoship info section.
 *
 * @type {string} title
 */
export const title = "Interested in Sponsoring?";

/**
 * Bullet list for sponsorship info.
 * @type {{icon : string, button : string, href : string, note : string}[]}
 */
export const bullets = [
    {
      // icon: "https://icon.now.sh/email/ffffff",
      icon: "mail.svg",
      button: "Email us",
      href: "mailto:hack@rice.edu",
      note: "for more information!",
    },

  ].map(bullet => {
    bullet.key = `bullet-${bullet.button}`;
    return bullet;
  });