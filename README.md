# novastore

# 🛒 NovaStore Admin Panel

NovaStore E-Ticaret sistemi için React ve Vite kullanılarak geliştirilmiş, modern ve kullanıcı dostu bir yönetici (admin) paneli arayüzüdür. 

Bu proje, gerçek bir veritabanı bağlantısı olmadan **localStorage** kullanılarak CRUD (Oluştur, Oku, Güncelle, Sil) işlemlerinin nasıl simüle edilebileceğini göstermek amacıyla hazırlanmıştır.

🔗 **Canlı Demo:** [Projeyi İncele](agent-69b7e5e7b6be7f2--tourmaline-truffle-9b5537.netlify.app)

---

## ✨ Özellikler

- **📊 Dinamik Dashboard:** Sistemdeki toplam ürün sayısını ve kritik (düşük) stoklu ürünleri anlık olarak hesaplayıp gösterir.
- **📦 Ürün Yönetimi (CRUD):** - Yeni ürün ekleme, mevcut ürünleri düzenleme ve silme işlemleri yapılabilir.
  - Veriler tarayıcının `localStorage` hafızasında tutulduğu için sayfa yenilendiğinde kaybolmaz.
- **🚨 Akıllı Stok Uyarısı:** Stok miktarı 20 adet ve altında olan ürünler, ürün listesinde kırmızı renkli bir "Düşük" etiketiyle otomatik olarak vurgulanır.
- **👥 Müşteriler ve Siparişler:** Arayüz tasarımını ve yönlendirmeleri (routing) göstermek amacıyla statik (mock) verilerle oluşturulmuş listeleme sayfaları.

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** React (Vite)
- **Routing:** React Router DOM (Sayfalar arası geçiş için)
- **Veri Depolama:** Tarayıcı LocalStorage API
- **Deployment:** Netlify

---

## 🚀 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. **Projeyi Klonlayın:**
   ```bash
   git clone [https://github.com/berkankiraz16/novastore.git](https://github.com/berkankiraz16/novastore.git)
