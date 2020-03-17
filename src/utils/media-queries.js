const size = {
    small: "325px",
    mobile: "414px",
    tablet: "834px",
    laptop: "1080px",
    desktop: "2560px",
}
const device = {
    small: `(max-width: ${size.small})`,
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
}

const contentWidth = "1440px"

module.exports = {
    device: device,
    contentWidth: contentWidth,
}
