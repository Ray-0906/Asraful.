type Props = {
    src? : string,
    alt? : string,
    className? : string,
    loading : "eager" | "lazy" | undefined
}

export default function Media({ src, alt, className, loading = undefined }: Props) {
    if (!src) return null;

    // Check for YouTube URL
    if (src.includes("youtube.com") || src.includes("youtu.be")) {
        let embedUrl = src;
        const ytMatch = src.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
        if (ytMatch && ytMatch[1]) {
            embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
        }
        return (
            <iframe
                src={embedUrl}
                title={alt || "Project Video"}
                className={`${className || ""} border-0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }

    const ext = src.split(".").pop()?.toLowerCase();

    const imageExtensions = ["webp", "png", "jpg", "jpeg", "svg", "gif", "avif"];
    const videoExtensions = ["mp4", "webm", "ogg", "mov"];

    if (ext && imageExtensions.includes(ext)) {
        return (
            <img
                src={src}
                alt={alt || "Media"}
                className={className}
                loading={loading}
                decoding="async"
            />
        );
    }

    if (ext && videoExtensions.includes(ext)) {
        return (
            <video
                src={src}
                className={className}
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
            />
        );
    }

    // Default fallback to img
    return (
        <img
            src={src}
            alt={alt || "Media"}
            className={className}
            loading={loading}
            decoding="async"
        />
    );
}
