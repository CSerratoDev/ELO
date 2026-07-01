import Image from "next/image";
import styles from "./MobileCard.module.css"
import { ReactNode } from "react";

type MobileCardProps = {
    title?: string;
    description?: string;
    img?: string;
    icon?: ReactNode;
    alt?: string;
};

export default function MobileCard({
    title,
    description,
    img,
    icon,
    alt = "Imagen de la tarjeta",
}: MobileCardProps) {
    return (
        <article className={styles.card}>
            {img && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={img}
                        alt={alt}
                        width={400}
                        height={240}
                        className={styles.image}
                    />
                </div>
            )}

            {(title || description) && (
                <div className={styles.content}>
                    {icon && <div className={styles.icon}>{icon}</div>}
                    {title && <h3 className={styles.title}>{title}</h3>}
                    {description && <p className={styles.description}>{description}</p>}
                </div>
            )}
        </article>
    );
}