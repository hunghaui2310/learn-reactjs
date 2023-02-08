import clsx from 'clsx';
import styles from './heading.module.css';
import styles2 from './Index.module.scss';

function Button() {
    return (
        <>
            <button className={styles.btn}>Click me</button>
            <button className={clsx(styles.active, styles.btn)}>Click me</button>
            <button className={clsx(styles.btn, {
                [styles2.disabled]: true
            })}>Click me</button>
        </>
    )
}

export default Button;