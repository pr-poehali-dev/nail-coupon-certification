import { useState } from "react";
import Icon from "@/components/ui/icon";

const GiftCertificate = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="certificate-scene" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`certificate-card ${isFlipped ? "is-flipped" : ""}`}>
        {/* ЛИЦЕВАЯ СТОРОНА */}
        <div className="certificate-face certificate-front">
          {/* Фоновые декоративные элементы */}
          <div className="cert-bg-pattern" />
          <div className="cert-corner cert-corner-tl" />
          <div className="cert-corner cert-corner-tr" />
          <div className="cert-corner cert-corner-bl" />
          <div className="cert-corner cert-corner-br" />

          {/* Левая полоса с зубчиками */}
          <div className="cert-left-strip">
            <div className="cert-notch cert-notch-top" />
            <div className="cert-notch cert-notch-bottom" />
            <div className="cert-strip-content">
              <span className="cert-strip-text">ПОДАРОЧНЫЙ СЕРТИФИКАТ</span>
            </div>
          </div>

          {/* Основное содержимое */}
          <div className="cert-main">
            {/* Шапка */}
            <div className="cert-header">
              <div className="cert-logo-area">
                <div className="cert-logo-icon">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="cert-nail-icon">
                    <ellipse cx="20" cy="12" rx="8" ry="10" stroke="#7c3aed" strokeWidth="1.5" fill="none"/>
                    <path d="M12 12 Q12 28 20 32 Q28 28 28 12" stroke="#7c3aed" strokeWidth="1.5" fill="none"/>
                    <path d="M15 8 Q20 5 25 8" stroke="#7c3aed" strokeWidth="1" fill="none"/>
                    <ellipse cx="20" cy="10" rx="5" ry="6" fill="rgba(124,58,237,0.08)"/>
                  </svg>
                </div>
                <div>
                  <div className="cert-salon-name">NAIL STUDIO</div>
                  <div className="cert-salon-tagline">профессиональный маникюр</div>
                </div>
              </div>
            </div>

            {/* Декоративная линия */}
            <div className="cert-divider">
              <div className="cert-divider-line" />
              <div className="cert-divider-diamond">◆</div>
              <div className="cert-divider-line" />
            </div>

            {/* Центральный блок */}
            <div className="cert-body">
              <div className="cert-gift-label">В ПОДАРОК</div>
              <div className="cert-price-block">
                <span className="cert-price-value">3 000</span>
                <span className="cert-price-currency">₽</span>
              </div>
              <div className="cert-price-desc">номинал сертификата</div>
            </div>

            {/* Декоративная линия */}
            <div className="cert-divider" style={{ marginTop: "auto" }}>
              <div className="cert-divider-line" />
              <div className="cert-divider-diamond">◆</div>
              <div className="cert-divider-line" />
            </div>

            {/* Футер */}
            <div className="cert-footer">
              <div className="cert-footer-item">
                <div className="cert-footer-label">ДЕЙСТВИТЕЛЕН ДО</div>
                <div className="cert-footer-value">31.12.2026</div>
              </div>
              <div className="cert-footer-divider" />
              <div className="cert-footer-item">
                <div className="cert-footer-label">СЕРИЯ</div>
                <div className="cert-footer-value">NS-2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* ОБРАТНАЯ СТОРОНА */}
        <div className="certificate-face certificate-back">
          <div className="cert-bg-pattern cert-bg-pattern-back" />
          <div className="cert-corner cert-corner-tl" />
          <div className="cert-corner cert-corner-tr" />
          <div className="cert-corner cert-corner-bl" />
          <div className="cert-corner cert-corner-br" />

          {/* Правая полоса */}
          <div className="cert-right-strip">
            <div className="cert-notch cert-notch-top" />
            <div className="cert-notch cert-notch-bottom" />
            <div className="cert-strip-content">
              <span className="cert-strip-text">NAIL STUDIO</span>
            </div>
          </div>

          {/* Основное содержимое обратной стороны */}
          <div className="cert-main cert-main-back">
            <div className="cert-back-header">
              <div className="cert-salon-name" style={{ fontSize: "22px" }}>NAIL STUDIO</div>
              <div className="cert-back-subtitle">Условия использования сертификата</div>
            </div>

            <div className="cert-divider">
              <div className="cert-divider-line" />
              <div className="cert-divider-diamond">◆</div>
              <div className="cert-divider-line" />
            </div>

            <div className="cert-back-content">
              {/* QR код */}
              <div className="cert-qr-section">
                <div className="cert-qr-wrapper">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://t.me/nailstudio&color=1a1a1a&bgcolor=ffffff&qzone=1"
                    alt="QR код группы"
                    className="cert-qr-img"
                  />
                  <div className="cert-qr-label">Наша группа</div>
                </div>

                {/* Условия */}
                <div className="cert-terms">
                  <div className="cert-term-item">
                    <span className="cert-term-dot">◆</span>
                    <span>Сертификат не суммируется со скидками</span>
                  </div>
                  <div className="cert-term-item">
                    <span className="cert-term-dot">◆</span>
                    <span>Обмен на денежные средства невозможен</span>
                  </div>
                  <div className="cert-term-item">
                    <span className="cert-term-dot">◆</span>
                    <span>Запись по предварительному согласованию</span>
                  </div>
                  <div className="cert-term-item">
                    <span className="cert-term-dot">◆</span>
                    <span>Сертификат действителен однократно</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cert-divider">
              <div className="cert-divider-line" />
              <div className="cert-divider-diamond">◆</div>
              <div className="cert-divider-line" />
            </div>

            {/* Контакты */}
            <div className="cert-contacts">
              <div className="cert-contact-item">
                <Icon name="Phone" size={13} className="cert-contact-icon" />
                <span>+7 (000) 000-00-00</span>
              </div>
              <div className="cert-contact-separator">·</div>
              <div className="cert-contact-item">
                <Icon name="MapPin" size={13} className="cert-contact-icon" />
                <span>г. Москва, ул. Красивая, 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cert-flip-hint">
        <Icon name="RefreshCw" size={14} />
        <span>Нажмите, чтобы перевернуть</span>
      </div>
    </div>
  );
};

export default GiftCertificate;
