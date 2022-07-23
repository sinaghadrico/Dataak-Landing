import Image, { ImageProps } from "next/image";
interface IconProps extends ImageProps {}

export function Icon({ src = "", ...restProps }: IconProps) {
    return typeof src === "string" && src?.startsWith("ri") ? (
        <i {...restProps} className={`${src} ${restProps?.className ? restProps?.className : ""}`} />
    ) : (
        <Image {...restProps} src={src} />
    );
}
