import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.list}>
                <div className={styles.lists}>
                    <div className={styles.about}>
                        <h2 className="text-lg font-semibold mb-2">Company</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className={styles.support}>
                        <h2 className="mb-2">Support</h2>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <h2 className=" mb-2">Social</h2>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>                
            </section>
            <div className="d-flex align-items-center">
                <hr className={styles.hr} />
            </div>
        </footer>

    );
}
