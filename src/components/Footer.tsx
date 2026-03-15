import "./Footer.css"
import { useLanguage } from "../context/LanguageContext"

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">

      <p>{t('footer.copyright')}</p>

    </footer>
  )
}

export default Footer
