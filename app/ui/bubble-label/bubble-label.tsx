import styles from "@/app/ui/bubble-label/bubble-label.module.css"

interface BubbleProps {
    text: string;
}

const Bubble = ({text}: BubbleProps)=>{
    return(
        <>
            <small className={styles.label}>{text}</small>
        </>
    )
}

export default Bubble;