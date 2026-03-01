import GiftCertificate from "@/components/GiftCertificate";
import "@/styles/certificate.css";

const Index = () => {
  return (
    <div className="cert-page">
      <div className="cert-page-inner">
        <h1 className="cert-page-title">Подарочный сертификат</h1>
        <p className="cert-page-subtitle">Маникюр · Нейл-дизайн · Уход за руками</p>
        <GiftCertificate />
      </div>
    </div>
  );
};

export default Index;
