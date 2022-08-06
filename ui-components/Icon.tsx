import Image, { ImageProps } from "next/image";
interface IconProps extends ImageProps {}
import logoAvatar from "assets/img/avatar.jpg";
export function Icon({ src = "", ...restProps }: IconProps) {
    return typeof src === "string" && src?.startsWith("ri") ? (
        <i {...restProps} className={`${src} ${restProps?.className ? restProps?.className : ""}`} />
    ) : (
        <Image {...restProps} src={src ? src : logoAvatar} />
    );
}
