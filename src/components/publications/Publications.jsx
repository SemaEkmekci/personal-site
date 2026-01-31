import React, { useState, useEffect } from 'react';
import './publications.css';

const ARTICLE = {
  title: 'Panoramik röntgenlerde derin öğrenme ile temporomandibular eklem bölgesindeki dejeneratif değişikliklerin otomatik tespiti',
  journal: 'Balkan Journal of Dental Medicine',
  year: '2024',
  volume: '28',
  issue: '2',
  pages: '99-116',
  authors: 'Tassoker Melek, Haklı Hüseyin, Yaman Metin Furkan, Ekmekcı Sema Nur, İncekara Senanur, Kamaçı Serhat, Öztürk Büşra',
  doi: '10.5937/bjdm2402099T',
  url: 'https://scindeks.ceon.rs/article.aspx?artid=2335-02452402099T',
  abstract: 'Bu çalışmanın amacı, TMJ bölgesinde panoramik röntgenlerde tespit edilen dejeneratif değişikliklerin derin öğrenme yöntemiyle otomatik tespitinin başarısını belirlemektir. TMJ dejenerasyonu tespiti için YOLOv5, YOLOv7 ve YOLOv8 algoritmaları kullanıldı. YOLOv7 en iyi sonuçları verdi: %99,63 doğruluk, %97,87 kesinlik, %100 duyarlılık, %98,92 F1 skoru ve %99,77 AUC.',
};

const Publications = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`publications section ${visible ? 'visible' : ''}`}
      id="makaleler"
    >
      <div className="publications-wrapper">
        <h2 className="section-title">Makaleler</h2>
        <div className="publications-container">
        <article className="publication-card">
          <div className="publication-card-inner">
            <h3 className="publication-title">{ARTICLE.title}</h3>
            <p className="publication-meta">
              {ARTICLE.journal}, {ARTICLE.year}, Cilt {ARTICLE.volume}({ARTICLE.issue}), s. {ARTICLE.pages}
            </p>
            <p className="publication-authors">{ARTICLE.authors}</p>
            <p className="publication-abstract">{ARTICLE.abstract}</p>
            <p className="publication-doi">DOI: {ARTICLE.doi}</p>
          </div>
          <a
              href={ARTICLE.url}
              target="_blank"
              rel="noreferrer noopener"
              className="a-btn"
            >
              Makaleyi Görüntüle
            </a>
        </article>
        </div>
      </div>
    </section>
  );
};

export default Publications;
