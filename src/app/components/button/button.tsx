import styles from "./button.module.css"

interface ButtonProps {
    txt: string;
}

export default function ButtonComponent({ txt }: ButtonProps) {
    return (
        <div className={styles.button}>{txt}</div>
    )
}
