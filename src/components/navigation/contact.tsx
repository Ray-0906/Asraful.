import { useCursorStore } from "../../store/useCursorStore";
import { portfolioData } from "../../data/portfolio";

export default function Contact() {
    const { socials } = portfolioData;

    return (
        <>
            <div className="lg:hidden flex flex-row items-end justify-center gap-3 text-[clamp(0.4rem,1.5vw,1.5rem)] font-extralight">
                {socials.linkedin && (
                    <Icon brand="fa-brands fa-linkedin" url={socials.linkedin} label="Visit LinkedIn profile" />
                )}
                {socials.github && (
                    <Icon brand="fa-brands fa-github" url={socials.github} label="Visit GitHub profile" />
                )}
                {socials.leetcode && (
                    <Icon brand="fa-solid fa-code" url={socials.leetcode} label="Visit LeetCode profile" />
                )}
                {socials.instagram && (
                    <Icon brand="fa-brands fa-instagram" url={socials.instagram} label="Visit Instagram profile" />
                )}
                <Email />
            </div>

            <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-2 lg:pt-5 lg:text-[clamp(1rem,1.5vw,1.5rem)] lg:font-extralight">
                {socials.linkedin && (
                    <Icon brand="fa-brands fa-linkedin" url={socials.linkedin} label="Visit LinkedIn profile" />
                )}
                {socials.github && (
                    <Icon brand="fa-brands fa-github" url={socials.github} label="Visit GitHub profile" />
                )}
                {socials.leetcode && (
                    <Icon brand="fa-solid fa-code" url={socials.leetcode} label="Visit LeetCode profile" />
                )}
                {socials.instagram && (
                    <Icon brand="fa-brands fa-instagram" url={socials.instagram} label="Visit Instagram profile" />
                )}
                <Email />
            </div>
        </>
    )
}

type Props = {
    brand: string,
    url: string,
    label: string,
}

function Icon({ brand, url, label }: Props) {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a
            href={url}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
        >
            <i className={`${brand}`} aria-hidden="true" />
        </a>
    )
}

function Email() {
    const set = useCursorStore((state) => state.setCursorType);
    return (
        <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label={`Send an email to ${portfolioData.personal.fullName}`}
            onMouseEnter={() => set("hover")}
            onMouseLeave={() => set("default")}
        >
            <i className="fa-regular fa-envelope" aria-hidden="true" />
        </a>
    )
}
